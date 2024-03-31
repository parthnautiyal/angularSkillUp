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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMTgzMDc4NywiaWF0IjoxNzExODMwNDg3LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoibmFtYW4uZ3VwdGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMjd9.GQyVH6S2HMcJfAGGPUngG99AWQ4e1hjKVzyPQXF_WWupPUky3XVnxSPeUkKRhGP4hRFvxl4noXgMeQ5cU9JTngWN3j9jVhXMBDJGABbtRxQ28R1mlGZJOJ7BEFM5RX3VrDunyHKPtAGD6lJyGxJ7ApzFUiqHT1u2QQP2_OU5E34SL5dHmVqTQUDeLMitp28HU96SaSZWDAjQJ7WMWhcQlq8_voT96WojHxwkHAHY1Tl01v-GuiCOeDIpc3S4G7aXf1Rej_VepmiiXdylvWZArQKZul56gZrRPxO0QiD_d2jT0t8KPldWgxdPT-waOK1_MCTTwUhU6tzoZgSpf4n6sQ',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTkxMTg4MywiaWF0IjoxNzExODI1NDgzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJuYW1hbi5ndXB0YUB6b3BzbWFydC5jb20ifQ.FEO03fMHEZFR2XNvTYARYy_QxGjuNr2NTE-GuPdF4uFHLmjvho_rjEyS9QvPEbxSSLs9OP9pxjAt1MsC9CxDPh-5d4KFeVpjmwVAo1UyMTk5kVEkoHSAcbroqGxW2vTJc8ty1A2UoaQAKazHL1bREcAnPF_DuM3v60MCNqgYDhG-9FH_uhEzQaJdj4Y8X9Acop6yIh6vieQ5VZXhQJ2N8-uKYMaWEZXsO9IqKAGLRHXYP0XlVZRlQDFI-cfRv6Lq6_QTR1JSD5SVL-lPJr13P1sEIMenSX0iNETggor58ES9qKegVfQ4tuRU3zHD_0xRdXSy2GZdI_hfFdGGG8caTw',
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
