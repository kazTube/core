import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from '../../routing/routing-animations';
import {AppStateService} from '../../core/services/app-state.service';

@Component({
    selector: 'app-simple-layout',
    templateUrl: './simple-layout.component.html',
    styleUrls: ['./simple-layout.component.scss'],
    animations: [slider]
})
export class SimpleLayoutComponent implements AfterViewInit {

    isMobile = false;
    @ViewChild('appContainer', {read: ElementRef}) appContainer: ElementRef;


    constructor(public appStateService: AppStateService) {
        this.isMobile = appStateService.isMobile();
    }

    onActivate() {
        this.appStateService.scrollToTop();
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    ngAfterViewInit(): void {
        this.appStateService.appContainer = this.appContainer;
    }

}
