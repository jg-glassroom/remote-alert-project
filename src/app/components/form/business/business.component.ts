import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayUnion } from 'firebase/firestore';
import { getAuth } from '@angular/fire/auth';

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

  constructor(
    private http: HttpClient,
    private dialogRef: MatDialogRef<BusinessComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private db: AngularFirestore
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
  }

  displayFn(subaccount: any): string {
    return subaccount && subaccount.name ? subaccount.name : '';
  }

  async saveBusiness() {
    if (this.isEditMode && this.documentId) {
      await this.db.collection('business').doc(this.documentId).update(this.formGroup.value);
      this.toaster.success('Business updated successfully', 'Success');
    } else {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        return;
      }
      const docRef = await this.db.collection('business').add(this.formGroup.value);
  
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
  
      await this.db.collection('user').doc(user.uid).update({
          selectedBusiness: docRef.id
      });
      this.toaster.success('Business created successfully', 'Success');
    }
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
