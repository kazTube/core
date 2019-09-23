import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivationEnd, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {MenuCategoryDTO} from '../../dto/MenuCategoryDTO';
import {MenuService} from '../menu/menu.service';
import {Subscription} from 'rxjs';
import {HeaderService} from '../header/header.service';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    template: '',
})
export class BaseFullLayoutComponent implements OnInit, AfterViewInit {

    @ViewChild('appContainer', {read: ElementRef}) appContainer: ElementRef;
    menuCategoryList: MenuCategoryDTO[];
    footerIsVisible = false;

    routerEvents$: Subscription;

    constructor(public appStateService: AppStateService,
                public router: Router,
                public headerService: HeaderService,
                public menuService: MenuService) {

        let routeShowSearchBoxInHeader: boolean;
        this.headerService.showSearchBox = true;

        this.routerEvents$ = this.router.events.subscribe(event => {
            if (event instanceof ActivationEnd) {
                // determine whether searchbox should be shown on the header or not
                if (routeShowSearchBoxInHeader === undefined
                    && event.snapshot.data.hasOwnProperty('showSearchBoxInHeader')) {
                    routeShowSearchBoxInHeader = event.snapshot.data['showSearchBoxInHeader'];
                }
            }
            if (event instanceof NavigationEnd) {
                this.headerService.showSearchBox = routeShowSearchBoxInHeader;
                routeShowSearchBoxInHeader = undefined;
                if (this.headerService.showSearchBox === undefined) {
                    this.headerService.showSearchBox = true;
                }
            }
        });
    }

    ngOnInit() {
        this.menuCategoryList = this.menuService.getMenuCategoryList();
    }

    onActivate() {
        this.appStateService.scrollToTop();
    }

    routeAnimationIsStarted() {
        this.footerIsVisible = false;
    }

    routeAnimationIsEnded() {
        this.footerIsVisible = true;
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    ngAfterViewInit() {
        this.appStateService.appContainer = this.appContainer;
    }

}
