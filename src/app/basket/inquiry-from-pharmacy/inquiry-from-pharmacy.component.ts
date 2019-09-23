import {Component} from '@angular/core';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    selector: 'app-inquiry-from-pharmacy',
    templateUrl: './inquiry-from-pharmacy.component.html',
    styleUrls: ['./inquiry-from-pharmacy.component.scss']
})
export class InquiryFromPharmacyComponent {
    lottieConfig;
    orderListPath: string;
    animationWidth: number;
    animationHeight: number;

    constructor(appStateService: AppStateService) {

        if (appStateService.isMobile()) {
            this.orderListPath = '/order/list';
            this.animationWidth = 250;
            this.animationHeight = 200;
        } else {
            this.orderListPath = '/profile/order/list';
            this.animationWidth = 300;
            this.animationHeight = 250;
        }

        this.lottieConfig = {
            path: 'assets/animations/inquiry-from-pharmacy.animation.json',
            autoplay: true,
            loop: true
        };
    }
}
