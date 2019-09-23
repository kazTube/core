import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PersonalInfoDTO} from '../../dto/profile/PersonalInfoDTO';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-personal-info-form',
    templateUrl: './personal-info-form.component.html',
    styleUrls: ['./personal-info-form.component.scss']
})
export class PersonalInfoFormComponent implements OnInit, OnDestroy {

    @Input() personalInfo: PersonalInfoDTO = PersonalInfoDTO.emptyInstance();
    @Input() profileMode = false;
    @Output() personalInfoChange = new EventEmitter();
    @Output() isValid = new EventEmitter();

    userPersonalInfoForm: FormGroup;
    unsubscribe$: Subject<void> = new Subject();

    constructor(public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.userPersonalInfoForm = this.createForm();
        this.userPersonalInfoForm.valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(value => {
                this.personalInfoChange.emit(new PersonalInfoDTO(
                    value.firstName,
                    value.lastName,
                    value.email,
                    value.nationalCode,
                    value.isForeignNational,
                    value.invitationCode,
                    value.phone,
                    this.personalInfo.avatar,
                ));
            });
        this.userPersonalInfoForm.statusChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(status => {
                this.isValid.emit(status === 'VALID');
            });

        this.userPersonalInfoForm.get('isForeignNational').valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(isForeignNational => {
                this.updateNationalCodeInputStatus(isForeignNational);
            });
        this.isValid.emit(this.userPersonalInfoForm.valid);
    }

    get firstName(): AbstractControl {
        return this.userPersonalInfoForm.get('firstName');
    }

    get lastName(): AbstractControl {
        return this.userPersonalInfoForm.get('lastName');
    }

    get email(): AbstractControl {
        return this.userPersonalInfoForm.get('email');
    }

    get isForeignNational(): AbstractControl {
        return this.userPersonalInfoForm.get('isForeignNational');
    }

    get nationalCode(): AbstractControl {
        return this.userPersonalInfoForm.get('nationalCode');
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private updateNationalCodeInputStatus(isForeignNational: boolean) {
        if (isForeignNational) {
            this.userPersonalInfoForm.get('nationalCode').setValue('');
        }
        this.userPersonalInfoForm.get('nationalCode').setValidators(
            this.getNationalCodeValidatorList(isForeignNational)
        );
        this.userPersonalInfoForm.get('nationalCode').updateValueAndValidity();
    }

    private createForm(): FormGroup {
        return this.formBuilder.group({
            firstName: [this.personalInfo.firstName, [Validators.required, Validators.minLength(3)]],
            lastName: [this.personalInfo.lastName, [Validators.required, Validators.minLength(3)]],
            email: [this.personalInfo.email, [Validators.email]],
            phone: [this.personalInfo.phone, []],
            nationalCode: [this.personalInfo.nationalCode, this.getNationalCodeValidatorList(this.personalInfo.isForeignNational)],
            invitationCode: [this.personalInfo.invitationCode, []],
            isForeignNational: [this.personalInfo.isForeignNational, [Validators.required]],
        });
    }

    private getNationalCodeValidatorList(isForeignNational: boolean): ValidatorFn[] {
        if (isForeignNational) {
            return [];
        } else {
            return [
                Validators.minLength(10),
                Validators.maxLength(10),
                Validators.pattern('[\\u06F0-\\u06F90-9]+')
            ];
        }
    }

}
