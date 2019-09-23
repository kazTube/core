import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {OrderSummaryDTO} from '../../dto/order/OrderSummaryDTO';

@Injectable({
    providedIn: 'root'
})
export class OrderListService {

    orderListPageSize = 5;
    orderList: OrderSummaryDTO[];
    hasMoreOrder = true;
    orderOffset = 0;

    constructor(private httpClient: HttpClient) {
    }

    getOrderList(limit: number, offset: number): Observable<any> {
        return this.httpClient.post(RestAddresses.GET_USER_ORDER_LIST, {
            limit: limit,
            offset: offset
        });
    }
}
