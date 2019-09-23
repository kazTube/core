import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDpFormField]'
})
export class DpFormFieldDirective implements OnInit {
    private inputClass = 'dp-blue-form-field';

    constructor(private renderer: Renderer2, private el: ElementRef) {
    }

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, this.inputClass);
    }


}
