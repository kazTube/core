import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {StateDTO} from '../../dto/profile/StateDTO';
import {CityDTO} from '../../dto/profile/CityDTO';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AddressDTO} from '../../dto/profile/AddressDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {UserProfileService} from '../user-profile.service';
import {MapLocation} from '../map-button/MapLocation';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-address-info-form',
    templateUrl: './address-info-form.component.html',
    styleUrls: ['./address-info-form.component.scss']
})
export class AddressInfoFormComponent implements OnInit, OnDestroy {
    @Input() address: AddressDTO = AddressDTO.emptyInstance();
    @Input() stateList: StateDTO[] = [];
    @Input() cityList: CityDTO[] = [];
    @Input() isEditForm = false;
    @Output() addressChange = new EventEmitter();
    @Output() isValid = new EventEmitter();
    addressForm: FormGroup = null;
    mapButtonText = '';
    mapButtonVariation = '';
    unsubscribe$: Subject<void> = new Subject();

    constructor(public route: ActivatedRoute,
                public router: Router,
                public userProfileService: UserProfileService,
                public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.addressForm = this.createForm();
        this.addressForm.statusChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(status => {
                this.updateVariation();
                this.isValid.emit(status === 'VALID');
            });
        this.addressForm.valueChanges.pipe(takeUntil(this.unsubscribe$))
            .subscribe(value => {
                this.addressChange.emit(new AddressDTO(
                    this.address.addressId,
                    value.cityId,
                    value.stateId,
                    value.addressText,
                    value.postalCode,
                    value.location ? value.location.lat : null,
                    value.location ? value.location.lng : null,
                    value.receiverName,
                    value.phone,
                    value.unit,
                    value.plaqueNumber
                ));
            });
        this.isValid.emit(this.addressForm.valid);
        this.updateVariation();
    }

    get phone(): AbstractControl {
        return this.addressForm.get('phone');
    }

    get location(): AbstractControl {
        return this.addressForm.get('location');
    }

    get addressText(): AbstractControl {
        return this.addressForm.get('addressText');
    }

    getCityList(stateId: number): CityDTO[] {
        return this.cityList.filter(city => city.stateId === stateId);
    }

    resetForm() {
        this.addressForm.reset();
    }

    private updateVariation() {
        this.mapButtonVariation = 'blue';
        this.mapButtonText = 'مشخص کردن موقعیت بر روی نقشه';
        if (this.isEditForm) {
            this.mapButtonText = 'تغییر موقعیت آدرس';
        }
        if (this.location.pristine && this.location.valid) {
            // return variation;
        } else if (this.getFormValidationErrorsCount() === 1 && this.location.invalid) {
            this.mapButtonVariation = 'red';
            this.mapButtonText = 'مشخص کردن موقعیت بر روی نقشه';
        } else if (this.location.valid) {
            this.mapButtonVariation = 'green';
            this.mapButtonText = 'موقعیت آدرس ثبت شد';
        }
    }

    private getFormValidationErrorsCount(): number {
        let errorCount = 0;
        Object.keys(this.addressForm.controls).forEach(key => {
            const controlErrors: ValidationErrors = this.addressForm.get(key).errors;
            if (controlErrors != null) {
                errorCount += Object.keys(controlErrors).length;
            }
        });
        return errorCount;
    }

    private createForm(): FormGroup {
        let initLocation;
        if (this.address.latitude && this.address.longitude) {
            initLocation = new MapLocation(this.address.latitude, this.address.longitude, 17);
        }
        return this.formBuilder.group({
            receiverName: [this.address.receiverName, [Validators.required]],
            phone: [this.address.receiverPhone, [Validators.required, Validators.pattern('(\\+98|0)?9\\d{9}')]],
            postalCode: [this.address.postalCode, []],
            addressText: [this.address.addressText, [Validators.required, Validators.minLength(5)]],
            unit: [this.address.unit, [Validators.required]],
            plaqueNumber: [this.address.plaqueNumber, [Validators.required]],
            stateId: [this.address.stateId, [Validators.required]],
            cityId: [this.address.cityId, [Validators.required]],
            location: [initLocation, [Validators.required]]
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
