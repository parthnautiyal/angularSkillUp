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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTQ0MTc1MiwiaWF0IjoxNzExNDQxNDUyLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMzNH0.IWNsrjPZEixn_Er4pfnkSI0cbKwhGJjJmUd7nweug75JE4dFqpr5p-DTaSfT-hrcqvlHoYV-b-uSUZHgbMX1xi2IyWbNVmXdKOiOPva2w0yOS6zRAfCtXSS2KVB9uDj7NNZceruGemxUdd-OnaQdNGnnIUFppblMh99gwTvZx5SEcnFmQ0dccP2HX0zumSLK-7w06jtye1W4qA7omFjIQRis0TbUVA3aH6sqt1p9asoKGSvys2GHTY5ErMl6GuLIODTOpcWi02YY2WbjqzmXFGtouww-KeQwz_lzwbuJssbfbOvegkrBRUwLwe85X2SSPd6Tnvg1hiMG-RdspdRuSw',

    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTUyNTU2NSwiaWF0IjoxNzExNDM5MTY1LCJpc3MiOiJHT09HTEUiLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20ifQ.hJ2oJJI3ru2Y6QCT52t4B0Muwhxrxpe7oWmgUHbbywPhoSp2wg4O2hdqHHkk6YqUXx3kAhmNRoz5o4jSWz74FVQUJuP_IVGZZkpot4OsQMJ5n3gGDyzVwyVenTYIcsdV4RegONX5rHGJ-ums6ZJSDiaIzZYdFstSKmnLt-jpLdiBCFMt2NSR_QU9wQE09ciLCh3hcgVyeAYmssaDfLa9remgWZEaOXQHC10BDFjlMEvnO4LRq0B4yM6ZTMZjBM7QGVeP3MATtM68vczE1FcbyTE7Au--z5hjL9ICARlfyPS0kpD82TxINFN2TO7P0uhZuSM4muKDkDkH0h6tHgBjew'

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

  searchByTitle(title: string): Observable<APIResponse<SearchResponse>> {
    return this.http.get<APIResponse<SearchResponse>>(
      API.BASE_URL + '/search?title=' + title + '&role=student&field=all');
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
