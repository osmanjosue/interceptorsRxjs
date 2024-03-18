import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'token-usuario': 'ABC12312314fasdfiweru'
    })

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone)
      .pipe(
        catchError(this.manejarError)
      )
      ;

  }

  manejarError = (err: HttpErrorResponse) => {
    console.log('sucedio un error')
    console.log('Registrado en el log file');
    console.warn(err);
    return throwError(() => new Error('Error personalizado'));
  }

}
