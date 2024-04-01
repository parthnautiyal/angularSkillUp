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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoidHJhaW5lciIsImV4cCI6MTcxMTkxMjU4NywiaWF0IjoxNzExOTEyMjg3LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoibmFtYW4uZ3VwdGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMjd9.hLBKvMvb_dJczBGdfsxZeltQm1vSoOX4xCbvWuKm7_NL2ePRKhIGnIHbNCS8iHz3_BoJkvYKdboQj_ANL2MdEuIwS3NGOvw48T-LcAwUpnkJR_8gblTDObcZob5zXwvI4Qgbr4Gq4qgvlutS3Rt_3Ytt7SPjTjARin8HBLl-H5EJwyORAZeLYv3I2GlR4b3xgUc2IiOnlGFg4gyCthfEQur9GmrRflrEpkN_qtOguuHCEB32fzozdstnKgkzCVqhtNknTDtg4UM2Zl7J_X1l0swb586Q5r3MOeCE-Uyyplmy5bNfqW3tqEJkjr8Cl5hoHuEwsI1jIqULWg-tKryABA',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMjAzNzc0NiwiaWF0IjoxNzExOTUxMzQ2LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJhYXNoaXJ3YWQueWFkYXZAem9wc21hcnQuY29tIn0.kq6WhybtTsfkL0iNlnqvPp6u2Y7A5w251iWnThoed1Vk2Ulyz17rf32NrlfRTHnTUIs-FsKtGDRy1cfzQFtH-9cJouyHKqp3SQKsBBHYgeov-vupmFahDgUPHIobZjdVZe58WxncfKIbHAV0MckhHM5Ni9fATdzJg3JM-08FQ77hwTsyrjq1HhzIPdVBM9qjnVbQBP1ZTMeJ-crFHUZnBylKrWnCBPjhf1PKB0wpfJgV6azMn4l6FF-P3DmVPIr4KcFWmydjBfOb8vxXdUVCFp5AUeDFrX4bvoq_KlfwRTwlnlmR5r3IA20tQcOM4XTGRjOisi4Gp82-GyMqE56UmQ',
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
