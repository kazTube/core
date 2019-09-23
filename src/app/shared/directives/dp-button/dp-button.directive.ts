import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDpButton]'
})
export class DpButtonDirective implements OnInit {
    @Input() appDpButton = 'blue';

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, this.appDpButton);
        this.renderer.addClass(this.el.nativeElement, 'dp-button');
    }
}
