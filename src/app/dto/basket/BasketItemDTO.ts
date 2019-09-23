import {ProductSummaryDTO} from '../product/ProductSummaryDTO';
import {ProductUnitDTO} from '../product/ProductUnitDTO';
import {SpecialOfferProductSummaryDTO} from '../pharmacy/SpecialOfferProductSummaryDTO';

export class BasketItemDTO {
    productDetail: ProductSummaryDTO | SpecialOfferProductSummaryDTO;
    productUnitList: ProductUnitDTO[];
    count: number;
    unitId: number;
    isSpecialOfferProduct: boolean;

    constructor(productDetail: ProductSummaryDTO | SpecialOfferProductSummaryDTO, productUnitList: ProductUnitDTO[],
                count: number, unitId: number, isSpecialOfferProduct: boolean) {
        this.productDetail = productDetail;
        this.productUnitList = productUnitList;
        this.count = count;
        this.unitId = unitId;
        this.isSpecialOfferProduct = isSpecialOfferProduct;
    }
}

