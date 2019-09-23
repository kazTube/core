import {UpdateBasketItemDTO} from './UpdateBasketItemDTO';

export class SyncBasketRequestDTO {
    basketList: UpdateBasketItemDTO[];

    constructor(basketList: UpdateBasketItemDTO[]) {
        this.basketList = basketList;
    }
}
