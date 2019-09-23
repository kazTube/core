import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BaseFullLayoutComponent} from '../base-full-layout.component';
import {Subscription} from 'rxjs';
import {slider} from '../../../routing/routing-animations';
import {MenuService} from '../../menu/menu.service';
import {HeaderService} from '../../header/header.service';
import {Router} from '@angular/router';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-mobile-full-layout',
    templateUrl: './mobile-full-layout.component.html',
    styleUrls: ['./mobile-full-layout.component.scss'],
    animations: [
        slider,
        trigger('footerAnimation', [
            transition(':enter', [
                style({
                        transform: 'translateY(100%)'
                    }
                ),
                animate('200ms ease-out', style({transform: 'translateY(0%)'}))]),
        ]),
        trigger('searchBoxAnimation', [
            transition(':enter', [
                style({height: '40px', opacity: '0.5'}),
                animate('100ms ease-in', style({height: '*', opacity: '1'}))]),
        ])
    ]
})
export class MobileFullLayoutComponent extends BaseFullLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

    isMenuOpen: boolean;
    isMenuOpen$: Subscription;

    constructor(appStateService: AppStateService,
                router: Router,
                public headerService: HeaderService,
                menuService: MenuService) {
        super(appStateService, router, headerService, menuService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.isMenuOpen$ = this.headerService.isMenuOpen$.subscribe(value => {
            this.isMenuOpen = value;
        });
    }

    closeMenu() {
        this.headerService.closeMenu();
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
    }

    ngOnDestroy() {
        this.isMenuOpen$.unsubscribe();
    }


}
