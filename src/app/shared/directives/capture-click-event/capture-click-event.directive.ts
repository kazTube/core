import {Directive, ElementRef, HostListener} from '@angular/core';
import {UtilService} from '../../../core/services/util.service';

@Directive({
    selector: '[appCaptureClickEvent]'
})
export class CaptureClickEventDirective {

    constructor(private elementRef: ElementRef, private utilService: UtilService) {
    }


    @HostListener('click', ['$event'])
    onClick(event: any) {
        this.utilService.sendClickEvent(event);
    }
}
