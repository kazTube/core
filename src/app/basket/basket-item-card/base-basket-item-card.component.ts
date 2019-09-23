import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {BasketItemDTO} from '../../dto/basket/BasketItemDTO';


@Component({
    template: '',
})
export class BaseBasketItemCardComponent implements OnChanges {

    @Input() basketItem: BasketItemDTO;
    @Input() height = 100;
    @Output() delete = new EventEmitter<BasketItemDTO>();
    @Output() countChange = new EventEmitter<BasketItemDTO>();
    @Output() unitChange = new EventEmitter<BasketItemDTO>();

    numberList: number[] = Array(10).fill(0).map((x, i) => i + 1);
    isProductImageExist: boolean;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['basketItem']) {
            this.setIsProductImageExist();
        }
    }


    deleteFromBasket(basketItem: BasketItemDTO) {
        this.delete.emit(basketItem);
    }

    onCountChange(event: any) {
        this.basketItem.count = event.value;
        this.countChange.emit(this.basketItem);
    }

    onUnitChange(event: any) {
        this.basketItem.unitId = event.value;
        this.unitChange.emit(this.basketItem);

    }

    private setIsProductImageExist() {
        this.isProductImageExist = this.basketItem.productDetail.imageUrlList && this.basketItem.productDetail.imageUrlList.length > 0;
    }

}
