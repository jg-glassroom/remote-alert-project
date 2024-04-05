import { Injectable, inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

import { getFirestore, doc, updateDoc, deleteField } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firstValueFrom } from 'rxjs';

declare const FB: any;


@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  private toaster = inject(ToastrService);

  constructor(private db: AngularFirestore, private fns: AngularFireFunctions) { }

  async facebookConnect(): Promise<any> {
    return new Promise((resolve, reject) => {
      FB.login(async (response: any) => {
        if (response.authResponse) {
          const user = getAuth().currentUser;
  
          if (user) {
            const exchangeTokenFunction = this.fns.httpsCallable('exchangeFacebookToken');
            try {
              const result = await firstValueFrom(exchangeTokenFunction({ shortLivedToken: response.authResponse.accessToken }));
              const longLivedToken = result.longLivedToken;

              await this.db.collection('user').doc(user.uid).update({
                facebookAccessToken: longLivedToken,
              });
              localStorage.setItem('facebookAccessToken', longLivedToken);
              this.toaster.success("Successfully connected with Facebook", "Success");
              console.log('Successfully connected with Facebook', response);
              resolve(response);
            } catch (error) {
              this.toaster.error("Error exchanging Facebook token", "Error");
              reject(error);
            }
          } else {
            this.toaster.error("No Firebase user logged in", "Error");
            reject('No Firebase user logged in');
          }
        } else {
          this.toaster.error("User cancelled login or did not fully authorize", "Error");
          reject('User cancelled login or did not fully authorize.');
        }
      }, {scope: 'email,ads_read,business_management'});
    });
  }

  facebookDisconnect(): Promise<any> {
    return new Promise((resolve, reject) => {
      FB.logout(async (response: any) => {
        const db = getFirestore();
        const user = getAuth().currentUser;

        if (user) {
          try {
            await updateDoc(doc(db, "user", user.uid), {
              facebookAccessToken: deleteField()
            });
          } catch (error) {
            this.toaster.error(`Error disconnecting Facebook: ${error}`, "Error");
            reject(error);
          }
        } else {
          reject("User not logged in");
        }

        localStorage.removeItem('facebookAccessToken');
        this.toaster.success("Facebook has been successfully disconnected", "Success");
        resolve(response);
      });
    });
  }
}
