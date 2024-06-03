import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { arrayUnion, doc } from 'firebase/firestore';
import { getAuth } from '@angular/fire/auth';
import { getDoc } from 'firebase/firestore';

import { CommonService } from '../../../services/common/common.service';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { ToastrService } from 'ngx-toastr';

import { of, Observable, BehaviorSubject } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-business',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {
  formGroup!: FormGroup;
  isEditMode: boolean = false;
  originalData: any;
  documentId: string | null = null;
  toaster = inject(ToastrService);
  disableCancel: boolean = false;
  countries: any = [];
  private countriesSubject = new BehaviorSubject<any[]>([]);
  public countries$ = this.countriesSubject.asObservable();
  originalCountries$!: Observable<any[]>;
  file: any;

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<BusinessComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore,
    public commonService: CommonService,
    private fireStorage: AngularFireStorage
  ) {
    this.isEditMode = !!data && data.id;
    if (data && data.disableCancel) {
      this.disableCancel = data.disableCancel;
    }
    if (this.isEditMode) {
      this.originalData = data;
      this.documentId = data.id;
    }
  }

  async ngOnInit() {
    this.createForm();
    await this.getCountries();
  }

  setupFiltering(): Observable<any[]> {
    return this.formGroup.get('country')!.valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value.toLowerCase() : ''),
      switchMap((name: any) => this.filterElement(name))
    );
  }
  
  filterElement(filterValue: string): Observable<any[]> {
    return this.originalCountries$.pipe(
      map((elements: any) => elements.filter((element: any) => element['name'].toLowerCase().includes(filterValue)))
    );
  }

  async getCountries() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all?fields=name').subscribe(data => {
      this.countries = data.map(country => ({name: country.name.common}));
      this.countries.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.countries$ = this.setupFiltering();
      this.originalCountries$ = of(this.countries);
    }, error => {
      console.error('Error fetching countries:', error);
    });
  }

  async createForm() {
    this.formGroup = this.formBuilder.group({
      name: [this.data?.name || null, [Validators.required]],
      description: [this.data?.description || null],
      website: [this.data?.website || null],
      country: [this.data?.country || ''],
    });

    if (!this.commonService.isAdmin) {
      this.formGroup.disable();
    }
  }

  displayFn(country: any): string {
    return country && country.name ? country.name : '';
  }

  async saveBusiness() {
    let business = this.formGroup.value;
    if (this.isEditMode && this.documentId) {
      await this.db.collection('business').doc(this.documentId).update(this.formGroup.value).then(async () => {
        if (this.file) {
          const path = `businessLogo/${this.documentId}_${this.file.name}`;
          const uploadTask = await this.fireStorage.upload(path, this.file);
          const url = await uploadTask.ref.getDownloadURL();
          await this.db.collection('business').doc(this.documentId!).update({
            logoUrl: url
          });
        }
      });
      this.toaster.success('Business updated successfully', 'Success');
    } else {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        return;
      }
      await this.db.collection('business').add(this.formGroup.value).then(async (docRef) => {
        if (this.file) {
          const path = `businessLogo/${docRef.id}_${this.file.name}`;
          const uploadTask = await this.fireStorage.upload(path, this.file);
          const url = await uploadTask.ref.getDownloadURL();
          await this.db.collection('business').doc(docRef.id!).update({
            logoUrl: url
          });
        }

        const userRolesRef = this.db.collection('userRoles').ref.where('userId', '==', user.uid);
        const snapshot = await userRolesRef.get();
    
        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          await this.db.collection('userRoles').doc(doc.id).update({
            businessRoles: arrayUnion({
              businessId: docRef.id,
              role: 'ADMIN'
            })
          });
        } else {
          await this.db.collection('userRoles').add({
            userId: user.uid,
            businessRoles: [{
              businessId: docRef.id,
              role: 'ADMIN'
            }]
          });
        }

        const selectedBusinessDoc = await getDoc(docRef);
        const selectedBusiness = { id: docRef.id, ...selectedBusinessDoc.data() as any };
        await this.db.collection('user').doc(user.uid).update({
            selectedBusiness: selectedBusiness
        });
        this.toaster.success('Business created successfully', 'Success');
      });
    }
    this.dialogRef.close(business);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  async onFileChange(event: any) {
    this.file = event.target.files[0];
  }
}
