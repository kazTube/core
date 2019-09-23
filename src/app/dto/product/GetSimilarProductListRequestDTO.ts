export class GetSimilarProductListRequestDTO {
    productCode: number;
    itemCount = 8;

    constructor(productCode: number, itemCount: number) {
        this.productCode = productCode;
        this.itemCount = itemCount;
    }
}
