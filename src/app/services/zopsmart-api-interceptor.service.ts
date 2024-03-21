import { PathDataService } from 'src/app/services/path-data.service';
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

@Injectable({
  providedIn: 'root',
})
export class ZopsmartApiInterceptorService implements HttpInterceptor {
  constructor(
    private pathDataService: PathDataService,
    private store$: Store
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
    console.log('intercepted');
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.pathDataService.getRefreshToken().subscribe((res: any) => {
            localStorage.setItem('token', res.data.accessToken);
          });
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
        return throwError(
          () => new Error('Server Error. Please try again later. Bunnets Mom')
        );
      })
    );
  }
}
