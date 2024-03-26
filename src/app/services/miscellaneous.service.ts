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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTQzMTcxMiwiaWF0IjoxNzExNDMxNDEyLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuYmhhcmR3YWpAem9wc21hcnQuY29tIiwidXNlcklkIjozMzN9.kK93i3usF9QKNi7YcWxNgq1wZagBIHsNNGV7UOhxLfLljk8cFWE2LZCLI-JFCD7MsDGXYIr73-lExzeS0psdCOwF0IMxTywnqVf4KH9IJ9D2ExL79xeXrklC-sjur72i2YxPNgS7Ka5Zm0IQvjheO8iiasdBTUhmE_Offu2G8OdSiaOJiQM-_MiHI0GYvASEvwndJPz9l0cgB_gWIbZpiOWy0czDRBM86UNUTIj62O4kLMrlkySlhRAeK3hYWCCmdvf4pobZqIFQFJr_t2cU7J8zjDHAK1O8gF3_4j0Dg6h26cgQw4ywKqNhnYFoLo5UrrP23iICjxbULJB5TSBTEw',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTUyNzY1NSwiaWF0IjoxNzExNDQxMjU1LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.eYDuMNIjEgioTqf2PTgsXoJYQXb1hFbzbBSwBna_t1BHECukE0RMB3cRpW-qazTounbUEbzN9ZO-g8M7YF0CWt0E8693SzIxeUFTWM3GzHLEM9paqlAyHIHhFzjdKaceQDGcOziNMMjYMngmTeVEjiurjZANpRmFsIKfxU-vGJdvwXp4XCpxcSr2WWNTgL-ONKLTeqTCJUY3ovtNkBQwqEGQopKK7HtTF7dleTP3liLHLcjtIvDoz6Yjcwv1w7qLhhxmtDJucZP3YcBcokSuVsPJTEt5AWrbzOfrmnRblkR6CLGuX3ba_ANR90Bi6w9Z7waCeS2NF3syS2-mEK2Utg',
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

  // body: JSON.stringify({ courseId: courseId }),
}

// https://api.training.zopsmart.com/students/courses/114/reviews/all

// fetch('https://api.training.zopsmart.com/students/courses/114/ratings', {
//   headers: {
//     accept: '*/*',
//     'accept-language': 'en-US,en;q=0.9',
//     authorization:
//       'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTM5NDI1OCwiaWF0IjoxNzExMzkzOTU4LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.fRTGtzuJUFHsgH98MYjGWFgdHW8iWeB0TLrKMWy-vhmf7oQoWA0AcCHVdDeXodVlvJHvaOkFLYNMc-iFQwMPY_5a1CfWC6mqqr-sOXA4eCgI36mwDTWWfXJ3uUB3z9cj6kC4zMWXqrt21TLJQ_xYXYeTOKV1NKE1z9X6UfpdIpyKsETCFuNy6V6ArJbq5nWEYB4ISpGN01v0kUGTGgpe7aNSCPdvC0fCDI9RcnuZ3bB4Nn_4Dai3nfH3rhwmewH6pNZtpbqJvGtYzHSTEikfhAX5jwgCfl00uj7AsZB46JaZTbAGqA39xqXESs_-guik1Ct5oNjPkNNiQ7X3g5JsHw',
//     'sec-ch-ua':
//       '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"macOS"',
//     'sec-fetch-dest': 'empty',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-site': 'same-site',
//     Referer: 'https://training.zopsmart.com/',
//     'Referrer-Policy': 'strict-origin-when-cross-origin',
//   },
//   body: null,
//   method: 'GET',
// });
