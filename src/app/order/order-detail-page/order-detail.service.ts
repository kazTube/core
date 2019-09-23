import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderDetailDTO} from '../../dto/order/OrderDetailDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailService {

    constructor(private httpClient: HttpClient) {
    }

    getOrderDetail(orderId: number): Observable<OrderDetailDTO> {
        return this.httpClient.post<OrderDetailDTO>(RestAddresses.GET_ORDER_DETAIL, {
            orderId: orderId
        });
    }
}
