import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpListenerInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        event => { },
        error => console.log(error)
      )
    );
  }
}
