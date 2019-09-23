import {AfterViewInit, Component, OnDestroy, QueryList, ViewChildren} from '@angular/core';
import {MatMenu} from '@angular/material';
import {MenuService} from '../menu.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {BaseMenuComponent} from '../base-menu.component';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-desktop-menu',
    templateUrl: './desktop-menu.component.html',
    styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent extends BaseMenuComponent implements AfterViewInit, OnDestroy {

    @ViewChildren('subMenu') menuList: QueryList<MatMenu>;
    selectedMenuId: number;
    unsubscribe$ = new Subject();


    constructor(private menuService: MenuService,
                private utilService: UtilService) {
        super();
    }

    ngAfterViewInit() {
        this.utilService.scrollEvent$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.closeAllMenu();
            });
        this.utilService.clickEvent$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
                this.closeAllMenu();
            });
    }


    onMenuClick(event: any, categoryId: number, currentMenu: MatMenu) {
        event.stopPropagation();
        event.preventDefault();
        this.menuList.forEach(menu => {
            if (menu !== currentMenu) {
                menu.closed.emit();
            }
        });
        this.selectedMenuId = categoryId;
    }

    onMenuClose() {
        this.selectedMenuId = undefined;
    }

    closeAllMenu() {
        this.menuList.forEach(menu => {
            menu.closed.emit();
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.unsubscribe$.unsubscribe();
    }


}
