import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {UtilService} from '../../core/services/util.service';

@Component({
    selector: 'app-product-offer-card',
    templateUrl: './product-offer-card.component.html',
    styleUrls: ['./product-offer-card.component.scss']
})
export class ProductOfferCardComponent implements OnChanges {
    @Input() height = 400;
    @Input() product: SpecialOfferProductDTO;
    @Input() pharmacyHixCode: number;
    @Input() pharmacyName: string;
    @Input() pharmacyDistance: string;
    isProductImageExist: boolean;

    constructor(private utilService: UtilService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['product']) {
            this.setIsProductImageExist();
        }
    }

    private setIsProductImageExist() {
        this.isProductImageExist = this.product.imageUrlList && this.product.imageUrlList.length > 0;
    }

}
