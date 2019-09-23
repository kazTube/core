import {Component, Input, OnInit} from '@angular/core';
import {MenuCategoryDTO} from '../../dto/MenuCategoryDTO';

@Component({
    template: ''
})
export class BaseSubMenuComponent implements OnInit {
    @Input() menuCategory: MenuCategoryDTO;

    constructor() {
    }

    ngOnInit() {
    }

}
