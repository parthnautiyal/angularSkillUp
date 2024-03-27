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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTQzMTcxMiwiaWF0IjoxNzExNDMxNDEyLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuYmhhcmR3YWpAem9wc21hcnQuY29tIiwidXNlcklkIjozMzN9.kK93i3usF9QKNi7YcWxNgq1wZagBIHsNNGV7UOhxLfLljk8cFWE2LZCLI-JFCD7MsDGXYIr73-lExzeS0psdCOwF0IMxTywnqVf4KH9IJ9D2ExL79xeXrklC-sjur72i2YxPNgS7Ka5Zm0IQvjheO8iiasdBTUhmE_Offu2G8OdSiaOJiQM-_MiHI0GYvASEvwndJPz9l0cgB_gWIbZpiOWy0czDRBM86UNUTIj62O4kLMrlkySlhRAeK3hYWCCmdvf4pobZqIFQFJr_t2cU7J8zjDHAK1O8gF3_4j0Dg6h26cgQw4ywKqNhnYFoLo5UrrP23iICjxbULJB5TSBTEw',
    refreshToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImV4cCI6MTcxMTYwNDg0MiwiaWF0IjoxNzExNTE4NDQyLCJpc3MiOiJHT09HTEUiLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIn0.AWoh3Z2iI6O2gbZEUHfWGnvotVvhxM1sSJybYVb5UvGR1RepS_k3zqn2mPwuzsvZcKxXC6Ov7Ijo73SrGxZK_V86hgyFePVCy5QP_3x2iY4FcxqfZq_zvQqFXtZ0xKUylMt5Gmni16A1PNNZsB_MD9WeX0m36OXeyx3aqTcW9Qnql-xNf_hfElYZQeYtieGkxmbm9H816U4hXAZSkXIuF_xaQNZl1Zb2CZLenon9_foc_xsM_E0v5gL8ST6rtj3mBf-mZWPERFtOIhUqxH-UFEoX0sfWiESuKilNWHpCs3rDHgO849ho-RcLM5slcFZxwp_xNa1jzEc3JaMBsN3Zdw',
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
          '/326' +
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

  searchByTitle(title: string): Observable<APIResponse<SearchResponse>> {
    return this.http.get<APIResponse<SearchResponse>>(
      API.BASE_URL + '/search?title=' + title + '&role=student&field=all'
    );
  }

  postReview(id: number, rating: number, feedback: string) {
    return this.http.post(
      'https://api.training.zopsmart.com/students/courses/' + id + '/reviews',
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
    return this.http.get(
      'https://api.training.zopsmart.com/students/courses/' + id + '/reviews'
    );
  }
}

fetch('https://api.training.zopsmart.com/students/courses/114/reviews', {
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMTUyMDc4NSwiaWF0IjoxNzExNTIwNDg1LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJjaGFuZGFuLnNhaGFAem9wc21hcnQuY29tIiwidXNlcklkIjozMzJ9.XC5SXtgCOIzrWOCvVxwA_DKYaxJQRpsWx1R96uma5i5C6XbWZpXVmw9HsdqDt6r39sy9LawZ6PAbmN3gOLhCVrDxcEtnfnnL4BM2PBCEgeimFNGjz7clzucFRFr9B46emfefWvibLzoaaPdzxZ8v3kD7_c6d-dwRIb9BOq3_vlrafaIxkATfgoMScp0iBnufToQxyTtHRlQiS_Rne8gHSZ0OYkkthLovFxP555ov-9H3dgeQuOoMhAqrtwQ3YJzMfshEdksK7h8n8NWSYi4M9q8O9ivKcaI5PrysS-nZAsNlyNLTA-j0rvPtZzW9huEVKfiZLEvrcQuNKSTQRYcB-Q',
    'sec-ch-ua':
      '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
  },
  referrer: 'https://training.zopsmart.com/',
  referrerPolicy: 'strict-origin-when-cross-origin',
  body: null,
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});
