import { Component, Inject, inject, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from '../../services/auth.service';
import { ExternalPlatformsService } from '../../services/external-platforms.service';
import { Dv360FormComponent } from '../dv360-form/dv360-form.component';
import { FacebookFormComponent } from '../facebook-form/facebook-form.component';
import { ReportService } from '../../services/report.service';

import { ToastrService } from 'ngx-toastr';

import { of } from 'rxjs';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    Dv360FormComponent,
    FacebookFormComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChildren(Dv360FormComponent) dv360Forms!: QueryList<Dv360FormComponent>;

  formGroup = new FormGroup({
    campaignName: new FormControl(''),
  });

  submitted: boolean = false;
  isEditMode: boolean = false;
  documentId: string | null = null;
  toaster = inject(ToastrService);
  isLoading: boolean = false;
  selectPlatforms: any[] = [];
  tabs: any = [{name: 'New platform', value: 'new'}];
  selectedTab = new FormControl(0);

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    public auth: AuthService,
    public externalPlatforms: ExternalPlatformsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reportService: ReportService,
    private db: AngularFirestore, 
  ) {
    this.isEditMode = !!data;
    if (this.isEditMode) {
      this.formGroup.get('campaignName')!.setValue(data.campaignName);
      this.documentId = data.id;
      this.tabs = []
      this.selectPlatforms = data.platforms;
      this.selectPlatforms.forEach((platform: any) => {
        if (platform === 'dv360') {
          this.tabs.push({ name: 'Display & Video 360', value: platform });
        }
      });
    }
  }

  ngOnInit() {}
  
  onSubmit(execute: boolean = false) {
    let allFormData: any = {
      campaignName: this.formGroup.get('campaignName')!.value,
    };
    let platforms: any = [];
    let doSubmit = true;

    this.dv360Forms.forEach(form => {
      const formData = form.getFormData();
      if (formData) {
        allFormData = {
          ...formData,
          ...allFormData,
        };
        if (!platforms.includes('dv360')) {
          platforms.push('dv360');
        }
      } else {
        doSubmit = false;
        console.error('A DV360 form is not valid');
      }
    });
    allFormData.platforms = platforms;

    if (doSubmit) {
      if (this.isEditMode && this.documentId) {
        return this.db.collection('userSearch').doc(this.documentId).update(allFormData).then(() => {
          this.toaster.success('Alert rule updated successfully', 'Success');
          if (execute) {
            this.reportService.processReport({ id: this.documentId, ...allFormData });
          }
          localStorage.removeItem('partners');
          localStorage.removeItem('selectedPartner');
          this.dialogRef.close();
          return of(null);
        });
      } else {
        console.log('Soumission des données du formulaire :', allFormData);
        return this.db.collection('userSearch').add(allFormData).then((docRef: any) => {
          return docRef.get().then((doc: any) => {
            if (execute) {
              this.toaster.success('Alert rule created and executed successfully', 'Success');
              let data: any = doc.data();
              data.id = docRef.id;
              this.reportService.processReport(data);
            } else {
              this.toaster.success('Alert rule created successfully', 'Success');
            }
            localStorage.removeItem('partners');
            localStorage.removeItem('selectedPartner');
            this.dialogRef.close();
            return of(null);
          });
        });
      }
    }
    return of(null);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  refreshData() {
    this.dv360Forms.forEach(form => form.refreshData());
  }

  addTab() {
    this.tabs.push({name: 'New platform', value: 'new'});
    this.selectedTab.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selectedTab.setValue(index);
  }

  getPlatform(platform: string, index: number) {
    const platforms: any = {
      'dv360': 'Display & Video 360',
      'facebook': 'Facebook',
    };
    this.selectPlatforms.push(platform);
    this.tabs[index] = ({ name: platforms[platform], value: platform });
  }

  get showAddTabButton(): boolean {
    const hasDv360 = this.tabs.some((t: any) => t.value === 'dv360');
    const hasFacebook = this.tabs.some((t: any) => t.value === 'facebook');
    return !(hasDv360 && hasFacebook);
  }
}
