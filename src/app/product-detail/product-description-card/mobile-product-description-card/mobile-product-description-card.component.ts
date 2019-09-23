import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {BaseProductDescriptionCardComponent} from '../base-product-description-card.component';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-mobile-product-description-card',
    templateUrl: './mobile-product-description-card.component.html',
    styleUrls: ['./mobile-product-description-card.component.scss']
})
export class MobileProductDescriptionCardComponent extends BaseProductDescriptionCardComponent implements AfterViewInit {

    @ViewChild('descriptionCarousel') descriptionCarousel: NguCarousel<any>;
    carouselConfig: NguCarouselConfig = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        load: 3,
        interval: {timing: 4000, initialDelay: 1000},
        loop: true,
        touch: true,
        velocity: 0,
        easing: 'cubic-bezier(.17,.67,.5,1.25)',
        RTL: true,
        animation: 'lazy'
    };

    constructor(utilService: UtilService, private cdr: ChangeDetectorRef) {
        super(utilService);
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }
}
