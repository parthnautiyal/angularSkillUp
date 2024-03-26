import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Path, PathData } from '../models/Path';
import { Ratings } from '../models/Ratings';
import { APIResponse } from '../models/ApiResponse';
import { EnrolledBatches } from '../models/EnrolledBatches';
import { API } from '../constants/enums/API';
@Injectable({
  providedIn: 'root',
})
export class MiscellaneousService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTE3MzkzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.I7PeGHmCRWRz33_o5hu63u8oOjdJDZJG_w318QRhXGoUkBxWfLMWfnjwTO1Nl17FCFucZaBkEEtB2jlBmLYxyzQjnbcZ5jt2Eqc3BQyk5STgcWhmP1nTTUIA8AmGigaKDapkFX_XLbwd6jhT2PGcNkwadhg8EtqE3h5MwMwDnMz0-g5_Xg2sqy3Tcw038ApqBwA_f2LDqAA7kyOO4kJicBUDBSmP2y52ARawS-kUAP34AEVlkw8pZZKCiqs33GgYaSZEauWJtPHapQAnvVn3RezjnSt-Nr_O3plzdjpHKPCujXYpq-KjzN_-9JewwbVJlPcAOQ7iMcATHA-HaRCeNA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTQ0OTMwNiwiaWF0IjoxNzExMzYyOTA2LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwcmFiYWwuc2hhcm1hQHpvcHNtYXJ0LmNvbSJ9.js0IwfaFC5L_XEcpTWBTsA-DVN9hCIHhEoBNVovvg7mBFBhs0KRc0pE_JB3YMr0tSd9KJyFONdUnqxVsmvdniwLiHg7913bqXP5M0ZotWR2eMO787B-Qa8Yvx4PFNIZpLVUjh_ESgNQzVYW-c6t96JGuD_cp-ek50brEf53S0uULwy5FuRFbq19UvZ8WCLrODfj6GbfNy_zgoPvl8nbWctEJFGHTH559C9DQsaqb5xkJg1LvnFL-Z96we31U7QvsTxsg406bcqzVeLplJgbHG7LUqJO0QVNtAVL8c2Hc5effBPW9A6tBcpUThM8kvVIUwHxlRyC9XbWdAlJBjGrhtA',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = API.BASE_URL + API.STUDENTS + API.PATHS;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  getRefreshToken() {
    return this.http.post(
      API.BASE_URL + API.LOGIN + API.REFRESH,
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
    return this.http.post(API.BASE_URL + API.STUDENT + API.FAVOURITES, {
      courseId: courseId,
    });
  }
  deleteFavourite(courseId: number) {
    return this.http.delete(
      API.BASE_URL + API.STUDENT + API.FAVOURITES + '/' + courseId
    );
  }
  private PathDataSubject = new BehaviorSubject<any>({});
  private loading = new BehaviorSubject<boolean>(true);
  pathsData$ = this.PathDataSubject.asObservable();
  loading$ = this.loading.asObservable();

  getBatchesData() {
    this.http
      .get<APIResponse<EnrolledBatches>>(
        API.BASE_URL +
          API.STUDENT +
          '/332' +
          API.ENROLLED_BATCHES +
          API.PAGE_SIZE
      )
      .subscribe((res) => {
        if (res != null && res.data != null) {
          this.PathDataSubject.next(res.data);
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
