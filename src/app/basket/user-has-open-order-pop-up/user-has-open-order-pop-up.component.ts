import {MatDialogRef} from '@angular/material';
import {Component} from '@angular/core';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    selector: 'app-open-order-pop-up-component',
    templateUrl: './user-has-open-order-pop-up.component.html',
    styleUrls: ['./user-has-open-order-pop-up.component.scss']
})
export class UserHasOpenOrderPopUpComponent {
    orderListPath = '/order/list';

    constructor(public dialogRef: MatDialogRef<UserHasOpenOrderPopUpComponent>,
                appStateService: AppStateService) {
        if (appStateService.isDesktop()) {
            this.orderListPath = '/profile/order/list';
        }
    }

    closeDialog() {
        this.dialogRef.close();
    }


}
