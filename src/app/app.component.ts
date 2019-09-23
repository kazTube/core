import {Component} from '@angular/core';
import {RoutingService} from './routing/routing.service';
import {HeaderService} from './layout/header/header.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    isMenuOpen: boolean;
    isNavigationInProgress: boolean;

    constructor(
        private headerService: HeaderService,
        private routingService: RoutingService,
    ) {

        headerService.isMenuOpen$.subscribe(value => {
            this.isMenuOpen = value;
        });

        this.routingService.isNavigationInProgress$.subscribe(value => {
            this.isNavigationInProgress = value;
        });
    }
}

