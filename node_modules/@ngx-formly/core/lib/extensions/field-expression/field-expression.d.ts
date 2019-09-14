import { FormlyFieldConfigCache } from '../../components/formly.field.config';
import { FormlyExtension } from '../../services/formly.config';
/** @experimental */
export declare class FieldExpressionExtension implements FormlyExtension {
    prePopulate(field: FormlyFieldConfigCache): void;
    onPopulate(field: FormlyFieldConfigCache): void;
    postPopulate(field: FormlyFieldConfigCache): void;
    private _evalExpression;
    private _checkField;
    private checkFieldExpressionChange;
    private checkFieldVisibilityChange;
    private toggleFormControl;
}
