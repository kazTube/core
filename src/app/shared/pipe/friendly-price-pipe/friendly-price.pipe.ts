import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'friendlyPrice'
})
export class FriendlyPricePipe implements PipeTransform {

    transform(price: any, args?: any): any {
        let result = '';
        if (price) {
            const priceString = price.toString();
            let counter = 0;
            for (let i = priceString.length - 1; i > -1; --i) {
                counter++;
                if (counter === 3 && i !== 0) {
                    result = '،'.concat(priceString[i], result);
                    counter = 0;
                } else {
                    result = priceString[i].concat(result);
                }
            }
            result = result.concat(' تومان');
        }
        return result;
    }

}
