import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseHeaderComponent} from '../base-header.component';
import {HeaderService} from '../header.service';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {Router} from '@angular/router';
import {UserProfileService} from '../../../profile/user-profile.service';
import {LoginService} from '../../../login/login.service';
import {Subscription} from 'rxjs';
import {RoutingService} from '../../../routing/routing.service';


@Component({
    selector: 'app-desktop-header',
    templateUrl: './desktop-header.component.html',
    styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent extends BaseHeaderComponent implements OnInit, OnDestroy {

    displayName = '';
    userProfile$: Subscription;

    constructor(public headerService: HeaderService,
                public basketService: BasketPageService,
                public userProfileService: UserProfileService,
                public router: Router,
                private routingService: RoutingService,
                public loginService: LoginService) {
        super(headerService, basketService, router, loginService);
    }

    ngOnInit() {
        this.userProfile$ = this.userProfileService.userProfile$.subscribe(userProfile => {
            if (userProfile) {
                if ((userProfile.firstName.length + userProfile.lastName.length) > 15) {
                    this.displayName = userProfile.firstName;
                } else {
                    this.displayName = userProfile.firstName + ' ' + userProfile.lastName;
                }
            }
        });
    }

    goToDaroopinMag() {
        this.routingService.isNavigationInProgress.next(true);
        window.location.replace('http://mag.daroopin.com');
    }

    logoutUser() {
        this.loginService.logoutUser();
        this.router.navigate(['/home']);
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.userProfile$.unsubscribe();
    }
}
