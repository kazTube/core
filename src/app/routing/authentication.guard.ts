import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from '../login/login.service';
import {RoutingService} from './routing.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private router: Router,
        private routingService: RoutingService,
        public loginService: LoginService
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.redirectToLoginIfUserIsNotLogin(state);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.redirectToLoginIfUserIsNotLogin(state);
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.redirectToLoginIfUserIsNotLogin();
    }

    private redirectToLoginIfUserIsNotLogin(state?: RouterStateSnapshot) {
        if (!this.loginService.isUserLoggedIn()) {
            this.router.navigateByUrl('login');
            this.routingService.setLastSuccessfulRouteUrl(state.url);
            return false;
        }
        return true;

    }


}
