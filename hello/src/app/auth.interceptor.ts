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
    console.log('intercepting request')
    console.dir(request, { depth: null })
    const authReq = request.clone({
        setHeaders: { Authorization: 'mytkn1222'},
        setParams: {
            bbb: '123456'
        }
    })
    console.log('authenticated request')
    console.dir(authReq, { depth: null })
    return next.handle(authReq);
  }
}
