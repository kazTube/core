import {AfterViewInit, Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {BaseFullLayoutComponent} from '../base-full-layout.component';
import {slider} from '../../../routing/routing-animations';
import {MenuService} from '../../menu/menu.service';
import {ActivationEnd, Router} from '@angular/router';
import {HeaderService} from '../../header/header.service';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-desktop-full-layout',
    templateUrl: './desktop-full-layout.component.html',
    styleUrls: ['./desktop-full-layout.component.scss'],
    animations: [
        slider,
        trigger('footerAnimation', [
            transition(':enter', [
                style({
                        transform: 'translateY(100%)'
                    }
                ),
                animate('200ms ease-out', style({transform: 'translateY(0%)'}))]),
        ])
    ]
})
export class DesktopFullLayoutComponent extends BaseFullLayoutComponent implements AfterViewInit {
    showMenu = false;

    constructor(appStateService: AppStateService,
                router: Router,
                public headerService: HeaderService,
                menuService: MenuService) {
        super(appStateService, router, headerService, menuService);

        // update showMenu based on route change
        router.events.subscribe(event => {
            if (event instanceof ActivationEnd
                && event.snapshot.firstChild
                && event.snapshot.firstChild.routeConfig) {
                this.showMenu = (event.snapshot.firstChild.routeConfig.path === 'home');
            }
        });
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
