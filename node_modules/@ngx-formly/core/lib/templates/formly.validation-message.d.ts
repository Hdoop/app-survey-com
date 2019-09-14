import { FormlyConfig } from '../services/formly.config';
import { FormlyFieldConfig } from '../components/formly.field.config';
export declare class FormlyValidationMessage {
    private formlyConfig;
    field: FormlyFieldConfig;
    constructor(formlyConfig: FormlyConfig);
    readonly errorMessage: string;
}
