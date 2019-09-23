import {Component, Input, OnInit} from '@angular/core';
import {HeaderService} from '../../header/header.service';
import {BaseSubMenuComponent} from '../base-sub-menu.component';

@Component({
    selector: 'app-mobile-sub-menu',
    templateUrl: './mobile-sub-menu.component.html',
    styleUrls: ['./mobile-sub-menu.component.scss']
})
export class MobileSubMenuComponent extends BaseSubMenuComponent implements OnInit {

    @Input() level: number;

    constructor(private headerService: HeaderService) {
        super();
    }

    ngOnInit() {
    }

    closeMenu() {
        this.headerService.closeMenu();
    }

}
