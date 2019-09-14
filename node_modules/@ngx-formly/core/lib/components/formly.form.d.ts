import { DoCheck, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from './formly.field.config';
import { FormlyFormBuilder } from '../services/formly.form.builder';
import { FormlyConfig } from '../services/formly.config';
export declare class FormlyForm implements DoCheck, OnChanges, OnDestroy {
    private formlyBuilder;
    private formlyConfig;
    private parentFormGroup;
    form: FormGroup | FormArray;
    model: any;
    fields: FormlyFieldConfig[];
    options: FormlyFormOptions;
    modelChange: EventEmitter<any>;
    private immutable;
    private _model;
    private _fields;
    private _options;
    private initialModel;
    private modelChangeSubs;
    private enableCheckExprDebounce;
    private checkExpressionChange$;
    constructor(formlyBuilder: FormlyFormBuilder, formlyConfig: FormlyConfig, immutable: any, parentFormGroup: FormGroupDirective);
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    changeModel(event: {
        key: string;
        value: any;
    }): void;
    setOptions(): void;
    private checkExpressionChange;
    private trackModelChanges;
    private clearModelSubscriptions;
}
