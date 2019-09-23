import {Component, Input} from '@angular/core';
import {MenuCategoryDTO} from '../../dto/MenuCategoryDTO';

@Component({
    template: ''
})
export class BaseMenuComponent {

    @Input() menuCategoryList: MenuCategoryDTO[];

    constructor() {
    }
}
