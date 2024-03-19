import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { PathList } from '../models/Path';
@Injectable({
  providedIn: 'root',
})
export class PathDataService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDg0NDUzNiwiaWF0IjoxNzEwODQ0MjM2LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMzNH0.BckJgBr8UJNlFiURWBss8eFr2PK4CJmGqkwI9gnKbVigohnidvxeb_oyrl65E0IcHjdOhPUONBSYlbatu-LnPlEbCBeafEwGy5HgkHKkKPrWpUU4ujzgBcgQIaPiv0QVWA-WYcRQzYK_e-1Chz66mhGc-XktnCmno7_BEmdcKQrnkYqgzX-ZwFI7EeXitPJuAFySwGgjzSEZML5_1Nl9XZFbxQLWVqvxbcTKNsAHf93Hf3STvSB-SAjUatMW3qo1oQmIMwRs9Y3BAlWrpZKSJYqW9UpjG0OhhG3doG-kmWDniGwMXC6AjpA5QiuBbgdmyXOk2WNP9zwikhOi26HiKA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMDkxMjM2NCwiaWF0IjoxNzEwODI1OTY0LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJhZGl0eWEuYmhhcmR3YWpAem9wc21hcnQuY29tIn0.YKpK-XNUg0DT5Nj1DAb_Nydrrm2y3rmo-ErKljMVDfAOOalK6CRp6zd0nYr4PJuueAPSQNX0mAJHISJgr_CsRF-y54qNNF7qqn4M1xhesgNYJEFYTMr7wrQ-MoBcq-TUHC00lvwPSy84D_BES1dhIR973AQIQ7VW7mvJ6pgthRVTCQSQn5MHdyXleUbrE8IXciMPuS_gwC3SGWuIWnDbsVgmzuXbLBFwX92-eEtGkDAXaYP26VLPKgNetutQjTGn68aFRArODwtjC1CSpF_odAdhzST0ACmUqekJN2ZXYJbTh2ncL3gn95VAzf1qWWu0I4_pG2ibOBS8Jl7q5DjU8g'
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
  getAllPaths() : Observable<PathList> {
    return this.http.get<PathList>((this.url = '?pageSize=12&pageNo=1'));
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
