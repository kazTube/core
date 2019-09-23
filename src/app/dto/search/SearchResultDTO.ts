import {ProductSearchResultDTO} from './ProductSearchResultDTO';
import {CategorySearchResultDTO} from './CategorySearchResultDTO';

export class SearchResultDTO {
    count: number;
    productList: ProductSearchResultDTO[];
    categoryList: CategorySearchResultDTO[];

    constructor(count: number, productList: ProductSearchResultDTO[], categoryList: CategorySearchResultDTO[]) {
        this.count = count;
        this.productList = productList;
        this.categoryList = categoryList;
    }
}
