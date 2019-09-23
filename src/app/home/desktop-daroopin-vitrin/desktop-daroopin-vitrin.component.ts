import {Component, Input} from '@angular/core';
import {SpecialOfferProductSummaryDTO} from '../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {NguCarouselConfig} from '@ngu/carousel';
import {ProductSummaryCardTypeEnum} from '../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../dto/CardLayoutEnum';
import {UtilService} from '../../core/services/util.service';

@Component({
    selector: 'app-desktop-daroopin-vitrin',
    templateUrl: './desktop-daroopin-vitrin.component.html',
    styleUrls: ['./desktop-daroopin-vitrin.component.scss']
})
export class DesktopDaroopinVitrinComponent  {

    @Input() specialOfferOfferProductList: SpecialOfferProductSummaryDTO[];
    @Input() pharmacyName: string;
    @Input() pharmacyHixCode: number = undefined;
    ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum;
    CardLayoutEnum = CardLayoutEnum;
    carouselConfig: NguCarouselConfig = {
        grid: {xs: 2, sm: 3, md: 4, lg: 5, all: 0},
        load: 3,
        interval: {timing: 4000, initialDelay: 1000},
        loop: false,
        touch: true,
        velocity: 0,
        easing: 'cubic-bezier(.17,.67,.5,1.25)',
        RTL: true,
        animation: 'lazy'
    };

    constructor(public utilService: UtilService) {
    }
}
