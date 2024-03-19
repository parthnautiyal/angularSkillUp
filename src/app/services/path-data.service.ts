import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
<<<<<<< Updated upstream
import { BehaviorSubject } from 'rxjs';
=======
import { Observable } from 'rxjs';
import { PathList } from '../models/Path';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDgzMzA2NSwiaWF0IjoxNzEwODMyNzY1LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMzNH0.DtjlMAD1t1OdarkUJD74oBaQWricfq3VI3XJwv1PsaFN3RIZDFT9OgfZGbMKEw5-magpb1rNR9JhVre3LIzBwZnoMmXLCv8SWlevIiSlS5Rw8hEkvqUuaXbkKyXNr-2DJWF-NtYiDUHUT8OrwG3cv3E9awlnDVB2PhZ1fEymqi9PyrLFvy5VnzS8D9aCcMRFvfCfS8UiXtdAesmQ_Ay10IYUnKfbNHW0xjLikNnQ-5EFOVri31oXyU1UOVSD_yEbp7lLuxdOFy6y2Uz0K0anctn50d3GL53ElAXf_b6tjvc16DKPqDGx5J7c4l1TeCTDESs8KEMw1JvAtefyVDy5zw',
    refreshToken:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDg0MDU3NywiaWF0IjoxNzEwNzU0MTc3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20ifQ.Dv1ct-UTBS1lyeKCGxQCJeS34Ke_wzwif4_wRef3V-o7dMlCMGQe_dTSupiT5HMZjFvgAFFejUQZJyxG1_WKASBeLKBSs4TTLVa6UNPQAwQ_a25NXM1DQh3rh8aakOUp-BH5yr6TboH3GnqlE75_mMRK8yfg__EFa7iKYHpH_XIWqYvbpFZ-PLfcesvBuFAMuDMT49tla13vRPrvE91sAMnpLvmLOwAsnvpN79DtryPEcT7LXmKjqIeLj3dxkn4nSC4_J2_bgyXx0jLOzs2qLqiT_J-njzcZmKDU_1ZplHFIXXORsqP3HUvhn2GaOfUZpJzmiyH_YoqjIz_12gnzmw',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = 'https://api.training.zopsmart.com/students/paths';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    setInterval(() => {
      this.getRefreshToken().subscribe((res: any) => {
        localStorage.setItem('token', res.data.accessToken);
        console.log('token refreshed');
      });
    }, 60000);
  }
  private cache: any = null;
  private allPathDataSubject = new BehaviorSubject<any>({});
  allPathsData$ = this.allPathDataSubject.asObservable();
  getPaths() {
    if (this.cache != null) {
      this.allPathDataSubject.next(this.cache);
    } else {
      this.http.get(this.url + '?pageSize=10&pageNo=1').subscribe((data) => {
        this.cache = data;
        this.allPathDataSubject.next(this.cache);
      });
    }
  }

  getPathData(id: string) {
    return this.http.get(this.url + '/' + id + '?projection=course');
  }
<<<<<<< Updated upstream
  getAllPaths() {
    return this.http.get((this.url = '?pageSize=12&pageNo=1'));
  }
  getEnrolledPaths() {
    return this.http.get(
=======
  getData() : Observable<PathList> {
    return this.http.get<PathList>(
      'https://api.training.zopsmart.com/students/paths?pageSize=12&pageNo=1'
    );
  }
  getOngoingPathsData() : Observable<PathList> {
    return this.http.get<PathList>(
>>>>>>> Stashed changes
      'https://api.training.zopsmart.com/students/enrolled-paths'
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
