import {ProductSearchResultDTO} from './ProductSearchResultDTO';

export class TopProductListDTO {
    success: boolean;
    error: string;
    result: ProductSearchResultDTO[];
}
