/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormlyConfig } from '../services/formly.config';
import { isObject } from '../utils';
var FormlyValidationMessage = /** @class */ (function () {
    function FormlyValidationMessage(formlyConfig) {
        this.formlyConfig = formlyConfig;
    }
    Object.defineProperty(FormlyValidationMessage.prototype, "errorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var fieldForm = this.field.formControl;
            for (var error in fieldForm.errors) {
                if (fieldForm.errors.hasOwnProperty(error)) {
                    /** @type {?} */
                    var message = this.formlyConfig.getValidatorMessage(error);
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
        },
        enumerable: true,
        configurable: true
    });
    FormlyValidationMessage.decorators = [
        { type: Component, args: [{
                    selector: 'formly-validation-message',
                    template: "{{ errorMessage }}"
                }] }
    ];
    /** @nocollapse */
    FormlyValidationMessage.ctorParameters = function () { return [
        { type: FormlyConfig }
    ]; };
    FormlyValidationMessage.propDecorators = {
        field: [{ type: Input }]
    };
    return FormlyValidationMessage;
}());
export { FormlyValidationMessage };
if (false) {
    /** @type {?} */
    FormlyValidationMessage.prototype.field;
    /**
     * @type {?}
     * @private
     */
    FormlyValidationMessage.prototype.formlyConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LnZhbGlkYXRpb24tbWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2Zvcm1seS52YWxpZGF0aW9uLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDO0lBT0UsaUNBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUcsQ0FBQztJQUVsRCxzQkFBSSxpREFBWTs7OztRQUFoQjs7Z0JBQ1EsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QyxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7O3dCQUN0QyxPQUFPLEdBQXNCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO29CQUU3RSxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ3JDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUU7NEJBQ3JDLE9BQU87eUJBQ1I7d0JBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTs0QkFDbkMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO3lCQUMzQztxQkFDRjtvQkFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pEO29CQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFO3dCQUNqRyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO3FCQUNoRDtvQkFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRTt3QkFDaEgsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDckQ7b0JBRUQsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7d0JBQ2pDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNyRDtvQkFFRCxPQUFPLE9BQU8sQ0FBQztpQkFDaEI7YUFDRjtRQUNILENBQUM7OztPQUFBOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQVBRLFlBQVk7Ozt3QkFTbEIsS0FBSzs7SUF3Q1IsOEJBQUM7Q0FBQSxBQTdDRCxJQTZDQztTQXpDWSx1QkFBdUI7OztJQUNsQyx3Q0FBa0M7Ozs7O0lBRXRCLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1seUNvbmZpZyB9IGZyb20gJy4uL3NlcnZpY2VzL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS12YWxpZGF0aW9uLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZTogYHt7IGVycm9yTWVzc2FnZSB9fWAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seVZhbGlkYXRpb25NZXNzYWdlIHtcbiAgQElucHV0KCkgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWx5Q29uZmlnOiBGb3JtbHlDb25maWcpIHt9XG5cbiAgZ2V0IGVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpZWxkRm9ybSA9IHRoaXMuZmllbGQuZm9ybUNvbnRyb2w7XG4gICAgZm9yIChsZXQgZXJyb3IgaW4gZmllbGRGb3JtLmVycm9ycykge1xuICAgICAgaWYgKGZpZWxkRm9ybS5lcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyb3IpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCBGdW5jdGlvbiA9IHRoaXMuZm9ybWx5Q29uZmlnLmdldFZhbGlkYXRvck1lc3NhZ2UoZXJyb3IpO1xuXG4gICAgICAgIGlmIChpc09iamVjdChmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXSkpIHtcbiAgICAgICAgICBpZiAoZmllbGRGb3JtLmVycm9yc1tlcnJvcl0uZXJyb3JQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBmaWVsZEZvcm0uZXJyb3JzW2Vycm9yXS5tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRpb24gJiYgdGhpcy5maWVsZC52YWxpZGF0aW9uLm1lc3NhZ2VzICYmIHRoaXMuZmllbGQudmFsaWRhdGlvbi5tZXNzYWdlc1tlcnJvcl0pIHtcbiAgICAgICAgICBtZXNzYWdlID0gdGhpcy5maWVsZC52YWxpZGF0aW9uLm1lc3NhZ2VzW2Vycm9yXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbGlkYXRvcnMgJiYgdGhpcy5maWVsZC52YWxpZGF0b3JzW2Vycm9yXSAmJiB0aGlzLmZpZWxkLnZhbGlkYXRvcnNbZXJyb3JdLm1lc3NhZ2UpIHtcbiAgICAgICAgICBtZXNzYWdlID0gdGhpcy5maWVsZC52YWxpZGF0b3JzW2Vycm9yXS5tZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzICYmIHRoaXMuZmllbGQuYXN5bmNWYWxpZGF0b3JzW2Vycm9yXSAmJiB0aGlzLmZpZWxkLmFzeW5jVmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLmZpZWxkLmFzeW5jVmFsaWRhdG9yc1tlcnJvcl0ubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBtZXNzYWdlKGZpZWxkRm9ybS5lcnJvcnNbZXJyb3JdLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19