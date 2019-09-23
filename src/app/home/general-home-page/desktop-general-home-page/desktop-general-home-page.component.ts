import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuCategoryDTO} from '../../../dto/MenuCategoryDTO';
import {takeUntil} from 'rxjs/operators';
import {BaseGeneralHomePageComponent} from '../base-general-home-page.component';
import {TopCategoryDTO} from '../../../dto/TopCategoryDTO';
import {HeaderService} from '../../../layout/header/header.service';
import {MenuService} from '../../../layout/menu/menu.service';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-desktop-general-home-page',
    templateUrl: './desktop-general-home-page.component.html',
    styleUrls: ['./desktop-general-home-page.component.scss']
})
export class DesktopGeneralHomePageComponent extends BaseGeneralHomePageComponent implements OnInit, AfterViewInit {


    topCategoryList: TopCategoryDTO[] = [];
    menuCategoryList: MenuCategoryDTO[] = [];

    constructor(utilService: UtilService,
                headerService: HeaderService,
                private menuService: MenuService) {
        super(utilService, headerService);
    }

    ngOnInit() {
        this.menuCategoryList = this.menuService.getMenuCategoryList();
        this.topCategoryList = this.menuService.getTopCategoryList();
    }

    ngAfterViewInit() {
        this.utilService.scrollEvent$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe((event: any) => {
            console.log(event.target.scrollTop);
            this.headerService.showSearchBox = event.target.scrollTop > 385;
        });
    }
}
