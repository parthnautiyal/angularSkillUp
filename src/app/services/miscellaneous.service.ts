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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMjA0NzY0MiwiaWF0IjoxNzEyMDQ3MzQyLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoibmFtYW4uZ3VwdGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMjd9.RFa7vLPlFbayQNs-6ObWlKLcPs2xrFapeWhsbo0fBzujbTL93rGylJySXF5_EdqmjznFLPoV02hwYcqZ_AhEmnp4Bk5A0DdWUXheUlMKuiZXP0j3eNSa9hAl6_qUKQm9DQWld5o0lNj4X-Ac0vJc01Axaz-ubK60gtXrs5JCkxeBw8REQY1ictHfSZZPNssIIUya1EDQWWh5HXkZNkFn84MF_KNhCRmPyPQnp6NPLnLzZPX9xRJHIo9uuqeVZcKgIa9kNYd0QvF8jJ1XzbL6xHhejs87hhDOfPiPsuXU_DrTGj00AZurb2V-_8myEGagWSS1KAoqE6rZakTYLnptcw',
    refreshToken:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMjIwOTkwMywiaWF0IjoxNzEyMTIzNTAzLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwcmFiYWwuc2hhcm1hQHpvcHNtYXJ0LmNvbSJ9.LSfUlq9Tpx1BZj5L7B3OnpCXM18FPZfBMl2luArQouaa5L7j3QIWnSwIkbPyegPYNQKG1Eg1m8Jzt1KVdSCArtoAYRTk7q7d9YNqpnRlNI7NA3jGfeFbqyftyDaaqbqD21mcUWvUprMDBf-unuq4ap4mFi3OrsOftfBT-IktPGLnjX6m59TAAxIBSbCwsD9c_R2mIZLc2HOewnudYfZ3fotHYeG6nMlJXTytAMdfpAxvYVwjso654SQ-WSo8VILkj3IOCEvblLRhrE_9Y81JJpXiZzz49XovyeR2YSfyiem1MeIFkRhy1HLhbI4GhQrkS3BEckYu30QIkINsMKJpDw"  };

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
