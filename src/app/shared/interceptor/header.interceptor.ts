import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': 'Basic ' + btoa('admin' + ':' + 'admin1')
        });
        const clonedRequest = request.clone({headers});
        /*const clonedRequest = request.clone({headers: request.headers.set('Authorization', 'Basic ' + btoa('admin' + ':' + 'admin1'))});*/
        return next.handle(clonedRequest);
    }
}