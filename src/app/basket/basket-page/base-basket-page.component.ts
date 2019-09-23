import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatStepper} from '@angular/material';
import {BasketPageService} from './basket-page.service';
import {RoutingService} from '../../routing/routing.service';
import {OrderDetailDTO} from '../../dto/order/OrderDetailDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../login/login.service';
import {UserHasOpenOrderPopUpComponent} from '../user-has-open-order-pop-up/user-has-open-order-pop-up.component';
import {MapPopUpComponent} from '../../shared/components/map-pop-up/map-pop-up.component';
import {MapLocation} from '../../profile/map-button/MapLocation';
import {AddressDTO} from '../../dto/profile/AddressDTO';
import {Subscription} from 'rxjs';
import {StepperSelectionEvent} from '@angular/cdk/stepper';
import {HeaderService} from '../../layout/header/header.service';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    template: '',
})
export class BaseBasketPageComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('stepper') stepper: MatStepper;
    isLoading = false;
    selectedAddressId: number;
    addressList: AddressDTO[] = [];
    currentStepIndex = 0;
    orderDetail: OrderDetailDTO;
    private stepperSubscription: Subscription;

    constructor(protected basketService: BasketPageService,
                protected routingService: RoutingService,
                protected dialog: MatDialog,
                protected headerService: HeaderService,
                protected router: Router,
                protected route: ActivatedRoute,
                protected loginService: LoginService,
                protected appStateService: AppStateService
    ) {


    }

    ngOnInit() {

        this.route.data.subscribe(data => {
            this.currentStepIndex = data.resolvedData.step;
            // for basket-stepper-finalize-purchase resolver
            if (data.resolvedData.isFinalizePurchaseData) {
                this.orderDetail = data.resolvedData.orderDetail;
            } else {// for basket-stepper resolver
                this.addressList = data.resolvedData.addressList;
                if (this.addressList && this.addressList.length > 0) {
                    this.selectedAddressId = this.addressList[0].addressId;
                }
            }
        });

    }

    ngAfterViewInit(): void {
        this.stepperSubscription = this.stepper.selectionChange.subscribe((stepperSelectionEvent: StepperSelectionEvent) => {
            this.currentStepIndex = stepperSelectionEvent.selectedIndex;
            this.appStateService.scrollToTop();
        });
    }

    onAddressChange(addressId: number) {
        this.selectedAddressId = addressId;
    }

    goToSelectAddressStep() {
        this.isLoading = true;
        if (this.loginService.isUserLoggedIn()) {
            this.routingService.isNavigationInProgress.next(true);
            this.basketService.hasUserOpenOrder().subscribe(
                response => {
                    this.isLoading = false;
                    this.routingService.isNavigationInProgress.next(false);
                    if (response.hasOpenOrder) {
                        this.openUserHasOpenOrderWarningDialog();
                    } else {
                        this.next();
                    }
                }, () => {
                    this.isLoading = false;
                }
            );
        } else {
            this.router.navigate(['/login']);
        }
    }

    insertOrder() {
        const selectedAddress = this.addressList.filter(address => address.addressId === this.selectedAddressId)[0];
        if (selectedAddress) {
            const dialogRef = this.dialog.open(MapPopUpComponent, {
                panelClass: 'map-overlay',
                data: {
                    title: 'سفارش به این آدرس ارسال می شود',
                    readonly: true,
                    location: new MapLocation(selectedAddress.latitude, selectedAddress.longitude, 17)
                }
            });
            dialogRef.afterClosed().subscribe((confirmed: boolean) => {
                if (confirmed) {
                    this.isLoading = true;
                    this.basketService.insertOrder(this.selectedAddressId).subscribe(() => {
                        this.isLoading = false;
                        this.stepper.next();
                        this.basketService.clearBasket();
                    }, () => {
                        this.isLoading = false;
                    });
                }
            });
        }
    }

    payPayment() {
        this.isLoading = true;
        this.basketService.payPayment(this.orderDetail.orderId, this.orderDetail.hixCode,
            this.orderDetail.totalPrice).subscribe((redirectUrl: string) => {
                this.isLoading = false;
                window.location.replace(redirectUrl);
            },
            () => {
                this.isLoading = false;
            });
    }

    goToStep(stepIndex: number) {
        this.currentStepIndex = stepIndex;
    }

    ngOnDestroy(): void {
        this.stepperSubscription.unsubscribe();
    }

    private next() {
        this.stepper.next();
    }

    private openUserHasOpenOrderWarningDialog() {
        this.dialog.open(UserHasOpenOrderPopUpComponent, {
            width: '260px',
            height: '294',
        });
    }


}
