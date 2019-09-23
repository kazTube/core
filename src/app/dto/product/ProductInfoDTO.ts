import {ProductAttributeDTO} from './ProductAttributeDTO';
import {ProductUnitDTO} from './ProductUnitDTO';
import {MenuCategoryDTO} from '../MenuCategoryDTO';

export class ProductInfoDTO {
    productId: number;
    productCode: string;
    productNameFa: string;
    productNameEn: string;
    ceoName: string;
    description: string;
    categoryList: MenuCategoryDTO[];
    imageUrlList: string[];
    unitList: ProductUnitDTO[];
    attributeSetId: number;
    attributeSetName: string;
    attributesList: ProductAttributeDTO[];
    rate: number;


    constructor(productId: number, productCode: string, productNameFa: string,
                productNameEn: string, ceoName: string, description: string,
                categoryIdList: MenuCategoryDTO[], imageUrlList: string[], unitList: ProductUnitDTO[],
                attributeSetId: number, attributeSetName: string, attributesList: ProductAttributeDTO[], rate: number) {
        this.productId = productId;
        this.productCode = productCode;
        this.productNameFa = productNameFa;
        this.productNameEn = productNameEn;
        this.ceoName = ceoName;
        this.description = description;
        this.categoryList = categoryIdList;
        this.imageUrlList = imageUrlList;
        this.unitList = unitList;
        this.attributeSetId = attributeSetId;
        this.attributeSetName = attributeSetName;
        this.attributesList = attributesList;
        this.rate = rate;
    }
}
