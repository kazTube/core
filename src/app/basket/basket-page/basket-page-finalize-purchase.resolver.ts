import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable, of} from 'rxjs';
import {BasketPageService} from './basket-page.service';
import {RoutingService} from '../../routing/routing.service';
import {catchError, map} from 'rxjs/operators';
import {MediaObserver} from '@angular/flex-layout';
import {OrderDetailService} from '../../order/order-detail-page/order-detail.service';

@Injectable()
export class BasketPageFinalizePurchaseResolver implements Resolve<any> {

    constructor(private basketService: BasketPageService,
                private orderDetailService: OrderDetailService,
                private router: Router,
                private routingService: RoutingService,
                private media: MediaObserver
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> | Promise<any> | any {
        const step = 4;
        const orderId = +route.params['id'];
        const orderDetail = this.orderDetailService.getOrderDetail(orderId);
        const orderDetailPath = this.media.isActive('lt-sm') ? '/order/detail/' : '/profile/order/detail/';
        return forkJoin(of(step), orderDetail).pipe(
            map(data => {
                // redirect to order detail page if order is not ready to pay
                if (!data[1].isReadyToPay) {
                    this.router.navigate([orderDetailPath + data[1].orderId]);
                }
                return {
                    isFinalizePurchaseData: true,
                    step: data[0] - 1,
                    orderDetail: data[1]
                };
            }),
            catchError(() => {
                // to prevent error loop
                if (this.router.url === this.routingService.getLastSuccessfulRouteUrl()) {
                    this.router.navigateByUrl('/home');
                } else {
                    this.router.navigateByUrl(this.routingService.getLastSuccessfulRouteUrl());
                }
                return of(null);
            })
        );
    }
}
