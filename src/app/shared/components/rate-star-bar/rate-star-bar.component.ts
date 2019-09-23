import {Component, EventEmitter, Output} from '@angular/core';
import {animate, query, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-rate-star-bar',
    templateUrl: './rate-star-bar.component.html',
    styleUrls: ['./rate-star-bar.component.scss'],
    animations: [
        trigger('rateSelectAnimation', [
            state('hide', style({
                opacity: '0',
                zIndex: -1
            })),
            state('show', style({
                opacity: '1',
                zIndex: 1
            })),
            transition('* => hide', [
                query('.star-text', style({opacity: '0'})),
                animate('0.5s ease', style({transform: 'translateX({{xMove}}px) translateY(28px) scale(2.21)', opacity: '0'}))
            ]),
            transition('* => show', [
                style({transform: 'translateX({{xMove}}px) translateY(28px) scale(2.21)', opacity: '0', zIndex: 1}),
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    style({transform: 'translateX(0px) translateY(0px) scale(1)', opacity: '1'}))
            ])
        ]),
        trigger('rateUnselectAnimation', [
            state('init', style({
                opacity: '0',
                marginTop: '0px'
            })),
            state('start', style({
                opacity: '1',
                display: 'flex'

            })),
            transition('* => start', [
                style({opacity: '0', height: '30px'}),
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({opacity: '1', height: '*'}))
            ]),
            transition(':leave', [
                style({opacity: '1', height: '*', marginTop: '*'}),
                animate('0.5s ease', style({transform: 'scale(0)', height: '0', opacity: '0', marginTop: '0px'}))
            ]),
        ])
    ]
})
export class RateStarBarComponent {

    @Output() select = new EventEmitter();
    selectedRate = -1;
    starCount: number[];
    unselectAnimationState = 'init';

    constructor() {
        this.starCount = Array(5).fill(-1).map((x, i) => (i + 1)); // [0,1,2,3,4]
    }

    setUnselectAnimationState(unselectState: string) {
        this.unselectAnimationState = unselectState;
    }

    onSelect(selection: number) {
        this.selectedRate = selection;
        this.select.emit(selection);
    }

    onDeselect() {
        this.selectedRate = -1;
        this.select.emit(undefined);
    }

}
