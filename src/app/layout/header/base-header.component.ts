import {HeaderService} from './header.service';
import {BasketPageService} from '../../basket/basket-page/basket-page.service';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login.service';
import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
    template: ''
})
export class BaseHeaderComponent implements OnDestroy {
    basketItemsCount = 0;
    isBasketRotating = false;
    basketItem$: Subscription;

    constructor(
        public headerService: HeaderService,
        public basketService: BasketPageService,
        public router: Router,
        public loginService: LoginService) {

        this.basketItem$ = basketService.basketItemsCount$.subscribe(count => {
            if (count > 0 || count < this.basketItemsCount) {
                this.isBasketRotating = true;
                setTimeout(() => {
                    this.basketItemsCount = count;
                    this.isBasketRotating = false;
                }, 500);
            }
        });
    }

    ngOnDestroy() {
        this.basketItem$.unsubscribe();
    }
}
