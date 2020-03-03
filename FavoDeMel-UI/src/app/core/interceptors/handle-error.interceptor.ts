import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../layout/components/alert/alert.service';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  constructor(private alert: AlertService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 500) {
          this.alert.mostrarAlert('Erro ao processar sua requisição');
        }

        if (error.status === 400) {
          this.alert.mostrarAlert(error.error || error.message);
          return of([]);
        }

        if (error.status === 404) {
          return of([]);
        }

        return throwError(error.message);
      })
    );
  }
}