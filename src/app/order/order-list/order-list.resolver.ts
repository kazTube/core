import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductInfoDTO} from '../../dto/product/ProductInfoDTO';
import {OrderListService} from './order-list.service';
import {catchError} from 'rxjs/operators';
import {RoutingService} from '../../routing/routing.service';

@Injectable()
export class OrderListResolver implements Resolve<any> {

    constructor(
        private orderListService: OrderListService,
        private router: Router,
        private routingService: RoutingService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInfoDTO[]> | Promise<any> | any {
        return this.orderListService.getOrderList(this.orderListService.orderListPageSize, 0).pipe(
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
