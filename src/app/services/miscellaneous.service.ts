import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Path, PathData } from '../models/Path';
import { Ratings } from '../models/Ratings';
import { APIResponse } from '../models/ApiResponse';
import { EnrolledBatches } from '../models/EnrolledBatches';
@Injectable({
  providedIn: 'root',
})
export class MiscellaneousService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTE3MzkzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.I7PeGHmCRWRz33_o5hu63u8oOjdJDZJG_w318QRhXGoUkBxWfLMWfnjwTO1Nl17FCFucZaBkEEtB2jlBmLYxyzQjnbcZ5jt2Eqc3BQyk5STgcWhmP1nTTUIA8AmGigaKDapkFX_XLbwd6jhT2PGcNkwadhg8EtqE3h5MwMwDnMz0-g5_Xg2sqy3Tcw038ApqBwA_f2LDqAA7kyOO4kJicBUDBSmP2y52ARawS-kUAP34AEVlkw8pZZKCiqs33GgYaSZEauWJtPHapQAnvVn3RezjnSt-Nr_O3plzdjpHKPCujXYpq-KjzN_-9JewwbVJlPcAOQ7iMcATHA-HaRCeNA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTM5Mzg5NywiaWF0IjoxNzExMzA3NDk3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.g67O_dGQ1xFEhZ01PvKX8VEdZCremhZVrbatu-5lvhEX3C1I-gDPB4Vo5ygcVQUUCo-3LxZDgIMIGK6wwq6NxRmxCzGy_8lavzO8do5eje29QtNodO0InV_1hRopAW5tDydICTh8vYirvCrh_8Pn8HV0QDptq8_6ck1n4HiatOBNbcwx33YPV2FTOV5nS_I-Ex9kpkQ6CwxcqFspNSKJMsaKUI2iHUwdtS19djTWJsROTXho7QroNoZhImjy2HCPHRPhT4-rtb0ksXZgG9L10Nf-TAPnwtMiCqNwkX6lM8La0Fzuu5plx_d1S3mNAO67ixqo643CVa-YAoegb_ra_g',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = 'https://api.training.zopsmart.com/students/paths';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
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

  getBatchesData() {
    return this.http.get<APIResponse<EnrolledBatches>>(
      'https://api.training.zopsmart.com/student/329/enrolled-batches?pageSize=100&pageNo=1'
    );
  }

  getRating(id: number) {
    return this.http.get<APIResponse<Ratings>>(
      'https://api.training.zopsmart.com/courses/' + id + '/ratings'
    );
  }

  // body: JSON.stringify({ courseId: courseId }),
}
