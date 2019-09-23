import {OrderProductSummaryDTO} from '../../../dto/order/OrderProductSummaryDTO';
import {Router} from '@angular/router';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    template: ''
})
export class BaseOrderProductSummaryCardComponent implements OnInit {

    @Input() OrderProductSummary: OrderProductSummaryDTO;
    productImageExist = false;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.productImageExist = this.OrderProductSummary.imageUrlList
            && this.OrderProductSummary.imageUrlList.length > 0;
    }

    goToProductDetailPage() {
        if (this.OrderProductSummary.productCode) {
            this.router.navigateByUrl('/product/detail/' + this.OrderProductSummary.productCode);
        }
    }


}
