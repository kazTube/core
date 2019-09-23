import {Component} from '@angular/core';
import {RoutingService} from '../../../routing/routing.service';

@Component({
    selector: 'app-file-a-complaint',
    templateUrl: './file-a-complaint.component.html',
    styleUrls: ['./file-a-complaint.component.scss']
})
export class FileAComplaintComponent {

    constructor(public routingService: RoutingService) {
    }
}
