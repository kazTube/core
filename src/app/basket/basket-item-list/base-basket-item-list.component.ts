import {BasketItemDTO} from '../../dto/basket/BasketItemDTO';
import {BasketPageService} from '../basket-page/basket-page.service';
import {RoutingService} from '../../routing/routing.service';
import {MatDialog} from '@angular/material';
import {ConfirmPopUpComponent} from '../../shared/components/confirm-pop-up/confirm-pop-up.component';
import {Component} from '@angular/core';

@Component({
    template: '',
})
export class BaseBasketItemListComponent {

    constructor(
        public basketService: BasketPageService,
        public routingService: RoutingService,
        public dialog: MatDialog
    ) {

    }


    onProductDelete(basketItem: BasketItemDTO) {
        this.showConfirmation().afterClosed().subscribe((isConfirmed: boolean) => {
            if (isConfirmed) {
                this.basketService.removeItemFromBasket(basketItem.productDetail.productCode);
            }
        });
    }

    onUnitChange(basketItem: BasketItemDTO) {
        this.basketService.updateItemInBasket(basketItem);
    }

    onCountChange(basketItem: BasketItemDTO) {
        this.basketService.updateItemInBasket(basketItem);
    }

    private showConfirmation() {
        return this.dialog.open(ConfirmPopUpComponent, {
                width: '260px',
                height: '200px',
                data: {msg: 'آیا از حذف این محصول اطمینان دارید؟'}
            }
        );
    }
}
