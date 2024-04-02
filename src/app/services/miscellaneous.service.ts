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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMTk5NTM4MCwiaWF0IjoxNzExOTk1MDgwLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoibmFtYW4uZ3VwdGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMjd9.dRpdkB828g-3gAz_EfzQxoFbgAWAXsBfuBkqMZlILe0EDE-R_k9uRHw7W8Zx86ylr56CBXq1vlkWzpG4E15SoFtMgBso5hGjsBOHPw56A6Zo5fDZ9STiCz_kpoVcD_pNrblRn9YhDv6BTfi0QmGKyHyLy1YG9bD1iyPZv0834pGUbFpxhwS2FWgY4qV9a4hPGoW04yGLac-kMPCt8KJG3E1BmVANiiqBbDP7TvQ_O1c6rCfHfhMZ1qTBohflF3eOkKLOxbXWGTCeMRjAyw_wUO338aOAY3Ov0NAp6okeUJ9USZeMU8rbNaLflJsx0KfjghaokU2KDp0Yu9VD9GS4BQ',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMjEyMDU3NCwiaWF0IjoxNzEyMDM0MTc0LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.MCE3zYuZJLFqNhRI45ny6nwp3nrAfEpvZvtaUyEWtjSoa1P9ZuKVCKws338PHe04l43fHAAnmVT691DPFky_IDtGbK3At2au3T0bQg3oXC9Q1XfxT55Fzbl888Rye7QyIK8zvRu6Riitc0czekV5zbNIoJCCAF6yseLsvK2bPxBq-w03rMOpd-ESj6wNQyD82mVZAcOliKkIvkWFs8H7klzSprJZ_FwjvvyJpuene7d0OSbTwj9DkPwBvUArIp2au5aa7iSNiRqiCVQsiyZ4AN1HJFPG2ZkHEhhmiP5eOGz-jMzDEpDxLHo2GGGYD2Fa8PQd8enD_EyLA1yP2qvT0w',
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
