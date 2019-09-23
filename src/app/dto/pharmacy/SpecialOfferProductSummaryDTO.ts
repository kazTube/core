import {ProductUnitDTO} from '../product/ProductUnitDTO';

export class SpecialOfferProductSummaryDTO {
    productId: number;
    productCode: string;
    productNameFa: string;
    productNameEn: string;
    imageUrlList: string[];
    pharmacyName: string;
    pharmacyHixCode: number;
    discountPercentage: number;
    unitList: ProductUnitDTO[];
    newPrice: number;
    oldPrice: number;
    rate: number;


    constructor(productId: number, productCode: string, productNameFa: string, productNameEn: string, imageUrlList: string[], pharmacyName: string, pharmacyHixCode: number, unitList: ProductUnitDTO[], newPrice: number , oldPrice: number , discountPercentage: number, rate: number) {
        this.productId = productId;
        this.productCode = productCode;
        this.productNameFa = productNameFa;
        this.productNameEn = productNameEn;
        this.imageUrlList = imageUrlList;
        this.pharmacyName = pharmacyName;
        this.pharmacyHixCode = pharmacyHixCode;
        this.discountPercentage = discountPercentage;
        this.unitList = unitList;
        this.newPrice = newPrice;
        this.oldPrice = oldPrice;
        this.rate = rate;
    }
}
