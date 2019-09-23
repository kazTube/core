import {Component} from '@angular/core';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

    constructor(public routingService: RoutingService) {
    }
}
