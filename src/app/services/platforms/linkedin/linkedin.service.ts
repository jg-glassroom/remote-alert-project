import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  private clientId: string = '773p5crl5ty3pg';
  private authUrl: string = 'https://www.linkedin.com/oauth/v2/authorization';

  constructor(private http: HttpClient) { }

  linkedinConnect() {
    const hostname = window.location.hostname;
    const redirectUri = hostname === "localhost" ? 
      'https://localhost:4200/integrations/linkedin' : 'https://alert-project-xy52mshrpa-nn.a.run.app/integrations/linkedin';
    const scope = 'r_liteprofile';
    const state = 'DCEEFWF45453sdffef424';

    const params = new HttpParams()
      .set('response_type', 'code')
      .set('client_id', this.clientId)
      .set('redirect_uri', encodeURI(redirectUri))
      .set('state', state)
      .set('scope', scope);

    window.location.href = `${this.authUrl}?${params.toString()}`;
  }
  linkedinDisconnect() {}
}
