import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BaseBasketPageComponent} from '../base-basket-page.component';
import {BasketPageService} from '../basket-page.service';
import {RoutingService} from '../../../routing/routing.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../../login/login.service';
import {HeaderService} from '../../../layout/header/header.service';
import {AppStateService} from '../../../core/services/app-state.service';

@Component({
    selector: 'app-mobile-basket-stepper',
    templateUrl: './mobile-basket-page.component.html',
    styleUrls: ['./mobile-basket-page.component.scss']
})
export class MobileBasketPageComponent extends BaseBasketPageComponent implements OnInit, OnDestroy, AfterViewInit {

    constructor(basketService: BasketPageService,
                routingService: RoutingService,
                dialog: MatDialog,
                headerService: HeaderService,
                router: Router,
                route: ActivatedRoute,
                loginService: LoginService,
                appStateService: AppStateService) {
        super(basketService, routingService, dialog, headerService, router, route, loginService, appStateService);
    }


    ngOnInit() {
        super.ngOnInit();
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}
