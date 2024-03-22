import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ErrorService } from './services/error.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

const { apiUrl } = environment;

@Injectable()
class AppInterceptor implements HttpInterceptor {
  constructor(
    private errorService: ErrorService,
    private router: Router,
    private userService: UserService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/api')) {
      req = req.clone({
        url: req.url.replace('/api', apiUrl),
      });
    }
    return next
      .handle(req)
      .pipe
      // catchError((err) => {
      //   if (err.status === 401) {
      //     this.router.navigate(['/auth/login']);
      //   } else {
      //     this.errorService.setError(err);
      //     // this.router.navigate(['/error']);
      //   }
      //   return [err];
      // })
      ();
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
