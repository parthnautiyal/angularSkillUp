import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Path, PathData } from '../models/Path';
import { Ratings } from '../models/Ratings';
import { APIResponse } from '../models/ApiResponse';
import { EnrolledBatches } from '../models/EnrolledBatches';
import { API } from '../constants/enums/API';
import { Review } from '../models/Reviews';
import { SearchResponse } from '../models/SearchResponse';
@Injectable({
  providedIn: 'root',
})
export class MiscellaneousService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTUxODk3NywiaWF0IjoxNzExNTE4Njc3LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.kGzFxxiTbOxtTUOPXEP0GCJWfMnzRY0vDh6qupd-mRPe4ceFPlSQFq7yrZaVMDrhX_C_H80m4GzajW0diVmbKmBJrwNL-F_a4K3pWWDebdQ8BdBEEphHauYxxyu3wmoyHZLaGOROV3Yfrm647jcajnu7WRm1SwKuuWuOvR7gQn7e68so826fBYyBtD583T_bQioLgZWhtz_ptSdNjmJE_VbQb_s3VozGJuyVMrViRpk5I3Z61RvAYSAgTtZ54xZLHH0cE1WlxtsRAEqpiDn26iwjR7qeR4oqgFUW0tJ43Tp5XuDH52g49pY1BAIJq4j9bWuakhlMNFCfbjV2_5hH9g',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTYwNDg4NywiaWF0IjoxNzExNTE4NDg3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.b7V2y08YMbYPwD43stqLqSZi4nXqAme9Zd8KTEvcGBBD4WT6wIWLIU5j8fvfilRR6-HH6Hw-ra5C-KQHtW1AKMsbd4oLkyPiwapVwaVRyJUVy1Wp1ZfU4lMTQK2FcML5kmk3aG3yTFFv2GEy1e3pXYOxgkCkRGTerDiPIqp24wLT0UgfqBRs3kqwc3r7lE07ykKR07mksLGbOm5fj6sUbssuljeFW5BChdWQ7brfjjKxG6mSI7PKYHB7aD7R1GJJipvi03FuAq3ktb6YkGojtOtm6iO4yqJ7I_XeIi0Qy0LyJM9TnL1XyObyT-wrkFkXxAjaarWY5NWQt6Gpk34WbQ',
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
  pathsData$ = this.PathDataSubject.asObservable();

  getBatchesData() {
    this.http
      .get<APIResponse<EnrolledBatches>>(
        API.BASE_URL +
          API.STUDENT +
          '/329' +
          API.ENROLLED_BATCHES +
          API.PAGE_SIZE
      )
      .subscribe((res) => {
        // console.log(res);
        if (res != null && res.data != null) {
          this.PathDataSubject.next(res.data);
        }
      });
  }

  private CourseReviewsSubject = new BehaviorSubject<Review[]>([
    {
      reviewId: 0,
      postedBy: {
        email: '',
        id: 0,
        imageUrl: '',
        name: '',
      },
      postedAt: '',
      updatedAt: '',
      deletedBy: '',
      deletedAt: '',
      rating: 0,
      feedback: '',
    },
  ]);

  courseReviews$ = this.CourseReviewsSubject.asObservable();

  getCourseReviews(id: number) {
    return this.http
      .get<APIResponse<Review[]>>(
        'https://api.training.zopsmart.com/students/courses/' +
          id +
          '/reviews/all'
      )
      .subscribe((res) => {
        if (res != null && res != undefined) {
          this.CourseReviewsSubject.next(res.data);
          // console.log(res.data);
        }
      });
  }

  searchByTitle(title: string): Observable<APIResponse<SearchResponse>> {
    return this.http.get<APIResponse<SearchResponse>>(
      API.BASE_URL + '/search?title=' + title + '&role=student&field=all'
    );
  }
}
