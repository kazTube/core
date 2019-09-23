import {Component} from '@angular/core';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    orderListPath = '/order/list';

    constructor(appStateService: AppStateService) {
        if (appStateService.isDesktop()) {
            this.orderListPath = '/profile/order/list';
        }
    }
}
