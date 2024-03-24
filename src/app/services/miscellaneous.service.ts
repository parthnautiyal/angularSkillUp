import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Path, PathData } from '../models/Path';
import { APIResponse } from '../models/ApiResponse';
import { Ratings } from '../models/Ratings';
@Injectable({
  providedIn: 'root',
})
export class MiscellaneousService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTE3MzkzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.I7PeGHmCRWRz33_o5hu63u8oOjdJDZJG_w318QRhXGoUkBxWfLMWfnjwTO1Nl17FCFucZaBkEEtB2jlBmLYxyzQjnbcZ5jt2Eqc3BQyk5STgcWhmP1nTTUIA8AmGigaKDapkFX_XLbwd6jhT2PGcNkwadhg8EtqE3h5MwMwDnMz0-g5_Xg2sqy3Tcw038ApqBwA_f2LDqAA7kyOO4kJicBUDBSmP2y52ARawS-kUAP34AEVlkw8pZZKCiqs33GgYaSZEauWJtPHapQAnvVn3RezjnSt-Nr_O3plzdjpHKPCujXYpq-KjzN_-9JewwbVJlPcAOQ7iMcATHA-HaRCeNA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTM1NzgzOCwiaWF0IjoxNzExMjcxNDM4LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.IxicIg79pm2kdeivaPLIxRKgtZZjjeZi-d1j0SKL0OaSSqsUj3fnQf3Ytosamtff9G9pALnAjnHLcWpiDHJTNy1Y6iNj3Y2Tr7zrpIiiH5CTLhwI1ZMW7sz6z6GiVu-OODCmm75b_3eKo5-ZNn6-NxJfp87Ty0wvTo0IJ0hrddFEdObn4ogi0tF3_hPB31VmB3hGDLGdr6bUqnTSFlbZoD86iqCiEI6jPN1SdWNgHg6uz1Jj9_ZK5qEdbT3Ra0fyDNamzEoetDiVx5jygbiNjCePuoty4m8B1wkrFT2Q6ERsCDwqJO85bHQukkXuQtUXo6AcNozIxQpGU6qctyLGoA',
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

  postFavourite(courseId: number) {
    return this.http.post(
      'https://api.training.zopsmart.com/student/favourites',
      {
        courseId: courseId,
      }
    );
  }
  deleteFavourite(courseId: number) {
    return this.http.delete(
      'https://api.training.zopsmart.com/student/favourites/' + courseId
    );
  }
  private PathDataSubject = new BehaviorSubject<any>({});
  private loading = new BehaviorSubject<boolean>(true);
  pathsData$ = this.PathDataSubject.asObservable();
  loading$ = this.loading.asObservable();

  getPathData(id: number) {
    this.http
      .get<APIResponse<PathData>>(
        'https://api.training.zopsmart.com/students/paths/' +
          id +
          '?projection=course'
      )
      .subscribe((res) => {
        if (res != null) {
          this.PathDataSubject.next(res.data);
          this.loading.next(false);
        } else {
          this.loading.next(true);
        }
      });
  }

  getRating(id: number) {
    return this.http.get<APIResponse<Ratings>>(
      'https://api.training.zopsmart.com/courses/' + id + '/ratings'
    );
  }

  // body: JSON.stringify({ courseId: courseId }),
}
