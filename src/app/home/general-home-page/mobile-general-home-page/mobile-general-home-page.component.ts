import {AfterViewInit, Component} from '@angular/core';
import {UtilService} from '../../../core/services/util.service';
import {BaseGeneralHomePageComponent} from '../base-general-home-page.component';
import {takeUntil} from 'rxjs/operators';
import {HeaderService} from '../../../layout/header/header.service';

@Component({
    selector: 'app-mobile-general-home-page',
    templateUrl: './mobile-general-home-page.component.html',
    styleUrls: ['./mobile-general-home-page.component.scss']
})
export class MobileGeneralHomePageComponent extends BaseGeneralHomePageComponent implements AfterViewInit {

    constructor(utilService: UtilService,
                headerService: HeaderService) {
        super(utilService, headerService);
    }

    ngAfterViewInit() {
        this.utilService.scrollEvent$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe((event: any) => {
            this.headerService.showSearchBox = event.target.scrollTop > 194;
        });
    }
}
