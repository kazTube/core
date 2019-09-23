import {Component} from '@angular/core';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

    constructor(public routingService: RoutingService) {
    }
}
