import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  public pacingAlerts: any[] = [];
  public subaccounts: any[] = [];

  constructor(
    private db: AngularFirestore, 
  ) { }

  updateData(campaignId: any, index: number) {
    const docRef = this.db.collection('userSearch').doc(campaignId);
    docRef.get().subscribe(doc => {
      if (doc.exists) {
        const userData: any = doc.data();
  
        const pacingAlert = this.pacingAlerts.find(p => p.id === campaignId);
        if (pacingAlert && pacingAlert.platforms[index]) {
          pacingAlert.platforms[index].loading = false;
          pacingAlert.platforms[index].pacingAlerts = userData.platforms[index].pacingAlerts || [];
        }
      }
    }, error => {
      console.error("Error fetching or updating data: ", error);
    });
  }
}
