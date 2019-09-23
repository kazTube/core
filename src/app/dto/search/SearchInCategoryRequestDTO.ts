export class SearchInCategoryRequestDTO {
    categoryId: number;
    phrase: string;
    limit = 8;
    offset: number;
    sortBy: number;


    constructor(categoryId: number, phrase: string, limit: number, offset: number, sortBy: number) {
        this.categoryId = categoryId;
        this.phrase = phrase;
        this.limit = limit;
        this.offset = offset;
        this.sortBy = sortBy;
    }
}
