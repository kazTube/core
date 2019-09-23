import {Component} from '@angular/core';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FAQComponent {

    constructor(public routingService: RoutingService) {
    }
}
