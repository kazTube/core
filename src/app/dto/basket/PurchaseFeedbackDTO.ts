export class PurchaseFeedbackDTO {
    orderId: number;
    predefinedCommentIdList: number[];
    rate: number;
    userDescription: string;

    constructor(orderId: number, predefinedCommentIdList: number[], rate: number, userDescription: string) {
        this.orderId = orderId;
        this.predefinedCommentIdList = predefinedCommentIdList;
        this.rate = rate;
        this.userDescription = userDescription;
    }
}
