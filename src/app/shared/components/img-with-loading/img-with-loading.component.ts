import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-img-with-loading',
    templateUrl: './img-with-loading.component.html',
    styleUrls: ['./img-with-loading.component.scss']
})
export class ImgWithLoadingComponent implements OnChanges {

    @Input() src: string;
    isLoading = true;
    isFadingIn = false;
    showDefaultImage = false;


    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isLoading = true;
        this.isFadingIn = false;
        this.showDefaultImage = false;
    }

    onImgLoaded() {
        this.isLoading = false;
        this.fadeIn();

    }

    onImgError() {
        this.isLoading = false;
        this.showDefaultImage = true;
        this.fadeIn();
    }

    private fadeIn() {
        setTimeout(() => {
            this.isFadingIn = true;
        }, 100);
    }


}
