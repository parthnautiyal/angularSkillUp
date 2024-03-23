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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTI5NjkzMSwiaWF0IjoxNzExMjEwNTMxLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.cO6Z0xMxDDOW6ztSXLfZ1vmoa4ClWO8ElIbV3IMwvZ-AOW2co9yavcHphXzXT66pmwx3Jn8xH2pnBEZPfZeHtqOEn3t7gHuP5pmX8G0ZMzNuL532sWUADECy7N_2o01mD5TQgrgcYkiYnF3ptWzsuEi2Ac2zaJLVhKQGCuetNtc3pNP6n8ohBk3fIj9VCUrjAfUXeom0AncnOIQZn2nSpdX8frB7-c8eAobU08X5uWCpJk-CZ6mBZQNo5Rm1M_v9RUkCQR0mZm99mKI_gQRHCsaO6IYkT6DsvxElItwDvFH7qn-KvVP8LWn02Y11Wq7x3MnyQhW-b2RM7TASmkvWjg',
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
