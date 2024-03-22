import { Error } from './../models/Error';
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
  refreshCount: number = 0;
  error: Error = {
    code: 0,
    message: '',
  };
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
          this.refreshCount = parseInt(
            localStorage.getItem('refreshCount') || '0'
          );
          console.log('Refresh Count -> ' + this.refreshCount);
          if (this.refreshCount <= 2) {
            this.pathDataService.getRefreshToken().subscribe((res: any) => {
              console.log('token refreshed');
              this.refreshCount = this.refreshCount + 1;
              localStorage.setItem(
                'refreshCount',
                this.refreshCount.toString()
              );
              console.log('Refresh Count subscribe -> ' + this.refreshCount);
              localStorage.setItem('token', res.data.accessToken);
            });
            setTimeout(() => {
              //window.location.reload();
            }, 5000);
          }

          this.error.message = 'Session Expired. Please login again';
          this.error.code = 401;
        } else {
          localStorage.setItem('refreshCount', (0).toString());
        }
        return throwError(() => new Error(this.error.message));
      })
    );
  }
}
