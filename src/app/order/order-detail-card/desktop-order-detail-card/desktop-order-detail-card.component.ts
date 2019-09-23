import {Component, OnInit} from '@angular/core';
import {OrderSummaryDTO} from '../../../dto/order/OrderSummaryDTO';
import {AddressDTO} from '../../../dto/profile/AddressDTO';
import {OrderProductSummaryDTO} from '../../../dto/order/OrderProductSummaryDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {BaseOrderDetailCardComponent} from '../base-order-detail-card.component';
import {RoutingService} from '../../../routing/routing.service';
import {CancelPurchaseService} from '../../../basket/cancel-purchase/cancel-purchase.service';

@Component({
    selector: 'app-desktop-order-detail-card',
    templateUrl: './desktop-order-detail-card.component.html',
    styleUrls: ['./desktop-order-detail-card.component.scss']
})
export class DesktopOrderDetailCardComponent extends BaseOrderDetailCardComponent implements OnInit {
    orderSummary: OrderSummaryDTO;
    transportInfo: OrderProductSummaryDTO;
    totalPayment: OrderProductSummaryDTO;
    address: AddressDTO;
    stepperStep = 3;

    showStepperSection = false;
    showOrderInfoSection = false;
    showAddressSection = false;
    showProviderSection = false;

    constructor(public route: ActivatedRoute,
                public router: Router,
                public dialog: MatDialog,
                public cancelPurchaseService: CancelPurchaseService,
                public routingService: RoutingService) {
        super(route, router, dialog, cancelPurchaseService, routingService);
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.orderDetail.isCanceled || this.isCancelableOnly) {
            this.stepperStep = 2;
        }
        this.orderSummary = new OrderSummaryDTO(
            this.orderDetail.orderId,
            this.orderDetail.createdDateTime,
            this.orderDetail.totalPrice,
            this.orderDetail.transportPrice,
            this.orderDetail.stateId,
            this.orderDetail.stateName,
            this.orderDetail.isPaid,
            this.orderDetail.isReadyToPay,
            this.orderDetail.isCancelable,
            this.orderDetail.isCanceled,
        );
        this.address = new AddressDTO(
            undefined,
            undefined,
            this.orderDetail.stateId,
            this.orderDetail.addressText,
            this.orderDetail.postalCode,
            undefined,
            undefined,
            this.orderDetail.receiverName,
            this.orderDetail.receiverPhone,
            this.orderDetail.unit,
            this.orderDetail.plaqueNumber
        );

        this.transportInfo = OrderProductSummaryDTO.emptyInstance();
        this.transportInfo.productNameFa = 'هزینه ارسال توسط پیک';
        this.transportInfo.itemPrice = this.orderDetail.transportPrice;

        this.totalPayment = OrderProductSummaryDTO.emptyInstance();
        this.totalPayment.productNameFa = 'مبلغ پرداخت شده';
        this.totalPayment.itemPrice = this.orderDetail.totalPrice;

        this.showStepperSection = !this.orderDetail.isReadyToPay;
        this.showOrderInfoSection = !this.orderDetail.isReadyToPay;
        this.showAddressSection = !this.orderDetail.isReadyToPay;
        this.showProviderSection = this.orderDetail.isPaid || this.orderDetail.isReadyToPay;

    }
}
