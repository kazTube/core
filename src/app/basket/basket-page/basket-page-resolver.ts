import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {BasketPageService} from './basket-page.service';
import {OpenOrderResponseDTO} from '../../dto/basket/OpenOrderResponseDTO';
import {RoutingService} from '../../routing/routing.service';
import {LoginService} from '../../login/login.service';
import {UserProfileService} from '../../profile/user-profile.service';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class BasketPageResolver implements Resolve<any> {

    constructor(
        private basketService: BasketPageService,
        private userProfileService: UserProfileService,
        private router: Router,
        private routingService: RoutingService,
        public loginService: LoginService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<any> | any {
        let step = 1;
        if (route.queryParams['step']) {
            step = +route.queryParams['step'];
        }
        if (step > 2) {
            step = 1;
        }
        let hasUserOpenOrders = of(new OpenOrderResponseDTO(false, true, ''));
        const basket = this.basketService.loadBasket();

        let userProfile = of(undefined);

        if (this.loginService.isUserLoggedIn()) {
            hasUserOpenOrders = this.basketService.hasUserOpenOrder();
            userProfile = this.userProfileService.getUserProfile();
        } else { // if user is not logged in go to step 1
            step = 1;
        }
        return forkJoin(of(step), userProfile, hasUserOpenOrders, basket).pipe(
            map(data => {
                let finalStep = data[0] - 1;
                // if user has open order or there isn't any item in basket go to step 0
                if (data[2].hasOpenOrder || !data[3] || data[3].length === 0) {
                    finalStep = 0;
                }
                return {
                    isFinalizePurchaseData: false,
                    step: finalStep,
                    addressList: data[1] ? data[1].addressList : [],
                };
            }),
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
