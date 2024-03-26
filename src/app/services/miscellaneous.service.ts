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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTUxODUyNywiaWF0IjoxNzExNDMyMTI3LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20ifQ.cPvRQQ-MXWxkbuF1_CunlRZbmDKq09MGQyPouMOQX9LbeWobzkIR0XhwjVUfLwIktEqPrwCDD9nY0x4VBj2DnABKQP9yPRep_RgKOn2H01D22TfRFqK9H_-p5YScL3mgEDXo0j6JBlyJaCqHhN9BlDkK7rAxEOj4dxNw60XVDr9rZdwrOlv6sdwmZH3hS6NG4xA73BrJ5Dt6d9Bz-EcVjUCTmrkvedI1qPalPtcpGP7SYVKgLucJLiKnbAJPjgoddXTXHJsqWKsflJ43s8qYMWlw5x_1C316CNC96SmFGypntfrrtc8z24foAzvYZ8H-7MUZv1ihydQS9jrJFiQ6fQ',
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
