import {Component} from '@angular/core';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-how-to-insert-an-order',
    templateUrl: './how-to-insert-an-order.component.html',
    styleUrls: ['./how-to-insert-an-order.component.scss']
})
export class HowToInsertAnOrderComponent {

    constructor(public routingService: RoutingService) {
    }
}
