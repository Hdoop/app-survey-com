/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormlyConfig } from '../services/formly.config';
import { isObject } from '../utils';
export class FormlyValidationMessage {
    /**
     * @param {?} formlyConfig
     */
    constructor(formlyConfig) {
        this.formlyConfig = formlyConfig;
    }
    /**
     * @return {?}
     */
    get errorMessage() {
        /** @type {?} */
        const fieldForm = this.field.formControl;
        for (let error in fieldForm.errors) {
            if (fieldForm.errors.hasOwnProperty(error)) {
                /** @type {?} */
                let message = this.formlyConfig.getValidatorMessage(error);
                if (isObject(fieldForm.errors[error])) {
                    if (fieldForm.errors[error].errorPath) {
                        return;
                    }
                    if (fieldForm.errors[error].message) {
                        message = fieldForm.errors[error].message;
                    }
                }
                if (this.field.validation && this.field.validation.messages && this.field.validation.messages[error]) {
                    message = this.field.validation.messages[error];
                }
                if (this.field.validators && this.field.validators[error] && this.field.validators[error].message) {
                    message = this.field.validators[error].message;
                }
                if (this.field.asyncValidators && this.field.asyncValidators[error] && this.field.asyncValidators[error].message) {
                    message = this.field.asyncValidators[error].message;
                }
                if (typeof message === 'function') {
                    return message(fieldForm.errors[error], this.field);
                }
                return message;
            }
        }
    }
}
FormlyValidationMessage.decorators = [
    { type: Component, args: [{
                selector: 'formly-validation-message',
                template: `{{ errorMessage }}`
            }] }
];
/** @nocollapse */
FormlyValidationMessage.ctorParameters = () => [
    { type: FormlyConfig }
];
FormlyValidationMessage.propDecorators = {
    field: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FormlyValidationMessage.prototype.field;
    /**
     * @type {?}
     * @private
     */
    FormlyValidationMessage.prototype.formlyConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LnZhbGlkYXRpb24tbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2Zvcm1seS52YWxpZGF0aW9uLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTXBDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFHbEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDOzs7O0lBRWxELElBQUksWUFBWTs7Y0FDUixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1FBQ3hDLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFOztvQkFDdEMsT0FBTyxHQUFzQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztnQkFFN0UsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFO3dCQUNyQyxPQUFPO3FCQUNSO29CQUVELElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ25DLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDM0M7aUJBQ0Y7Z0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqRDtnQkFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDakcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDaEQ7Z0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hILE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ3JEO2dCQUVELElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO29CQUNqQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRjtJQUNILENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjs7OztZQVBRLFlBQVk7OztvQkFTbEIsS0FBSzs7OztJQUFOLHdDQUFrQzs7Ozs7SUFFdEIsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5Q29uZmlnIH0gZnJvbSAnLi4vc2VydmljZXMvZm9ybWx5LmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybWx5LmZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LXZhbGlkYXRpb24tbWVzc2FnZScsXG4gIHRlbXBsYXRlOiBge3sgZXJyb3JNZXNzYWdlIH19YCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2Uge1xuICBASW5wdXQoKSBmaWVsZDogRm9ybWx5RmllbGRDb25maWc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtbHlDb25maWc6IEZvcm1seUNvbmZpZykge31cblxuICBnZXQgZXJyb3JNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZmllbGRGb3JtID0gdGhpcy5maWVsZC5mb3JtQ29udHJvbDtcbiAgICBmb3IgKGxldCBlcnJvciBpbiBmaWVsZEZvcm0uZXJyb3JzKSB7XG4gICAgICBpZiAoZmllbGRGb3JtLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShlcnJvcikpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IEZ1bmN0aW9uID0gdGhpcy5mb3JtbHlDb25maWcuZ2V0VmFsaWRhdG9yTWVzc2FnZShlcnJvcik7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdKSkge1xuICAgICAgICAgIGlmIChmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXS5lcnJvclBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZmllbGRGb3JtLmVycm9yc1tlcnJvcl0ubWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLm1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdGlvbiAmJiB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWVzc2FnZXMgJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1lc3NhZ2VzW2Vycm9yXSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmZpZWxkLnZhbGlkYXRpb24ubWVzc2FnZXNbZXJyb3JdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRhdG9ycyAmJiB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdICYmIHRoaXMuZmllbGQudmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdLm1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5maWVsZC5hc3luY1ZhbGlkYXRvcnMgJiYgdGhpcy5maWVsZC5hc3luY1ZhbGlkYXRvcnNbZXJyb3JdICYmIHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzW2Vycm9yXS5tZXNzYWdlKSB7XG4gICAgICAgICAgbWVzc2FnZSA9IHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzW2Vycm9yXS5tZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIG1lc3NhZ2UoZmllbGRGb3JtLmVycm9yc1tlcnJvcl0sIHRoaXMuZmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=