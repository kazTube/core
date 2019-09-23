export class CancelPurchaseDTO {
    orderId: number;
    commentIdList: number[];
    userDescription: string;


    constructor(orderId: number, commentIdList: number[], userDescription: string) {
        this.orderId = orderId;
        this.commentIdList = commentIdList;
        this.userDescription = userDescription;
    }
}
