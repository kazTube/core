import {MenuCategoryDTO} from './MenuCategoryDTO';

export class FlatCategoryDTO {
    id: number;
    name: string;
    subCategoryList: FlatCategoryDTO[];
    parentCategoryList: FlatCategoryDTO[];

    constructor(id: number, name: string, subCategoryList: FlatCategoryDTO[], parentCategoryList: FlatCategoryDTO[]) {
        this.id = id;
        this.name = name;
        this.subCategoryList = subCategoryList;
        this.parentCategoryList = parentCategoryList;
    }
}
