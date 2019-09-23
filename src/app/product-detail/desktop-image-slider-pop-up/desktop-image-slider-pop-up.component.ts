import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NguCarousel, NguCarouselConfig} from '@ngu/carousel';

@Component({
    selector: 'app-desktop-image-slider-pop-up',
    templateUrl: './desktop-image-slider-pop-up.component.html',
    styleUrls: ['./desktop-image-slider-pop-up.component.scss']
})
export class DesktopImageSliderPopUpComponent implements OnInit, AfterViewInit {

    @ViewChild('imageCarousel') imageCarousel: NguCarousel<any>;
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
    currentSlide = 0;
    imageUrlList: string[];

    constructor(public dialogRef: MatDialogRef<DesktopImageSliderPopUpComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.imageUrlList = this.data.imageUrlList;
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    moveTo(slideNumber: number) {
        this.imageCarousel.moveTo(slideNumber, false);
    }

    next() {
        if (this.currentSlide < this.imageCarousel.pointNumbers.length - 1) {
            this.currentSlide++;
            this.imageCarousel.moveTo(this.currentSlide, false);
        }
    }

    prev() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.imageCarousel.moveTo(this.currentSlide, false);
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }


}
