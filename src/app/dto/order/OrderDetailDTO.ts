import {OrderProductSummaryDTO} from './OrderProductSummaryDTO';

export class OrderDetailDTO {
    orderId: number;
    hixCode: number;
    pharmacyName: string;
    pharmacyDescription: string;
    pharmacyDistance: string;
    stateName: string;
    stateId: number;
    createdDateTime: string;
    orderPrice: number;
    totalPrice: number;
    transportPrice: number;
    receiverName: string;
    receiverPhone: string;
    addressText: string;
    postalCode: string;
    plaqueNumber: string;
    unit: string;
    isPaid: boolean;
    isReadyToPay: boolean;
    isCancelable: boolean;
    isCanceled: boolean;
    productList: OrderProductSummaryDTO[];


    constructor(orderId: number, hixCode: number, pharmacyName: string, pharmacyDescription: string,
                pharmacyDistance: string, stateName: string, stateId: number, createdDateTime: string,
                orderPrice: number, totalPrice: number, transportPrice: number, receiverName: string,
                receiverPhone: string, addressText: string, postalCode: string, plaqueNumber: string,
                unit: string, isPaid: boolean, isReadyToPay: boolean, isCancelable: boolean,
                isCanceled: boolean, productList: OrderProductSummaryDTO[]) {
        this.orderId = orderId;
        this.hixCode = hixCode;
        this.pharmacyName = pharmacyName;
        this.pharmacyDescription = pharmacyDescription;
        this.pharmacyDistance = pharmacyDistance;
        this.stateName = stateName;
        this.stateId = stateId;
        this.createdDateTime = createdDateTime;
        this.orderPrice = orderPrice;
        this.totalPrice = totalPrice;
        this.transportPrice = transportPrice;
        this.receiverName = receiverName;
        this.receiverPhone = receiverPhone;
        this.addressText = addressText;
        this.postalCode = postalCode;
        this.plaqueNumber = plaqueNumber;
        this.unit = unit;
        this.isPaid = isPaid;
        this.isReadyToPay = isReadyToPay;
        this.isCancelable = isCancelable;
        this.isCanceled = isCanceled;
        this.productList = productList;
    }
}
