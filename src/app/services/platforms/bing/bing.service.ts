import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class BingService {
  private clientId = 'c0398004-411f-4e05-8478-4e57f2f63503';
  private hostname = window.location.hostname;
  private redirectUri = this.hostname === "localhost" ? 
  'https://localhost:4200/profile/microsoft' : 'https://alert-project-xy52mshrpa-nn.a.run.app/profile/microsoft';
  private scope = 'https://ads.microsoft.com/msads.manage offline_access';
  private state = uuidv4();

  constructor() { }

  bingConnect(): void {
    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize/?source=microsoft&response_type=code&state=${this.state}&client_id=${this.clientId}&scope=${encodeURIComponent(this.scope)}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

  bingDisconnect() {}
}
