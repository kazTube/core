import {Component, OnDestroy} from '@angular/core';
import {BaseHeaderComponent} from '../base-header.component';
import {HeaderService} from '../header.service';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {Router} from '@angular/router';
import {LoginService} from '../../../login/login.service';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent extends BaseHeaderComponent implements OnDestroy {

    isMenuOpen = false;
    isMenuOpen$: Subscription;

    constructor(public headerService: HeaderService,
                public basketService: BasketPageService,
                public router: Router,
                public loginService: LoginService) {
        super(headerService, basketService, router, loginService);
        this.isMenuOpen$ = headerService.isMenuOpen$.subscribe(value => {
            this.isMenuOpen = value;
        });
    }

    onMenuClick() {
        this.headerService.toggleMenu();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.isMenuOpen$.unsubscribe();
    }

}
