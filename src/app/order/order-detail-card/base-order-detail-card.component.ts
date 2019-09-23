import {Component, Input, OnInit} from '@angular/core';
import {OrderDetailDTO} from '../../dto/order/OrderDetailDTO';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfirmPopUpComponent} from '../../shared/components/confirm-pop-up/confirm-pop-up.component';
import {RoutingService} from '../../routing/routing.service';
import {CancelPurchaseService} from '../../basket/cancel-purchase/cancel-purchase.service';

@Component({
    template: ''
})
export class BaseOrderDetailCardComponent implements OnInit {

    @Input() orderDetail: OrderDetailDTO;
    isCancelling = false;
    isCancelableOnly = false;

    constructor(public route: ActivatedRoute,
                public router: Router,
                public dialog: MatDialog,
                public cancelPurchaseService: CancelPurchaseService,
                public routingService: RoutingService) {
    }

    ngOnInit() {
        this.isCancelableOnly = this.orderDetail.isCancelable && !this.orderDetail.isPaid &&
            !this.orderDetail.isCanceled && !this.orderDetail.isReadyToPay;
    }

    onCancelOrder() {
        const confirmDialog = this.dialog.open(ConfirmPopUpComponent, {
                width: '85%',
                maxWidth: '350px',
                height: '200px',
                data: {msg: 'آیا از لغو سفارش اطمینان دارید؟'}
            }
        );
        confirmDialog.afterClosed().subscribe(isConfirmed => {
            if (isConfirmed) {
                this.isCancelling = true;
                this.cancelPurchaseService.cancelOrder(this.orderDetail.orderId).subscribe(() => {
                    this.isCancelling = false;
                    this.routingService.navigateBack();
                }, () => this.isCancelling = false);
            }
        });
    }
}
