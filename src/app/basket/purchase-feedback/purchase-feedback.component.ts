import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PredefinedCommentDTO} from '../../dto/basket/PredefinedCommentDTO';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PurchaseFeedbackService} from './purchase-feedback.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-purchase-feedback',
    templateUrl: './purchase-feedback.component.html',
    styleUrls: ['./purchase-feedback.component.scss'],
    animations: [
        trigger('moveButton', [
            state('leftSide',
                style({
                    transform: `translateX(-{{xMove}}px)`
                }),
                {params: {xMove: 0}}
            ),
            state('center', style({
                transform: `translateX(0)`
            })),
            transition('center => leftSide', [
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.025)',
                    style({transform: `translateX(-{{xMove}}px)`})
                )
            ]),
            transition('leftSide => center', [
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.025)',
                    style({transform: `translateX(0)`}))
            ])
        ]),
        trigger('showForm', [
            transition('void => show', [
                style({height: 0}),
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.025)',
                    style({height: '*'}))
            ]),
            transition('show => void', [
                animate('0.5s cubic-bezier(0.175, 0.885, 0.32, 1.025)',
                    style({height: 0}))
            ])
        ])
    ]
})
export class PurchaseFeedbackComponent implements OnInit {

    @ViewChild('sendBtn', {read: ElementRef}) sendBtn: ElementRef;
    preDefinedCommentList: PredefinedCommentDTO[][] = [];
    orderId: number;
    rate = -1;
    purchaseFeedbackForm: FormGroup;
    isSendingFeedback = false;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public formBuilder: FormBuilder,
        public purchaseFeedbackService: PurchaseFeedbackService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.orderId = +params.get('id'); // (+) converts string 'id' to a number
        });
        this.route.data.subscribe(data => {
            this.preDefinedCommentList = data.preDefinedCommentList;
        });
        this.createForm();
    }

    sendFeedback() {
        this.isSendingFeedback = true;
        this.purchaseFeedbackService.sendFeedback(this.orderId,
            this.getPreDefinedCommentIdList(),
            this.rate + 1,
            this.purchaseFeedbackForm.value.otherReasons
        ).subscribe(() => {
            this.isSendingFeedback = false;
            this.router.navigateByUrl('/home');
        }, () => this.isSendingFeedback = false);
    }


    setRate(rate: number) {
        if (rate) {
            this.rate = rate - 1;
            this.createForm();
        } else {
            this.rate = -1;
        }
    }

    getButtonTranslateX(): number {
        let translateX = 0;
        if (this.sendBtn) {
            translateX = this.sendBtn.nativeElement.offsetLeft;
        }
        return translateX;
    }

    isCancelDisabled(): boolean {
        return this.isSendingFeedback ||
            (this.purchaseFeedbackForm.controls.reasons.value.every((reason: boolean) => reason === false) &&
                !(this.purchaseFeedbackForm.get('otherReasons').value &&
                    this.purchaseFeedbackForm.get('otherReasons').value.trim().length > 0));
    }

    private createForm() {
        let formCheckboxes = [this.formBuilder.control(false)];
        if (this.rate !== -1) {
            formCheckboxes = this.preDefinedCommentList[this.rate]
                .map(() => this.formBuilder.control(false));
        }
        this.purchaseFeedbackForm = this.formBuilder.group({
            reasons: this.formBuilder.array(formCheckboxes),
            otherReasons: ['']
        });
    }

    private getPreDefinedCommentIdList(): number[] {
        const result: number[] = [];
        this.purchaseFeedbackForm.controls.reasons.value.forEach((selected: boolean, index: number) => {
            if (selected) {
                result.push(this.preDefinedCommentList[this.rate][index].predefinedCommentId);
            }
        });
        return result;
    }
}
