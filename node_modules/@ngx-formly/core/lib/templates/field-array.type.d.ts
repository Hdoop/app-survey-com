import { FormArray } from '@angular/forms';
import { FieldType } from './field.type';
import { FormlyFormBuilder } from '../services/formly.form.builder';
import { FormlyFieldConfig, FormlyFieldConfigCache } from '../components/formly.field.config';
import { FormlyExtension } from '../services/formly.config';
export declare abstract class FieldArrayType<F extends FormlyFieldConfig = FormlyFieldConfig> extends FieldType<F> implements FormlyExtension {
    formControl: FormArray;
    defaultOptions: any;
    constructor(builder?: FormlyFormBuilder);
    onPopulate(field: FormlyFieldConfig): void;
    postPopulate(field: FormlyFieldConfigCache): void;
    add(i?: number, initialModel?: any): void;
    remove(i: number): void;
}
