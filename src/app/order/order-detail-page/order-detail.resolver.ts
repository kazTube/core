import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {OrderDetailService} from './order-detail.service';
import {catchError} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';

@Injectable()
export class OrderDetailResolver implements Resolve<any> {

    constructor(private orderDetailService: OrderDetailService, private router: Router, private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        const orderId = +route.params.id;
        return this.orderDetailService.getOrderDetail(orderId).pipe(
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
