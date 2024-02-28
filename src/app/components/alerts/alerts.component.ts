import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, HttpClientModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumns: string[] = ['campaignName', 'campaignId', 'startDate', 'endDate', 'budget'];
  public dataSource = new MatTableDataSource<any>([]);
  private functionUrl = 'https://northamerica-northeast1-glassroom-firebase.cloudfunctions.net/queryBigQuery';

  constructor (private db: AngularFirestore, private authService: AuthService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlerts()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  public getAlerts() {
    this.authService.getIdToken().then(token => {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      });
      this.http.post<any[]>(this.functionUrl, {}, { headers }).subscribe({
        next: (data) => {
          console.log(data);
          this.dataSource.data = data;
        },
        error: (error) => console.error(error),
      });
    }).catch(error => {
      console.error('Error fetching Firebase ID token', error);
    });
  }
  
}
