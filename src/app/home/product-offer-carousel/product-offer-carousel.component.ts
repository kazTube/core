import {AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild} from '@angular/core';
import {SpecialOfferProductDTO} from '../../dto/pharmacy/SpecialOfferProductDTO';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';

@Component({
    selector: 'app-product-offer-carousel',
    templateUrl: './product-offer-carousel.component.html',
    styleUrls: ['./product-offer-carousel.component.scss']
})
export class ProductOfferCarouselComponent implements AfterViewInit {

    @Input() productOfferList: SpecialOfferProductDTO[];
    @Input() pharmacyHixCode: number;
    @Input() pharmacyName: string;
    @ViewChild('productOfferCarousel') productOfferCarousel: NguCarousel<any>;

    carouselConfig: NguCarouselConfig = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        load: 3,
        interval: {timing: 4000, initialDelay: 1000},
        loop: false,
        touch: true,
        velocity: 0,
        easing: 'cubic-bezier(.17,.67,.5,1.25)',
        RTL: true,
        animation: 'lazy'
    };
    private currentSlide = 0;

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    next() {
        if (this.currentSlide < this.productOfferCarousel.pointNumbers.length - 1) {
            this.currentSlide++;
            this.productOfferCarousel.moveTo(this.currentSlide, false);
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.productOfferCarousel.moveTo(this.currentSlide, false);
        }
    }

}
