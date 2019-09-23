import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ENTER} from '@angular/cdk/keycodes';
import {CommentSummaryDTO} from '../../dto/comment/CommentSummaryDTO';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-insert-comment-form',
    templateUrl: './insert-comment-form.component.html',
    styleUrls: ['./insert-comment.component.scss'],
})
export class InsertCommentFormComponent implements OnInit, OnDestroy {

    @Input() commentSummary: CommentSummaryDTO = CommentSummaryDTO.emptyInstance();
    @Input() isEditForm = false;

    @Output() commentSummaryChange = new EventEmitter();
    @Output() isValid = new EventEmitter();

    initCommentRate: number;
    commentForm: FormGroup = null;

    private unsubscribe$: Subject<void> = new Subject();

    readonly separatorKeysCodes: number[] = [ENTER];

    constructor(public formBuilder: FormBuilder) {
        this.commentForm = this.createCommentForm();
    }

    ngOnInit() {
        this.commentForm = this.createCommentForm();
        if (this.isEditForm) {
            this.initCommentRate = this.commentSummary.rate;
        }
        this.commentForm.statusChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(status => {
                this.isValid.emit(status === 'VALID');
            });
        this.commentForm.valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(value => {
                this.commentSummaryChange.emit(new CommentSummaryDTO(
                    this.commentSummary.userProductCommentId,
                    this.commentSummary.productCode,
                    value.title,
                    value.message,
                    value.positiveOpinion,
                    value.negativeOpinion,
                    value.rate
                ));
            });
        this.isValid.emit(this.commentForm.valid);
    }

    setRate(rate: number) {
        this.commentForm.get('rate').setValue(rate);
    }

    addOpinion(listName: string, event: any) {
        const list = this.commentForm.get(listName);
        const input = event.input;
        const value = event.value;

        // Add our opinion
        if ((value || '').trim()) {
            list.value.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    removeOpinion(listName: string, index: number) {
        const list = this.commentForm.get(listName);
        list.value.splice(index, 1);
    }

    resetForm() {
        this.commentForm.reset();
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private createCommentForm() {
        return this.formBuilder.group({
            title: [this.commentSummary.title, [Validators.required]],
            message: [this.commentSummary.message, [Validators.required]],
            positiveOpinion: [this.commentSummary.positiveOpinion, []],
            negativeOpinion: [this.commentSummary.negativeOpinion, []],
            rate: [this.commentSummary.rate, [Validators.required]],
        });
    }

}
