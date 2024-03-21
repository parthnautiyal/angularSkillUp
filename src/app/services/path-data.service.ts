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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTAwNjI3OCwiaWF0IjoxNzExMDA1OTc4LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.d7NV-P0gwUkCxlqOjmE2eEJBL4_SMoahELXaPdlY9hE0C5DW1BSEOuy_BtSaeLlsrbnE-VoabUcGdo_CUgWrQ9JbIm1vzmw4GUKBQz-SrpIJHbsMCRpkRnUn1DhHKisAVhdKUfUFDHiKu0O1QeJ8u-BYIvtDZzULSHAORsennPGip4qB3ww3TIfPKcMHkAlMMp4xim4niz8pJcot8GX7mQWiXRUPg3xVjkQZDnklUNcfn8wyp6fzdYoPPjU-I5dVFOQHvWI_Rt_bEFgd4xE761XDGGdDbTQlfynhhTIH3SIZAIw72KXD_3edYN72ZOmb_IIPhCxAdnIvGYIRgsplOg',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTA0NDY4MywiaWF0IjoxNzEwOTU4MjgzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.Uf3XLt-iSzViBFeO32Z1639Fl2p4ngOaEDArgbkrpnkXp8qrJEoxC_h_izfNABps-v8bgD0LPIGUNtKuIafiqrBsY4z0wDCfkWjzkfJwD48U-w6wm__UX6K0m4Iivhe-RQXQoBUEKzuudhMAvaW75fbDC34n_iT-oFUAqDkr_qwq5LzzolUAL5azBbb_KvTO4lfipdOyXUi3GzuwqD6ufnqERy4PA-BJ2_gOdw0KnBpuJ1F0JXG0Os4_Xkq1S4SFKrIw1wvjc1lKNRSRIIge7aYY7wxc383HLjmrrh26OHu-BirpQi-V4SbghsuFzO3GSmUrGP35FUQAqPbYxGEucg',
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
  getAllPaths(): Observable<Path[]> {
    return this.http.get<Path[]>(this.url + '?pageSize=12&pageNo=1');
  }
  getEnrolledPaths() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/enrolled-paths'
    );
  }

  getNoOfEnrolledPaths() {
    return this.http.get(
      'https://api.training.zopsmart.com/students/no-of-enrolled-paths'
    );
  }

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
