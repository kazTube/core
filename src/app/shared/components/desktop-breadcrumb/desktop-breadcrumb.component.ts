import {Component, Input} from '@angular/core';
import {BreadcrumbItemModel} from './breadcrumbItemModel';

@Component({
    selector: 'app-desktop-breadcrumb',
    templateUrl: './desktop-breadcrumb.component.html',
    styleUrls: ['./desktop-breadcrumb.component.scss']
})
export class DesktopBreadcrumbComponent {

    @Input() itemList: BreadcrumbItemModel[] = [];

    constructor() {
    }

}
