import { FormlyExtension } from '../../services/formly.config';
import { FormlyFieldConfigCache } from '../../components/formly.field.config';
/** @experimental */
export declare class FieldFormExtension implements FormlyExtension {
    onPopulate(field: FormlyFieldConfigCache): void;
    private addFormControl;
}
