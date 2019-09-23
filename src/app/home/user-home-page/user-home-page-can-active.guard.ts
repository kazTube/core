import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from '../../login/login.service';

@Injectable({
    providedIn: 'root'
})
export class UserHomePageCanActiveGuard implements CanActivate {
    constructor(
        private router: Router,
        public loginService: LoginService
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.loginService.isUserLoggedIn()) {
            this.router.navigate(['/home/general/']);
            return false;
        }
        return true;
    }
}
