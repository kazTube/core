import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {UtilService} from '../../core/services/util.service';
import {HeaderService} from '../../layout/header/header.service';


@Component({
    template: ''
})
export class BaseGeneralHomePageComponent implements OnDestroy {

    protected unsubscribe$ = new Subject();

    constructor(protected utilService: UtilService,
                protected headerService: HeaderService) {
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.unsubscribe$.unsubscribe();
    }


}
