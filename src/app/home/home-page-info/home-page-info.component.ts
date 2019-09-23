import {Component, Input} from '@angular/core';
import {MenuCategoryDTO} from '../../dto/MenuCategoryDTO';
import {TopCategoryDTO} from '../../dto/TopCategoryDTO';

@Component({
    selector: 'app-home-page-info',
    templateUrl: './home-page-info.component.html',
    styleUrls: ['./home-page-info.component.scss']
})
export class HomePageInfoComponent  {

    @Input() topCategoryList: TopCategoryDTO[] = [];
    constructor() {
    }

}
