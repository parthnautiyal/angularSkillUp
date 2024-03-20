import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
import { PathList } from "../models/Path";
@Injectable({
  providedIn: "root",
})
export class PathDataService {
  user: any = {
    token:
      "eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDkxMzMwNywiaWF0IjoxNzEwOTEzMDA3LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyOX0.h9sENEzW6_vtm9o4k3u1j-4-UM0efuiRI8k0MWgG6RhW7XqVqSGk-4P_RyWowSEGjyY27sKs30ZDFXCeCcdA61ehuzPnrGmI1RWEwHoyy-K-gLOD_8UJzp21bfilZU_uPQDl56qzvoRh4kBCQVoo1MBI9BJ-NmA7LOiW9lNu7HT9cVA-PWL6y2LdK3D9f_3lL2OOjcohK96MqoW9BlOFCTIDbDn0uyX0IXcgwHBaIlFBPyxbPIG9LWD9daZc-CueID2Ih1vayUNGiLC6Qo0DXGdqwiLGQ4xmJq2noLCuPdN7uRBZ86t9HonooA4cEFTKF-hnpdOgCwfu2_7pw1tELQ",
    refreshToken:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTA0NDY4MywiaWF0IjoxNzEwOTU4MjgzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.Uf3XLt-iSzViBFeO32Z1639Fl2p4ngOaEDArgbkrpnkXp8qrJEoxC_h_izfNABps-v8bgD0LPIGUNtKuIafiqrBsY4z0wDCfkWjzkfJwD48U-w6wm__UX6K0m4Iivhe-RQXQoBUEKzuudhMAvaW75fbDC34n_iT-oFUAqDkr_qwq5LzzolUAL5azBbb_KvTO4lfipdOyXUi3GzuwqD6ufnqERy4PA-BJ2_gOdw0KnBpuJ1F0JXG0Os4_Xkq1S4SFKrIw1wvjc1lKNRSRIIge7aYY7wxc383HLjmrrh26OHu-BirpQi-V4SbghsuFzO3GSmUrGP35FUQAqPbYxGEucg",
  };
  refreshHeader = new HttpHeaders({
    "Content-Type": "application/json",
    refreshtoken: this.user.refreshToken,

    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  url: string = "https://api.training.zopsmart.com/students/paths";

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // setInterval(() => {
    //   this.getRefreshToken().subscribe((res: any) => {
    //     localStorage.setItem('token', res.data.accessToken);
    //     console.log('token refreshed');
    //   });
    // }, 60000);
  }
  private cache: any = null;
  private allPathDataSubject = new BehaviorSubject<any>({});
  allPathsData$ = this.allPathDataSubject.asObservable();
  getPaths() {
    if (this.cache != null) {
      this.allPathDataSubject.next(this.cache);
    } else {
      this.http.get(this.url + "?pageSize=10&pageNo=1").subscribe((data) => {
        this.cache = data;
        this.allPathDataSubject.next(this.cache);
      });
    }
  }

  getPathData(id: string) {
    return this.http.get(this.url + "/" + id + "?projection=course");
  }
  getAllPaths(): Observable<PathList> {
    return this.http.get<PathList>(this.url + "?pageSize=12&pageNo=1");
  }
  getEnrolledPaths() {
    return this.http.get(
      "https://api.training.zopsmart.com/students/enrolled-paths"
    );
  }

  getNoOfEnrolledPaths() {
    return this.http.get(
      "https://api.training.zopsmart.com/students/no-of-enrolled-paths"
    );
  }

  getRefreshToken() {
    return this.http.post(
      "https://api.training.zopsmart.com/login/refresh",
      {
        organizationId: 2,
        currentRole: "student",
      },
      {
        headers: this.refreshHeader,
      }
    );
  }
}
