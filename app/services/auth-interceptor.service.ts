import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req : HttpRequest<any>,next : HttpHandler) : Observable<HttpEvent<any>>{
    console.log("Intercept",req);
    //const clonedReq = req.clone({params : new HttpParams().set()})
    return next.handle(req);

  }
  constructor() { }

}
