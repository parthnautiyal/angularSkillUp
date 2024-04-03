import { Error } from './../models/Error';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retryWhen, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { MiscellaneousService } from './miscellaneous.service';
import { API } from '../constants/enums/API';

@Injectable({
  providedIn: 'root',
})
export class ZopsmartApiInterceptorService implements HttpInterceptor {
  refreshCount: number = 0;
  error: Error = {
    code: 0,
    message: '',
  };
  constructor(private mis: MiscellaneousService, private store$: Store) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req.url);

    if (
      req.url === API.MEDIA + API.IMAGE_UPLOAD ||
      req.url === API.MEDIA + API.FILE_UPLOAD
    ) {
      return next.handle(req);
    }
    const token = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Session Expired');
          this.error.message = 'Session Expired. Please login again';
          this.error.code = 401;
        } else if (error.status === 404) {
          this.error.message = 'Not Found';
          this.error.code = 404;
        } else if (error.status === 500) {
          this.error.message = 'Internal Server Error';
          this.error.code = 500;
        } else if (error.status === 400) {
          this.error.message = 'Bad Request';
          this.error.code = 400;
        } else if (error.status === 403) {
          this.error.message = 'Forbidden';
          this.error.code = 403;
        } else if (error.status === 405) {
          this.error.message = 'Method Not Allowed';
          this.error.code = 405;
        } else if (error.status === 409) {
          this.error.message = 'Conflict';
          this.error.code = 409;
        } else if (error.status === 408) {
          this.error.message = 'Request Timeout';
          this.error.code = 408;
        } else if (error.status === 503) {
          this.error.message = 'Service Unavailable';
          this.error.code = 503;
        } else if (error.status === 504) {
          this.error.message = 'Gateway Timeout';
          this.error.code = 504;
        } else if (error.status === 0) {
          this.error.message = 'Network Error';
          this.error.code = 0;
        } else {
          localStorage.setItem('refreshCount', (0).toString());
        }
        return throwError(
          () => new Error(this.error.code + '`' + this.error.message)
        );
      })
    );
  }
}


fetch("https://staging.api.training.zopsmart.com/students/paths/168?projection=course", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMjEyODQ0OCwiaWF0IjoxNzEyMTI4MTQ4LCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsidHJhaW5lciIsInN0dWRlbnQiXSwic3ViIjoicHJhYmFsLnNoYXJtYUB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyMn0.P2GS9haujIyx2TvgItFc5obZyHaZfGMrqwMbQaGkOBY7Z9fNi8db4QM_kxiL5P2QG4y90xajYpJB6p0SOJTD4-Z3U-k1szaV3RhnyxjDECv0ZP6uQD6zlvvq4w-TONPtn18U_YPja3he1sQHBOhaT1VJZoBmWaZRj2ROY3izAsEjCUfwC490QlCBrhQYPgvaV7_0oPgRBKjHFHuw5QxU3GfY3RDdxUChdiYbRGGSNegsgGPRaKlapgd3GGjV30a3OcVUWMShcYDQuZEenu0vZG-4Imri3FXYkJDLHfISYmFm-NsGxYT5Aqr5PNIUu5XCeeM_q1RrhBmscGH5BY71QQ",
    "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": "\"Android\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://staging.training.zopsmart.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});