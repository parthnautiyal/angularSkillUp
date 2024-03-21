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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTA4Nzk3OCwiaWF0IjoxNzExMDAxNTc4LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20ifQ.PbDGZVHgXHjBf81j03_9IC5XGewySReYtIViZc-GDksNCbKrnqX2-aSX-GboxevRL8xdK7kinQFmXun4WSNgoE-NpBJA64NlRkqpHJBY2r-Qf9iU7gXFn8jIjvramLiF0CD_16pEWEf5HqHcLOta6azHkr3reoKtxz0HmG9Ph94OPl_2CJ_TfyqFjJwl5N5m48pessDh5SvJA63L01gom2AQBuXOP2DCPfl5_DFMorbYTMKEqMeCpvGypeDW8UBCfLSNVm4cosB09ZcNYlnZ8UrcpVn2easNyNgVU_bhAmpGfrYlRIoUj7aCFl1Yzbgecz2IRpU-Rpj5WadFrKOxAQ',
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

  getPathData(id: string) {
    return this.http.get(this.url + '/' + id + '?projection=course');
  }
  // getAllPaths(): Observable<Path[]> {
  //   return this.http.get<Path[]>(this.url + '?pageSize=12&pageNo=1');
  // }
  // getEnrolledPaths() {
  //   return this.http.get(
  //     'https://api.training.zopsmart.com/students/enrolled-paths'
  //   );
  // }

  // getNoOfEnrolledPaths() {
  //   return this.http.get(
  //     'https://api.training.zopsmart.com/students/no-of-enrolled-paths'
  //   );
  // }

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
