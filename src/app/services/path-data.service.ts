import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Path } from '../models/Path';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTA0NjIzNCwiaWF0IjoxNzExMDQ1OTM0LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.Qs8p2LqVCi4C0jFyoyLvVJB8vGzsgIuGVGz4Kyjoo89DuBa0jBiSv3b-N2XrtZ0FO8B_Qx7I0l5VRZI-GuQppuCW-fn04uTFZ_eX9aBRBYgcEfGkESbH1WoQwBu_H4OSIGv8trBLBbJeQ1yErGn-LYpdbmZL_ONXWCAaJtoa9j6m09NCFGVOobvY4Ix2Jfuy5z5ezwouYKUDg8Ufr_zyPW6WP7hRWz0cMSJrg3Y3U4GKJx6WRn1kN0Yi2peZE_RS8cPIy8NKh_4V9Iz5ZesaQ_5BsVwPhwuzb7qqPJB-4Po-mG95pTp9FE5qN4tpNEzIzIyCkonCn4mZ0kjIR1_DAg',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTE3MTgzMiwiaWF0IjoxNzExMDg1NDMyLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.TiWndyndMIOggHsCTdm-M-HWnm03jWVZYn8cyCf8qQ2v35WtBFhaVGtBitbFmt3PAC-StKQXdttAa8_gsTyliHyFItiRkFseyp84L_6RPXSh5PlngQ5oTbm7dRtisB34XuhEzQVzNq0TSi2uh6lL393WlIRVnmeChEIu29I7ZrNHv3l1C0SJ89ZNhRZm8cK0z6Nkn2py6MZI67AlBp674jELeLDW7yUdKo047ODoEJdNbzimuEYMJWkbMzNJBxSjb8pOi6BavNGmeLpMbxjH6VHHPlbr_T5_hHyAsDxiaXnGYbKyxqErtfB9GjcBBkH_mn64xNnvi5evPF-qFreiWA',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = 'https://api.training.zopsmart.com/students/paths';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // setInterval(() => {
    //   this.getRefreshToken().subscribe((res: any) => {
    //     localStorage.setItem('token', res.data.accessToken);
    //     console.log('token refreshed');
    //   });
    // }, 60000);
  }
  private cache: any = null;
  getRefreshToken() {
    return this.http.post(
      'https://api.training.zopsmart.com/login/refresh',
      {
        organizationId: 2,
        currentRole: 'student',
      },
      {
        headers: this.refreshHeader,
      }
    );
  }
}
