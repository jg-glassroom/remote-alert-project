import { Component, ViewChild } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';

import { AuthService } from '../../services/auth.service';

import { take } from 'rxjs/operators';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumnsAlerts: string[] = ['CampaignName', 'CampaignID', 'ClientName', 'CreatedBy', 'error_rule_message'];
  public dataSource = new MatTableDataSource<any>([]);

  constructor (private authService: AuthService, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.getAlerts()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
          this.dataSource.data = data; 
        });
      }
    });
  }
}
