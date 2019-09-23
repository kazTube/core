import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {MenuCategoryDTO} from '../../dto/MenuCategoryDTO';
import {FlatCategoryDTO} from '../../dto/FlatCategoryDTO';
import {TopCategoryDTO} from '../../dto/TopCategoryDTO';
import {RestAddresses} from '../../core/constants/RestAddresses';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private menuCategoryList: MenuCategoryDTO[] = [];
    private topCategoryList: TopCategoryDTO[] = [];
    private flatMenuCategoryList: FlatCategoryDTO[] = null;

    constructor(private httpClient: HttpClient) {
    }


    getMenuCategoryListFromServer(): Observable<MenuCategoryDTO[]> {
        const observable = this.httpClient.post<MenuCategoryDTO[]>(RestAddresses.GET_CATEGORY_MENU, null).pipe(shareReplay(1));
        observable.subscribe(menu => {
            this.menuCategoryList = menu;
        });
        return observable;
    }

    getTopCategoryListFromServer(): Observable<TopCategoryDTO[]> {
        const observable = this.httpClient.post<TopCategoryDTO[]>(RestAddresses.GET_TOP_CATEGORY_LIST,
            {itemCount: 9}).pipe(
            shareReplay(1),
        );
        observable.subscribe(menu => {
            this.topCategoryList = menu;
        });
        return observable;
    }

    getTopCategoryList(): TopCategoryDTO[] {
        return this.topCategoryList;
    }

    getMenuCategoryList(): MenuCategoryDTO[] {
        return this.menuCategoryList;
    }

    getFlatCategoryById(categoryId: number): FlatCategoryDTO {
        for (const category of this.getFlatCategoryList()) {
            if (category.id === categoryId) {
                return category;
            }
        }
        return null;
    }

    private getFlatCategoryList(): FlatCategoryDTO[] {
        if (this.flatMenuCategoryList === null) {
            this.flatMenuCategoryList = this.addHierarchyAndMakeFlat(this.menuCategoryList);
        }
        return this.flatMenuCategoryList;

    }

    private addHierarchyAndMakeFlat(categoryList: MenuCategoryDTO[]): FlatCategoryDTO[] {
        let result: FlatCategoryDTO[] = [];
        for (const category of categoryList) {
            const flatCategory = new FlatCategoryDTO(category.categoryId, category.categoryName,
                this.convertMenuCategoryListToFlatCategoryList(category.subCategory), []);
            result = result.concat(this.makeCategoryFlat(flatCategory));
        }

        return result;
    }

    private makeCategoryFlat(category: FlatCategoryDTO) {
        let result: FlatCategoryDTO[] = [category];
        if (category.subCategoryList && category.subCategoryList.length > 0) {
            for (const subCategory of category.subCategoryList) {
                subCategory.parentCategoryList = category.parentCategoryList.concat(category);
                result = result.concat(this.makeCategoryFlat(subCategory));
            }
        }
        return result;
    }

    private convertMenuCategoryListToFlatCategoryList(menuCategoryList: MenuCategoryDTO[]): FlatCategoryDTO[] {
        const result: FlatCategoryDTO[] = [];
        for (const category of menuCategoryList) {
            result.push(new FlatCategoryDTO(category.categoryId, category.categoryName,
                this.convertMenuCategoryListToFlatCategoryList(category.subCategory), []));
        }
        return result;
    }
}
