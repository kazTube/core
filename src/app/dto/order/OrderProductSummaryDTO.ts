export class OrderProductSummaryDTO {
    productCode: string;
    productNameFa: string;
    productNameEn: string;
    imageUrlList: string[];
    unitId: number;
    unitName: string;
    itemPrice: number;
    count: number;


    constructor(productCode: string, productNameFa: string, productNameEn: string, imageUrlList: string[],
                unitId: number, unitName: string, itemPrice: number, count: number) {
        this.productCode = productCode;
        this.productNameFa = productNameFa;
        this.productNameEn = productNameEn;
        this.imageUrlList = imageUrlList;
        this.unitId = unitId;
        this.unitName = unitName;
        this.itemPrice = itemPrice;
        this.count = count;
    }

    public static emptyInstance() {
        return new OrderProductSummaryDTO(
            undefined,
            undefined,
            undefined,
            [],
            undefined,
            undefined,
            undefined,
            undefined
        );
    }
}
