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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTUzODExMywiaWF0IjoxNzExNDUxNzEzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20ifQ.ZzyXhshNbqtPKZNgMDH1M4mMVpx9VnyYLB19qv59H1JCvfDu9HBDjeoeXOxprcwQ8-8Ohi85vKAmrXhwfIhBpOu8o-Pe7TP9855G5rOp-RuskCUuCZP1lMkDKPSbzQypBi_gbcbPMmEWZ6QcpdjIieXBZWsjjR4eIGnZcqZ4GevjL3gOkZWuVHNOLtX8AZFDfP-0-nEJLiYQ7uuaKv-4F3e7ywzRNkzT2sNPxSWR6JbtZlCg_nfxT669wRvzz-JfJpPHN17CQSN4zqNhwok-NyrF0ch83Hm68xiHf_nlu7fS50a9RZuN2AV6AdI_7Arew7c_8jtyibZ3Gkh3g_PNzA',
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
          '/333' +
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
