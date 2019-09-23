import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-basket-stepper-control',
    templateUrl: './basket-stepper-control.component.html',
    styleUrls: ['./basket-stepper-control.component.scss']
})
export class BasketStepperControlComponent implements OnChanges {

    @Input() currentStepIndex: number;
    @Input() height = 100;
    @Output() stepChange = new EventEmitter<number>();
    progress: number;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['currentStepIndex']) {
            this.setProgress();
        }
    }


    goToStep(step: number) {
        this.stepChange.emit(step);
    }

    private setProgress() {
        this.progress = this.currentStepIndex * 33;
    }

}
