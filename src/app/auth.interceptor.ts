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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IkhBQWRPb3NIXzhBWnBycC15dTMxTkhpTjFTYWNndjRPclFaUEZrUUczbHMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJUUkFJTklORy1BTkQtVVBTS0lMTElORyIsImN1cnJlbnRSb2xlIjoic3R1ZGVudCIsImV4cCI6MTcxMDM1OTMzMywiaWF0IjoxNzEwMzU5MDMzLCJpc1N1cGVyQWRtaW4iOmZhbHNlLCJpc3MiOiJHT09HTEUiLCJvcmdhbml6YXRpb25JZCI6Miwicm9sZXMiOlsic3R1ZGVudCJdLCJzdWIiOiJwYXJ0aC5uYXV0aXlhbEB6b3BzbWFydC5jb20iLCJ1c2VySWQiOjMyOX0.UjamUUmppQ3oWdV8NkaTCFW5h6ogouCY_w2KQ8bl2rxXEPbn7vuRrn5_U8oJRXupSSsxtkr77z82JwQaV8pxStv6WEWoGFFw7f5wRc1FukPihAdb6d_DeRmM2gulvJXl-tzKTU13XafPHztxbi39vKH7YL067T9MxlEo-pvNPz8h70AcUQUGdQv1DNH3MyQXGBSUVWQzZyIE-QlSNpOXYY_DfIuW67syc-xMn0vO8NyoDGOspAfUKJIkcw4G5jcWvOZG-f8xV7wkYtChNGrLpNPA70ENLE1sfLcOuCICI7lqYogieD-38baWgOVdAX5iC-hO6FRcEN8gNb857d-DZw';
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
