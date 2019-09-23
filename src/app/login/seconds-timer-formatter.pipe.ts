import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'secondsTimerFormatter'
})
export class SecondsTimerFormatterPipe implements PipeTransform {

    transform(value: number, args?: any): any {
        if (value >= 10) {
            return `00:${value}`;
        } else {
            return `00:0${value}`;
        }
    }

}
