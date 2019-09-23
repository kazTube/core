import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CancelPurchaseDTO} from '../../dto/basket/CancelPurchaseDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {PredefinedCommentListDTO} from '../../dto/basket/PredefinedCommentListDTO';

@Injectable({
    providedIn: 'root'
})
export class CancelPurchaseService {

    constructor(private httpClient: HttpClient) {
    }

    sendFeedBackInFailure(orderId: number, commentIdList: number[], userDescription: string): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.SEND_FEEDBACK_IN_FAILURE,
            new CancelPurchaseDTO(orderId, commentIdList, userDescription));
    }

    cancelOrder(orderId: number): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.CANCEL_ORDER_BY_USER, {
            orderId: orderId
        });
    }

    getCanceledPreDefinedCommentList(): Observable<PredefinedCommentListDTO> {
        return this.httpClient.post<PredefinedCommentListDTO>(RestAddresses.GET_CANCELED_PREDEFINED_COMMENT_LIST, null);
    }
}
