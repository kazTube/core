import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CancelPurchaseService} from './cancel-purchase.service';
import {Router} from '@angular/router';
import {PredefinedCommentDTO} from '../../dto/basket/PredefinedCommentDTO';
import {flatMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
    selector: 'app-cancel-purchase',
    templateUrl: './cancel-purchase.component.html',
    styleUrls: ['./cancel-purchase.component.scss']
})
export class CancelPurchaseComponent {

    @Input() canceledPreDefinedCommentList: PredefinedCommentDTO[];
    @Input() orderId: number;
    @Output() orderCanceled = new EventEmitter();
    @Output() return = new EventEmitter();

    purchaseCancellationReasonsForm: FormGroup;
    isCancelingPurchase = false;

    constructor(
        public formBuilder: FormBuilder,
        public cancelPurchaseService: CancelPurchaseService,
        public router: Router) {
        this.createForm();
    }

    sendFeedBackInFailure() {
        this.isCancelingPurchase = true;
        this.cancelPurchaseService.cancelOrder(this.orderId).pipe(
            flatMap(isCanceled => {
                if (isCanceled) {
                    return this.cancelPurchaseService.sendFeedBackInFailure(
                        this.orderId,
                        this.getCommentIdList(),
                        this.purchaseCancellationReasonsForm.value.otherReasons);
                } else {
                    return of(false);
                }
            }))
            .subscribe(isCanceled => {
                if (isCanceled) {
                    this.orderCanceled.emit();
                }
                this.isCancelingPurchase = false;
            }, () => this.isCancelingPurchase = false);
    }

    isCancelDisabled() {
        return this.isCancelingPurchase ||
            (this.purchaseCancellationReasonsForm.controls.reasons.value.every((reason: boolean) => reason === false) &&
                !(this.purchaseCancellationReasonsForm.get('otherReasons').value &&
                    this.purchaseCancellationReasonsForm.get('otherReasons').value.trim().length > 0));

    }

    returnEvent() {
        this.return.emit();
    }

    private createForm() {
        this.purchaseCancellationReasonsForm = this.formBuilder.group({
            reasons: this.formBuilder.array(
                [
                    this.formBuilder.control(false),
                    this.formBuilder.control(false),
                    this.formBuilder.control(false),
                    this.formBuilder.control(false)
                ]
            ),
            otherReasons: ['']
        });
    }

    private getCommentIdList(): number[] {
        const result: number[] = [];
        this.purchaseCancellationReasonsForm.controls.reasons.value.forEach((selected: boolean, index: number) => {
            if (selected) {
                result.push(this.canceledPreDefinedCommentList[index].predefinedCommentId);
            }
        });
        return result;
    }

}
