import {Component} from '@angular/core';
import {BaseUserHomePageComponent} from '../base-user-home-page.component';
import {ActivatedRoute} from '@angular/router';
import {UtilService} from '../../../core/services/util.service';

@Component({
    selector: 'app-mobile-user-home-page',
    templateUrl: './mobile-user-home-page.component.html',
    styleUrls: ['./mobile-user-home-page.component.scss']
})
export class MobileUserHomePageComponent extends BaseUserHomePageComponent {

    constructor(route: ActivatedRoute, utilService: UtilService) {
        super(route, utilService);
    }
}
