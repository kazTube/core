import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {StateAndCity} from './address-info-form/StateAndCity';
import {UserProfileService} from './user-profile.service';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {RoutingService} from '../routing/routing.service';

@Injectable({
    providedIn: 'root'
})
export class UserProfileResolver implements Resolve<StateAndCity> {

    constructor(private userProfileService: UserProfileService,
                private router: Router,
                private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | null {
        return this.userProfileService.getUserProfile().pipe(
            catchError(() => {
                // to prevent error loop
                if (this.router.url === this.routingService.getLastSuccessfulRouteUrl()) {
                    this.router.navigateByUrl('/home');
                } else {
                    this.router.navigateByUrl(this.routingService.getLastSuccessfulRouteUrl());
                }
                return of(null);
            })
        );
    }
}
