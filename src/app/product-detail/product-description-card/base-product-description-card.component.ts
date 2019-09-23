import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {UtilService} from '../../core/services/util.service';

@Component({
    template: '',
})
export class BaseProductDescriptionCardComponent implements OnChanges {

    @Input() productInfo: ProductInfoDTO | SpecialOfferProductDTO;
    @Input() pharmacyName: string;
    @Input() isSpecialOfferProduct: boolean;
    providerName: string;
    isProductImageExist: boolean;
    isDiscountPercentageVisible: boolean;

    constructor(protected utilService: UtilService) {
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['productInfo']) {
            this.setIsProductImageExist();
            this.setIsDiscountPercentageVisible();
        }
        if (changes['productInfo'] || changes['pharmacyName']) {
            this.setProviderName();
        }
    }

    // todo it works based on string match!
    private setProviderName() {
        if (!this.isSpecialOfferProduct) {
            const productAttributes = this.productInfo.attributesList.filter(
                attribute => attribute.attributeName.indexOf('شرکت تولید کننده') >= 0);
            if (productAttributes && productAttributes.length > 0) {
                this.providerName = productAttributes[0].attributeValue;
            }
        } else {
            this.providerName = this.utilService.normalizePharmacyName(this.pharmacyName);
        }
    }


    private setIsProductImageExist() {
        this.isProductImageExist = this.productInfo && this.productInfo.imageUrlList && this.productInfo.imageUrlList.length > 0;
    }

    private setIsDiscountPercentageVisible() {
        if (this.productInfo instanceof SpecialOfferProductDTO) {
            this.isDiscountPercentageVisible = this.productInfo.discountPercentage && this.productInfo.discountPercentage > 0;
        } else {
            this.isDiscountPercentageVisible = false;
        }
    }


}
