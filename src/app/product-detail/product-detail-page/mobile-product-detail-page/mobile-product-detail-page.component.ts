import {Component} from '@angular/core';
import {BaseProductDetailPageComponent} from '../base-product-detail-page.component';
import {BasketPageService} from '../../../basket/basket-page/basket-page.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilService} from '../../../core/services/util.service';
import {HeaderService} from '../../../layout/header/header.service';

@Component({
    selector: 'app-mobile-product-detail-page',
    templateUrl: './mobile-product-detail-page.component.html',
    styleUrls: ['./mobile-product-detail-page.component.scss']
})
export class MobileProductDetailPageComponent extends BaseProductDetailPageComponent {

    constructor(basketService: BasketPageService,
                headerService: HeaderService,
                route: ActivatedRoute,
                router: Router,
                utilService: UtilService) {
        super(basketService, headerService, route, router, utilService);
    }


    onAddProductToBasket() {
        let addToBasket$;
        if (this.isSpecialOfferProduct) {
            addToBasket$ = this.addSpecialOfferProductToBasket();
        } else {
            addToBasket$ = this.addProductToBasket();
        }
        addToBasket$.subscribe(() => {
            this.router.navigate(['basket']);
        });
    }
}
