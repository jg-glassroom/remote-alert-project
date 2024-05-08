import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getFirestore, doc, getDoc, updateDoc, deleteField } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BingService {
  private toaster = inject(ToastrService);
  private httpClient = inject(HttpClient);

  private clientId = 'c0398004-411f-4e05-8478-4e57f2f63503';
  private hostname = window.location.hostname;
  private redirectUri = this.hostname === "localhost" ? 
    'https://localhost:4200/integrations/microsoft' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/microsoft';
  private scope = 'https://ads.microsoft.com/msads.manage offline_access';
  private state = uuidv4();

  constructor() { }

  bingConnect(): void {
    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?source=microsoft&response_type=code&state=${this.state}&client_id=${this.clientId}&scope=${encodeURIComponent(this.scope)}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

  async bingDisconnect() {
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, "user", user.uid);

      try {
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const refreshToken = userData['microsoftRefreshToken'];

          if (refreshToken) {
            const logoutUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(this.redirectUri)}&client_id=${this.clientId}&token=${encodeURIComponent(refreshToken)}`;
            window.location.href = logoutUrl;

            await updateDoc(userDocRef, {
              microsoftAccessToken: deleteField(),
              microsoftRefreshToken: deleteField(),
            });

            localStorage.removeItem('microsoftAccessToken');
            this.toaster.success("Bing has been successfully disconnected", "Success");
          } else {
            this.toaster.error("No refresh token found", "Error");
          }
        } else {
          this.toaster.error("User document does not exist", "Error");
        }
      } catch (error) {
        console.error(`Error disconnecting Bing: ${error}`);
        this.toaster.error(`Error disconnecting Bing: ${error}`, "Error");
      }
    } else {
      this.toaster.error("User not logged in", "Error");
    }
  }
}
