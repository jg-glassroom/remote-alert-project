import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';


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

  constructor (private db: AngularFirestore, private authService: AuthService, private fns: AngularFireFunctions) {}

  ngOnInit(): void {
    this.getAlerts()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  public getAlerts() {
    const callable = this.fns.httpsCallable('queryBigQuery');
    callable({}).subscribe(
      (result) => {
        this.dataSource.data = result; 
        console.log(result);
      },
      (error) => {
        console.error('Error calling function:', error);
      }
    );
  }
}
