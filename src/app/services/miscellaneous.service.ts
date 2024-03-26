import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Path, PathData } from '../models/Path';
import { Ratings } from '../models/Ratings';
import { APIResponse } from '../models/ApiResponse';
import { EnrolledBatches } from '../models/EnrolledBatches';
import { API } from '../constants/enums/API';
import { Review } from '../models/Reviews';
@Injectable({
  providedIn: 'root',
})
export class MiscellaneousService {
  user: any = {
    token:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTE3MzkzNywiaWF0IjoxNzExMTczNjM3LCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyN30.I7PeGHmCRWRz33_o5hu63u8oOjdJDZJG_w318QRhXGoUkBxWfLMWfnjwTO1Nl17FCFucZaBkEEtB2jlBmLYxyzQjnbcZ5jt2Eqc3BQyk5STgcWhmP1nTTUIA8AmGigaKDapkFX_XLbwd6jhT2PGcNkwadhg8EtqE3h5MwMwDnMz0-g5_Xg2sqy3Tcw038ApqBwA_f2LDqAA7kyOO4kJicBUDBSmP2y52ARawS-kUAP34AEVlkw8pZZKCiqs33GgYaSZEauWJtPHapQAnvVn3RezjnSt-Nr_O3plzdjpHKPCujXYpq-KjzN_-9JewwbVJlPcAOQ7iMcATHA-HaRCeNA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTUxNTE2MywiaWF0IjoxNzExNDI4NzYzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20ifQ.gZBu7VBWk9A6rfmv2DgyvsJ-csZSy7-3kEjSM3F45FBgiJ1U-CDhiEVVCr1fW-KfmekT5xmOSmNgAKk0yunRsYCH01mTtkNBYYWEujoad6IdWt2ZJxazpnQ12MPhVQiOM3bl9jUxJrhY9XaYd3I-xo1UeGaiX27y3Zjw5mmQXKW9EEwbR3_Nb76tIENU2YxQNsGbHnQS-2R7RWf3Jr52Y8LpTd-QYhWpDr3mH6SEkSbIk2CBIcDTogtxqllQKGeAcniwncMi0J5jiYDueUlRpr5O_LHnQLZdZKihup1SZtY1EjiwT1vQQh4cUThFpa_MrqW5PHlOnmZnnArD6ayS6A',
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
          '/327' +
          API.ENROLLED_BATCHES +
          API.PAGE_SIZE
      )
      .subscribe((res) => {
        console.log(res);
        if (res != null && res.data != null) {
          this.PathDataSubject.next(res.data);
        }
      });
  }

  private CourseRatingSubject = new BehaviorSubject<Ratings>({
    averageRating: 0,
    rating: {
      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStars: 0,
    },
  });
  courseRating$ = this.CourseRatingSubject.asObservable();

  getRating(id: number) {
    return this.http
      .get<APIResponse<Ratings>>(
        'https://api.training.zopsmart.com/students/courses/' + id + '/ratings'
      )
      .subscribe((res) => {
        if (res != null) {
          this.CourseRatingSubject.next(res.data);
          console.log(res);
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
          console.log(res.data);
        }
      });
  }
}
