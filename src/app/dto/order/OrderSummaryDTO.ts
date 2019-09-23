
export class OrderSummaryDTO {
    orderId: number;
    createDateTime: string;
    totalPrice: number;
    transportPrice: number;
    stateId: number;
    stateName: string;
    isPaid: boolean;
    isReadyToPay: boolean;
    isCancelable: boolean;
    isCanceled: boolean;


    constructor(orderId: number, createDateTime: string, totalPrice: number,
                transportPrice: number, stateId: number, stateName: string,
                isPaid: boolean, isReadyToPay: boolean, isCancelable: boolean, isCanceled: boolean) {
        this.orderId = orderId;
        this.createDateTime = createDateTime;
        this.totalPrice = totalPrice;
        this.transportPrice = transportPrice;
        this.stateId = stateId;
        this.stateName = stateName;
        this.isPaid = isPaid;
        this.isReadyToPay = isReadyToPay;
        this.isCancelable = isCancelable;
        this.isCanceled = isCanceled;
    }
}
