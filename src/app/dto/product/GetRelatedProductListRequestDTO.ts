export class GetRelatedProductListRequestDTO {
    categoryId: number;
    itemCount = 8;

    constructor(categoryId: number, itemCount: number) {
        this.categoryId = categoryId;
        this.itemCount = itemCount;
    }
}
