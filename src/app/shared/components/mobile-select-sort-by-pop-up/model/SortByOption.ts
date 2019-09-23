
export class SortByOption {
    id: number;
    text: string;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }
}

export const SORT_BY_MOST_VIEWED = new SortByOption(1, 'پر بازدید ترین');
export const SORT_BY_MOST_POPULAR = new SortByOption(2, 'محبوب ترین');
export const SORT_BY_NEWEST = new SortByOption(3, 'جدیدترین');
export const SORT_BY_BESTSELLING = new SortByOption(4, 'پر فروش ترین');




