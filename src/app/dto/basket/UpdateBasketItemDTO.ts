export class UpdateBasketItemDTO {
    productCode: string;
    count: number;
    unitId: number;


    constructor(productCode: string, count: number, unitId: number) {
        this.productCode = productCode;
        this.count = count;
        this.unitId = unitId;
    }
}
