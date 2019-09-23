export class GetProductListRequestDTO {
    categoryId: number;
    limit = 8;
    offset: number;
    sortBy: number;


    constructor(categoryId: number, limit: number, offset: number, sortBy: number) {
        this.categoryId = categoryId;
        this.limit = limit;
        this.offset = offset;
        this.sortBy = sortBy;
    }
}
