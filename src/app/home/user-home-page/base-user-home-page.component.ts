import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserHomePageInfoDTO} from '../../dto/UserHomePageInfoDTO';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {UtilService} from '../../core/services/util.service';


@Component({
    template: ''
})
export class BaseUserHomePageComponent implements OnInit {

    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;
    userHomePageInfo: UserHomePageInfoDTO;
    productListSlider: SpecialOfferProductSummaryDTO[] = [];
    isThereAnyOffer: boolean;
    isThereAnyPharmacy: boolean;


    constructor(protected route: ActivatedRoute, protected utilService: UtilService) {
    }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.userHomePageInfo = data.resolvedData.userHomePageInfo;
            this.initialize();
        });
    }

    private initialize() {
        this.isThereAnyPharmacy = this.userHomePageInfo &&
            this.userHomePageInfo.pharmacy && this.userHomePageInfo.pharmacy.name
            && this.userHomePageInfo.pharmacy.name.length > 0 && this.userHomePageInfo.pharmacy.pharmacyHixCode !== undefined;

        this.isThereAnyOffer = this.userHomePageInfo && this.userHomePageInfo.productList && this.userHomePageInfo.productList.length > 0;

        if (this.isThereAnyPharmacy) {
            this.productListSlider = this.utilService.convertToTileDTO(this.userHomePageInfo.productListSlider,
                this.userHomePageInfo.pharmacy.pharmacyHixCode,
                this.userHomePageInfo.pharmacy.name);
        }


    }
}


