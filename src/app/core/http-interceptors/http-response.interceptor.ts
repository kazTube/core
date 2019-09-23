import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {NotificationService} from '../../shared/components/notification/notification.service';
import {Router} from '@angular/router';
import {RoutingService} from '../../routing/routing.service';
import {LoginService} from '../../login/login.service';

@Injectable({
    providedIn: 'root'
})
export class HttpResponseInterceptor implements HttpInterceptor {

    constructor(private notificationService: NotificationService,
                private router: Router,
                private routingService: RoutingService,
                private loginService: LoginService) {
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                // todo enhance retry mechanism
                retry(1),
                map(event => {
                    if (event instanceof HttpResponse) {
                        event = event.clone({body: event.body.result});
                    }
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.loginService.logoutUser();
                        this.router.navigateByUrl('/login');
                        return of(null);
                    }
                    throw  error;
                }),
                catchError((response: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (response.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${response.error.message}`;
                    } else if (response.error && response.error.length > 0) {
                        errorMessage = response.error;
                    } else {
                        // server-side error
                        errorMessage = response.error.error.errorMessage;
                    }
                    this.notificationService.errorMessage(errorMessage);
                    console.error(errorMessage);
                    return throwError(errorMessage);
                })
            );
    }
}
