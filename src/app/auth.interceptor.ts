import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }
  addAuthToken(request: HttpRequest<any>) {
    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDMzNjA3MywiaWF0IjoxNzEwMzM1NzczLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMzNH0.oL7D0Q6X1gbHjFczZ1c0u2d1xqZp684-NtCH1_IbUxFXGz0olyPYR0mqZNcL9n9swecj3U44q984HmJDT55w0zM1YIYSdbR5jpt-msownUywUv3LQHbFqRmPOx0LTcEb9EiHw0uRqAJ65ld-rD3wWUB4R66bndN8FhxDLgYy0TqSi5hvss1Q3dGy6dsJgg9wcf1b4yzctuoBQYlARGOtJGcQ2aa_8qcnaIX41xJXs1X__twcmENdt8sSArqKYU2pSbPW3oP5y-d_aOElNG7fuZXLBOPHk1JQVqvSBb1VECUYEfMr_9O_Mz2eWJMKd9kMerhMV1JmOcTkSLPkA0jo3Q'
    return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
    })
  }
}
