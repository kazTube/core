import {AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {ProductSummaryDTO} from '../../../dto/product/ProductSummaryDTO';
import {SpecialOfferProductSummaryDTO} from '../../../dto/pharmacy/SpecialOfferProductSummaryDTO';
import {ProductSummaryCardTypeEnum} from '../../../dto/product/ProductSummaryCardTypeEnum';
import {CardLayoutEnum} from '../../../dto/CardLayoutEnum';


@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements AfterViewInit {

    @Input() title: string;
    @Input() showPoints = true;
    @Input() cardsType: ProductSummaryCardTypeEnum = ProductSummaryCardTypeEnum.Attribute;
    @Input() productList: ProductSummaryDTO[] | SpecialOfferProductSummaryDTO[];
    @ViewChild('productCarousel') productCarousel: NguCarousel<any>;

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
    currentSlide = 0;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    next() {
        if (this.currentSlide < this.productCarousel.pointNumbers.length - 1) {
            this.currentSlide++;
            this.productCarousel.moveTo(this.currentSlide, false);
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.productCarousel.moveTo(this.currentSlide, false);
        }
    }
}
