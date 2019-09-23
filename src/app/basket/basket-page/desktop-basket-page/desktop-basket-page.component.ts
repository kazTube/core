import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BaseBasketPageComponent} from '../base-basket-page.component';
import {BasketPageService} from '../basket-page.service';
import {RoutingService} from '../../../routing/routing.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../login/login.service';
import {PredefinedCommentDTO} from '../../../dto/basket/PredefinedCommentDTO';
import {DesktopCancelPurchasePopupComponent} from '../../desktop-cancel-purchase-popup/desktop-cancel-purchase-popup.component';
import {HeaderService} from '../../../layout/header/header.service';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-desktop-basket-stepper',
    templateUrl: './desktop-basket-page.component.html',
    styleUrls: ['./desktop-basket-page.component.scss']
})
export class DesktopBasketPageComponent extends BaseBasketPageComponent implements OnInit, OnDestroy, AfterViewInit {

    canceledPreDefinedCommentList: PredefinedCommentDTO[];

    constructor(basketService: BasketPageService,
                routingService: RoutingService,
                dialog: MatDialog,
                headerService: HeaderService,
                router: Router,
                route: ActivatedRoute,
                loginService: LoginService,
                appStateService: AppStateService,
    ) {
        super(basketService, routingService, dialog, headerService, router, route, loginService, appStateService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.data.subscribe(data => {
            this.canceledPreDefinedCommentList = data.preDefinedCommentList;
        });
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
    }

    cancelOrder() {
        const dialogRef = this.dialog.open(DesktopCancelPurchasePopupComponent, {
            width: '50%',
            minWidth: '600px',
            height: '95%',
            maxHeight: '570px',
            direction: 'rtl',
            data: {
                canceledPreDefinedCommentList: this.canceledPreDefinedCommentList,
                orderId: this.orderDetail.orderId
            }
        });
        dialogRef.afterClosed().subscribe((isCancelled: boolean) => {
            if (isCancelled) {
                this.router.navigate(['/profile/order/detail/' + this.orderDetail.orderId]);
            }
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
