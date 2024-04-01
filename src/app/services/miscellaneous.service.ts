import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMTk1MzgyOCwiaWF0IjoxNzExOTUzNTI4LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoibmFtYW4uZ3VwdGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMjd9.IThEYPkq_lQ1sFXctm3O8VLi6ZDuXwod5k_pRNXVu30v1uTUiO0twy15O2lb9zWQl6RnkbqeuDf9rP345GZfqrO378PtGNzRx9qCfzmmwzJa1OvqX-sxrMUEs9XegPXgJcuLqLJLo5rMZnKBCOqkdsSs4xqMeeeAH4w_PPWe6DmSxOHLk6ECV_QF_Zc6i72iEnJidVR7AjqhOaOjRpsWIgNwPv7HgLuZ9cIoCJ-z1tiNYJ2THiZeRXGMhCfQ5NIgxfx1fDVmiBFbzbJHd4XyOvsMSq5m2Eh9wAHp_CygW8hZZFvEEaNh6foVQEO25-WW4OZrcrReqZGu6JcczZPE1w',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMjA2NTA3OCwiaWF0IjoxNzExOTc4Njc4LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.armnIIRfBfzC9GNM4aAa-GhsDJ2r-9IMNcdjdRfFTotaBc7fA3SRK85FPjKVaqWxHYUskhGH5sVivyHpCMy22KTtG63Y_Tbfhx7De_Xyp_2VUvvlykcThX2HMOPYYSPu_Bto7rHSkkrhIRIp7ehoG0QjVRyuHzqPeFJDbe8vO2okWIuw5ivet8bOsfdjIIH4mDvAAfimzf22ollRTFqvFiOcjxhOCZtrqyEbzDw045QBcYghXEMGZRzNRR4yYweBYqe84x-NaYggOBy-DZgWx_ZUFaahiv_iMPJnAUUrZiXIlBXPmdMW3Z8sItW-nLRWZhwzpjuITvGFQ9bDOlYr2Q',
  };

  refreshHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    refreshtoken: this.user.refreshToken,

    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  url: string = API.BASE_URL + API.STUDENTS + API.PATHS;

  constructor(private http: HttpClient) {}
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
          API.CURRENT_USER +
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
        API.BASE_URL + API.STUDENTS + API.COURSES + '/' + id + API.REVIEW_ALL
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
      API.BASE_URL + API.SEARCH_FLAG + title + API.SEARCH_ROLE
    );
  }

  postReview(id: number, rating: number, feedback: string) {
    return this.http.post(
      API.BASE_URL + API.STUDENTS + API.COURSES + '/' + id + API.REVIEWS,
      {
        rating: rating,
        feedback: feedback,
      }
    );
  }
  private getMyCourseReviewSubject = new BehaviorSubject<Review>({
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
  });
  myCourseReviews$ = this.getMyCourseReviewSubject.asObservable();

  getMyReviews(id: number) {
    return this.http.get<APIResponse<Review>>(
      API.BASE_URL + API.STUDENTS + API.COURSES + '/' + id + API.REVIEWS
    );
  }
}
