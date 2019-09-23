import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PredefinedCommentDTO} from '../../dto/basket/PredefinedCommentDTO';

@Component({
    selector: 'app-mobile-cancel-purchase-page',
    templateUrl: './mobile-cancel-purchase-page.component.html',
    styleUrls: ['./mobile-cancel-purchase-page.component.scss']
})
export class MobileCancelPurchasePageComponent implements OnInit {

    canceledPreDefinedCommentList: PredefinedCommentDTO[];
    orderId: number;

    constructor(public route: ActivatedRoute,
                public router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.orderId = +params['id']; // (+) converts string 'id' to a number
        });
        this.route.data.subscribe(data => {
            this.canceledPreDefinedCommentList = data.preDefinedCommentList;
        });
    }

    orderCanceled() {
        this.router.navigate(['/order/detail/' + this.orderId]);
    }

    returnToBasket() {
        this.router.navigate(['/basket/finalize/purchase/' + this.orderId]);
    }

}
