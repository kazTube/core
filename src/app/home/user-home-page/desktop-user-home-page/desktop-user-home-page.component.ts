import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BaseUserHomePageComponent} from '../base-user-home-page.component';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MenuCategoryDTO} from '../../../dto/MenuCategoryDTO';
import {MatMenu} from '@angular/material';
import {TopCategoryDTO} from '../../../dto/TopCategoryDTO';
import {MenuService} from '../../../layout/menu/menu.service';
import {HeaderService} from '../../../layout/header/header.service';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-desktop-user-home-page',
    templateUrl: './desktop-user-home-page.component.html',
    styleUrls: ['./desktop-user-home-page.component.scss']
})
export class DesktopUserHomePageComponent extends BaseUserHomePageComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChildren('subMenu') menuList: QueryList<MatMenu>;
    menuCategoryList: MenuCategoryDTO[];
    topCategoryList: TopCategoryDTO[] = [];
    private unsubscribe$ = new Subject();

    constructor(route: ActivatedRoute,
                utilService: UtilService,
                private menuService: MenuService,
                private headerService: HeaderService
    ) {
        super(route, utilService);
    }

    ngOnInit() {
        this.topCategoryList = this.menuService.getTopCategoryList();
        this.menuCategoryList = this.menuService.getMenuCategoryList();
        super.ngOnInit();
    }

    ngAfterViewInit(): void {
        this.utilService.scrollEvent$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe((event: any) => {
            console.log(event.target.scrollTop);
            this.headerService.showSearchBox = event.target.scrollTop > 178;
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
