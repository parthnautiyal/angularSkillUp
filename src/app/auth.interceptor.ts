import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }
  addAuthToken(request: HttpRequest<any>) {
    const token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDM1NDY0MywiaWF0IjoxNzEwMzU0MzQzLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJhZGl0eWEuc0B6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMzNH0.QBQdXQau27ISm3i996z__wnprnkgaYMzgt3XXEqA_TZmqBTQPyD_5cFY9HGtw_i9R-MJmmiLiKPlg3NNeMZbVOdMm6QmuFiX2Re3vc-ygMMV7fYd1WgptjMYVgU0wk6a0OHIE1qG-1JzdzkwYericjokjx2eVpJmjax8eUag6M2hqJN41zishumac0JXBZFf3csh2s2MlnJCj2D4Q9p1OEVF02zDeTVXi1TwY1r8q9k3mGkLp94F7Q2piUgzhEZUGteTlsVHXDki5TPVaW4mYVrHYrfyvhzdjs66KKC7hCP105D8VHQjHABC-fB7UQVnDeFEoTWFRWXC8VNW4mSrTQ';
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
