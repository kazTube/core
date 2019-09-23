import {Directive, ElementRef, HostListener} from '@angular/core';
import {UtilService} from '../../../core/services/util.service';

@Directive({
    selector: '[appCaptureScrollEvent]'
})
export class CaptureScrollEventDirective {

    constructor(private elementRef: ElementRef, private utilService: UtilService) {
    }

    @HostListener('scroll', ['$event'])
    onScroll(event: any) {
        this.utilService.sendScrollEvent(event);
    }
}
