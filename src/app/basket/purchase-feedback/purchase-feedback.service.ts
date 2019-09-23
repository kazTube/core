import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RestAddresses} from '../../core/constants/RestAddresses';
import {PurchaseFeedbackDTO} from '../../dto/basket/PurchaseFeedbackDTO';
import {PredefinedCommentListDTO} from '../../dto/basket/PredefinedCommentListDTO';

@Injectable({
    providedIn: 'root'
})
export class PurchaseFeedbackService {

    constructor(private httpClient: HttpClient) {
    }

    sendFeedback(orderId: number, predefinedCommentIdList: number[], rate: number, userDescription: string): Observable<boolean> {
        return this.httpClient.post<boolean>(RestAddresses.SEND_PURCHASE_FEEDBACK,
            new PurchaseFeedbackDTO(orderId, predefinedCommentIdList, rate, userDescription));
    }

    getPreDefinedCommentList(rate: number): Observable<PredefinedCommentListDTO> {
        return this.httpClient.post<PredefinedCommentListDTO>(RestAddresses.GET_PURCHASE_PREDEFINED_COMMENT_LIST, {rate: rate});
    }
}
