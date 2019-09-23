import {ProductAttributeDTO} from './ProductAttributeDTO';

export class ProductSummaryDTO {
    productId: number;
    productCode: string;
    productNameFa: string;
    productNameEn: string;
    imageUrlList: string[];
    attributeList: ProductAttributeDTO[];
    description: string;
    rate: number;


    constructor(productId: number, productCode: string, productNameFa: string,
                productNameEn: string, imageUrlList: string[], attributeList: ProductAttributeDTO[], description: string, rate: number) {
        this.productId = productId;
        this.productCode = productCode;
        this.productNameFa = productNameFa;
        this.productNameEn = productNameEn;
        this.imageUrlList = imageUrlList;
        this.attributeList = attributeList;
        this.description = description;
        this.rate = rate;
    }
}
