import {ProductAttributeDTO} from '../product/ProductAttributeDTO';
import {ProductUnitDTO} from '../product/ProductUnitDTO';


export class SpecialOfferProductDTO {
    productId: number;
    productCode: string;
    productNameFa: string;
    productNameEn: string;
    imageUrlList: string[];
    description: string;
    attributesList: ProductAttributeDTO[];
    unitList: ProductUnitDTO[];
    oldPrice: number;
    newPrice: number;
    discountPercentage: number;
    rate: number;


    constructor(productId: number, productCode: string, productNameFa: string,
                productNameEn: string, imageUrlList: string[], description: string,
                attributesList: ProductAttributeDTO[], unitList: ProductUnitDTO[], odlPrice: number,
                newPrice: number, discountPercentage: number, rate: number) {
        this.productId = productId;
        this.productCode = productCode;
        this.productNameFa = productNameFa;
        this.productNameEn = productNameEn;
        this.imageUrlList = imageUrlList;
        this.description = description;
        this.attributesList = attributesList;
        this.unitList = unitList;
        this.oldPrice = odlPrice;
        this.newPrice = newPrice;
        this.discountPercentage = discountPercentage;
        this.rate = rate;
    }
}
