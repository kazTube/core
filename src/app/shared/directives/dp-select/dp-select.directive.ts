import {Directive, OnInit} from '@angular/core';
import {MatSelect} from '@angular/material';

@Directive({
    selector: '[appDpSelect]'
})
export class DpSelectDirective implements OnInit {
    private inputClass = 'dp-blue-select';

    constructor(private select: MatSelect) {
    }

    ngOnInit(): void {
       this.select.panelClass = this.inputClass;
    }


}
