import {Component} from '@angular/core';
import {RoutingService} from '../../routing/routing.service';

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

    constructor(public routingService: RoutingService) {
    }
}
