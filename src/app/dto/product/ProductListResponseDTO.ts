import {ProductSummaryDTO} from './ProductSummaryDTO';

export class ProductListResponseDTO {
    productList: ProductSummaryDTO[];
    totalCount: number;

    constructor(productList: ProductSummaryDTO[], totalCount: number) {
        this.productList = productList;
        this.totalCount = totalCount;
    }
}
