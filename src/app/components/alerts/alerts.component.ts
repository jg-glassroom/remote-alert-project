import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AuthService } from '../../services/auth.service';

import { take } from 'rxjs/operators';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

  public displayedColumnsAlerts: string[] = ['CampaignName', 'CampaignID', 'ClientName', 'CreatedBy', 'error_rule_message'];
  public dataSource: any = [];

  constructor (private authService: AuthService, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.getAlerts()
  }

  public round(value: number): number {
    return Math.round(value);
  }
  
  public getAlerts() {
    this.authService.user$.pipe(take(1)).subscribe((user: any) => {
      if (user && user.uid) {
        this.db.collection('Pacing_alerts_datamart', (ref: any) => ref.where('userId', '==', user.uid)).snapshotChanges().subscribe((actions: any) => {
          const data = actions.map((a: any) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            if (data) {
              return { id, ...data };
            } else {
              return {};
            }
          });
          this.dataSource = data; 
        });
        this.db.collection('DV360Report', (ref: any) => ref.where('userId', '==', user.uid)).snapshotChanges().subscribe((report: any) => {
          console.log("AAAAAAAAAAAAAAAAAAA", report)
          // this.dataSource = report.report;
        });
      }
    });
  }
}
