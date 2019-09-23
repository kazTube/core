import {Component} from '@angular/core';
import {BaseSubMenuComponent} from '../base-sub-menu.component';

@Component({
    selector: 'app-desktop-sub-menu',
    templateUrl: './desktop-sub-menu.component.html',
    styleUrls: ['./desktop-sub-menu.component.scss']
})
export class DesktopSubMenuComponent extends BaseSubMenuComponent {

    constructor() {
        super();
    }
}
