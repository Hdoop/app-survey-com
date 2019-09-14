/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Validators } from '@angular/forms';
import { isObject, FORMLY_VALIDATORS, defineHiddenProp, isUndefined, isPromise } from '../../utils';
/**
 * \@experimental
 */
var /**
 * \@experimental
 */
FieldValidationExtension = /** @class */ (function () {
    function FieldValidationExtension(formlyConfig) {
        this.formlyConfig = formlyConfig;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldValidationExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!field.parent || !field.key) {
            return;
        }
        this.initFieldValidation(field, 'validators');
        this.initFieldValidation(field, 'asyncValidators');
    };
    /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    FieldValidationExtension.prototype.initFieldValidation = /**
     * @private
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        var _this = this;
        if (!isUndefined(field['_' + type])) {
            // Avoid overriding existing validators defined through directive (https://github.com/ngx-formly/ngx-formly/issues/1578)
            if (field.formControl) {
                /** @type {?} */
                var validator = type === 'validators' ? field.formControl.validator : field.formControl.asyncValidator;
                if (field['_' + type] !== validator) {
                    field['_' + type] = validator;
                }
            }
            return;
        }
        /** @type {?} */
        var validators = type === 'validators' ? this.getPredefinedFieldValidation(field) : [];
        if (field[type]) {
            for (var validatorName in field[type]) {
                if (validatorName === 'validation' && !Array.isArray(field[type].validation)) {
                    field[type].validation = [field[type].validation];
                    console.warn("NgxFormly(" + field.key + "): passing a non array value to the 'validation' is deprecated, pass an array instead");
                }
                validatorName === 'validation'
                    ? validators.push.apply(validators, tslib_1.__spread(field[type].validation.map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return _this.wrapNgValidatorFn(field, v); })))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
            }
        }
        defineHiddenProp(field, '_' + type, type === 'validators' ? Validators.compose(validators) : Validators.composeAsync((/** @type {?} */ (validators))));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldValidationExtension.prototype.getPredefinedFieldValidation = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return FORMLY_VALIDATORS
            .filter((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) { return (field.templateOptions && field.templateOptions.hasOwnProperty(opt)) || (field.expressionProperties && field.expressionProperties["templateOptions." + opt]); }))
            .map((/**
         * @param {?} opt
         * @return {?}
         */
        function (opt) { return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var value = field.templateOptions[opt];
            if (value === false) {
                return null;
            }
            switch (opt) {
                case 'required':
                    return Validators.required(control);
                case 'pattern':
                    return Validators.pattern(value)(control);
                case 'minLength':
                    return Validators.minLength(value)(control);
                case 'maxLength':
                    return Validators.maxLength(value)(control);
                case 'min':
                    return Validators.min(value)(control);
                case 'max':
                    return Validators.max(value)(control);
            }
        }); }));
    };
    /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    FieldValidationExtension.prototype.wrapNgValidatorFn = /**
     * @private
     * @param {?} field
     * @param {?} validator
     * @param {?=} validatorName
     * @return {?}
     */
    function (field, validator, validatorName) {
        var _this = this;
        return (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var validatorFn = (/** @type {?} */ (validator));
            if (typeof validator === 'string') {
                validatorFn = _this.formlyConfig.getValidator(validator).validation;
            }
            if (isObject(validator)) {
                validatorFn = ((/** @type {?} */ (validator))).expression;
            }
            /** @type {?} */
            var isValid = validatorFn(control, field);
            if (validatorName) {
                if (isPromise(isValid)) {
                    return isValid.then((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        // workaround for https://github.com/angular/angular/issues/13200
                        if (field.options && field.options._markForCheck) {
                            field.options._markForCheck(field);
                        }
                        return _this.handleResult(field, result, { validatorName: validatorName, validator: validator });
                    }));
                }
                return _this.handleResult(field, isValid, { validatorName: validatorName, validator: validator });
            }
            return isValid;
        });
    };
    /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    FieldValidationExtension.prototype.handleResult = /**
     * @private
     * @param {?} field
     * @param {?} isValid
     * @param {?} __2
     * @return {?}
     */
    function (field, isValid, _a) {
        var validatorName = _a.validatorName, validator = _a.validator;
        var _b, _c, _d;
        if (isObject(validator) && field.formControl && validator.errorPath) {
            /** @type {?} */
            var control = field.formControl.get(validator.errorPath);
            if (control) {
                /** @type {?} */
                var controlErrors = (control.errors || {});
                if (!isValid) {
                    control.setErrors(tslib_1.__assign({}, controlErrors, (_b = {}, _b[validatorName] = { message: validator.message }, _b)));
                }
                else {
                    delete controlErrors[validatorName];
                    control.setErrors(Object.keys(controlErrors).length === 0 ? null : controlErrors);
                }
            }
            return isValid ? null : (_c = {}, _c[validatorName] = { errorPath: validator.errorPath }, _c);
        }
        return isValid ? null : (_d = {}, _d[validatorName] = true, _d);
    };
    return FieldValidationExtension;
}());
/**
 * \@experimental
 */
export { FieldValidationExtension };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldValidationExtension.prototype.formlyConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC12YWxpZGF0aW9uL2ZpZWxkLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQW1CLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUdwRzs7OztJQUNFLGtDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFHLENBQUM7Ozs7O0lBRWxELDZDQUFVOzs7O0lBQVYsVUFBVyxLQUE2QjtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7OztJQUVPLHNEQUFtQjs7Ozs7O0lBQTNCLFVBQTRCLEtBQTZCLEVBQUUsSUFBc0M7UUFBakcsaUJBaUNDO1FBaENDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ25DLHdIQUF3SDtZQUN4SCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7O29CQUNmLFNBQVMsR0FBRyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjO2dCQUN4RyxJQUFJLEtB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QVMsRUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLEtBQUUsQ0FBQztTQUNqRjtRQUVELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFHLEdBQUMsYUFBYSxJQUFHLElBQUksS0FBRSxDQUFDO0lBQ3BELENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF4SEQsSUF3SEM7Ozs7Ozs7Ozs7SUF2SGEsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWx5RXh0ZW5zaW9uLCBGaWVsZFZhbGlkYXRvckZuLCBGb3JtbHlDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtbHkuY29uZmlnJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzT2JqZWN0LCBGT1JNTFlfVkFMSURBVE9SUywgZGVmaW5lSGlkZGVuUHJvcCwgaXNVbmRlZmluZWQsIGlzUHJvbWlzZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqIEBleHBlcmltZW50YWwgKi9cbmV4cG9ydCBjbGFzcyBGaWVsZFZhbGlkYXRpb25FeHRlbnNpb24gaW1wbGVtZW50cyBGb3JtbHlFeHRlbnNpb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1seUNvbmZpZzogRm9ybWx5Q29uZmlnKSB7fVxuXG4gIG9uUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBpZiAoIWZpZWxkLnBhcmVudCB8fCAhZmllbGQua2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbml0RmllbGRWYWxpZGF0aW9uKGZpZWxkLCAndmFsaWRhdG9ycycpO1xuICAgIHRoaXMuaW5pdEZpZWxkVmFsaWRhdGlvbihmaWVsZCwgJ2FzeW5jVmFsaWRhdG9ycycpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmllbGRWYWxpZGF0aW9uKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCB0eXBlOiAndmFsaWRhdG9ycycgfCAnYXN5bmNWYWxpZGF0b3JzJykge1xuICAgIGlmICghaXNVbmRlZmluZWQoZmllbGRbJ18nICsgdHlwZV0pKSB7XG4gICAgICAvLyBBdm9pZCBvdmVycmlkaW5nIGV4aXN0aW5nIHZhbGlkYXRvcnMgZGVmaW5lZCB0aHJvdWdoIGRpcmVjdGl2ZSAoaHR0cHM6Ly9naXRodWIuY29tL25neC1mb3JtbHkvbmd4LWZvcm1seS9pc3N1ZXMvMTU3OClcbiAgICAgIGlmIChmaWVsZC5mb3JtQ29udHJvbCkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0eXBlID09PSAndmFsaWRhdG9ycycgPyBmaWVsZC5mb3JtQ29udHJvbC52YWxpZGF0b3IgOiBmaWVsZC5mb3JtQ29udHJvbC5hc3luY1ZhbGlkYXRvcjtcbiAgICAgICAgaWYgKGZpZWxkWydfJyArIHR5cGVdICE9PSB2YWxpZGF0b3IpIHtcbiAgICAgICAgICBmaWVsZFsnXycgKyB0eXBlXSA9IHZhbGlkYXRvcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IHR5cGUgPT09ICd2YWxpZGF0b3JzJyA/IHRoaXMuZ2V0UHJlZGVmaW5lZEZpZWxkVmFsaWRhdGlvbihmaWVsZCkgOiBbXTtcbiAgICBpZiAoZmllbGRbdHlwZV0pIHtcbiAgICAgIGZvciAoY29uc3QgdmFsaWRhdG9yTmFtZSBpbiBmaWVsZFt0eXBlXSkge1xuICAgICAgICBpZiAodmFsaWRhdG9yTmFtZSA9PT0gJ3ZhbGlkYXRpb24nICYmICFBcnJheS5pc0FycmF5KGZpZWxkW3R5cGVdLnZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgZmllbGRbdHlwZV0udmFsaWRhdGlvbiA9IFtmaWVsZFt0eXBlXS52YWxpZGF0aW9uXTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYE5neEZvcm1seSgke2ZpZWxkLmtleX0pOiBwYXNzaW5nIGEgbm9uIGFycmF5IHZhbHVlIHRvIHRoZSAndmFsaWRhdGlvbicgaXMgZGVwcmVjYXRlZCwgcGFzcyBhbiBhcnJheSBpbnN0ZWFkYCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWxpZGF0b3JOYW1lID09PSAndmFsaWRhdGlvbidcbiAgICAgICAgICA/IHZhbGlkYXRvcnMucHVzaCguLi5maWVsZFt0eXBlXS52YWxpZGF0aW9uLm1hcCh2ID0+IHRoaXMud3JhcE5nVmFsaWRhdG9yRm4oZmllbGQsIHYpKSlcbiAgICAgICAgICA6IHZhbGlkYXRvcnMucHVzaCh0aGlzLndyYXBOZ1ZhbGlkYXRvckZuKGZpZWxkLCBmaWVsZFt0eXBlXVt2YWxpZGF0b3JOYW1lXSwgdmFsaWRhdG9yTmFtZSkpXG4gICAgICAgIDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZpbmVIaWRkZW5Qcm9wKFxuICAgICAgZmllbGQsXG4gICAgICAnXycgKyB0eXBlLFxuICAgICAgdHlwZSA9PT0gJ3ZhbGlkYXRvcnMnID8gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkYXRvcnMpIDogVmFsaWRhdG9ycy5jb21wb3NlQXN5bmModmFsaWRhdG9ycyBhcyBhbnkpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFByZWRlZmluZWRGaWVsZFZhbGlkYXRpb24oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpOiBWYWxpZGF0b3JGbltdIHtcbiAgICByZXR1cm4gRk9STUxZX1ZBTElEQVRPUlNcbiAgICAgIC5maWx0ZXIob3B0ID0+IChmaWVsZC50ZW1wbGF0ZU9wdGlvbnMgJiYgZmllbGQudGVtcGxhdGVPcHRpb25zLmhhc093blByb3BlcnR5KG9wdCkpIHx8IChmaWVsZC5leHByZXNzaW9uUHJvcGVydGllcyAmJiBmaWVsZC5leHByZXNzaW9uUHJvcGVydGllc1tgdGVtcGxhdGVPcHRpb25zLiR7b3B0fWBdKSlcbiAgICAgIC5tYXAoKG9wdCkgPT4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLnRlbXBsYXRlT3B0aW9uc1tvcHRdO1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChvcHQpIHtcbiAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5yZXF1aXJlZChjb250cm9sKTtcbiAgICAgICAgICBjYXNlICdwYXR0ZXJuJzpcbiAgICAgICAgICAgIHJldHVybiBWYWxpZGF0b3JzLnBhdHRlcm4odmFsdWUpKGNvbnRyb2wpO1xuICAgICAgICAgIGNhc2UgJ21pbkxlbmd0aCc6XG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW5MZW5ndGgodmFsdWUpKGNvbnRyb2wpO1xuICAgICAgICAgIGNhc2UgJ21heExlbmd0aCc6XG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXhMZW5ndGgodmFsdWUpKGNvbnRyb2wpO1xuICAgICAgICAgIGNhc2UgJ21pbic6XG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5taW4odmFsdWUpKGNvbnRyb2wpO1xuICAgICAgICAgIGNhc2UgJ21heCc6XG4gICAgICAgICAgICByZXR1cm4gVmFsaWRhdG9ycy5tYXgodmFsdWUpKGNvbnRyb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgd3JhcE5nVmFsaWRhdG9yRm4oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIHZhbGlkYXRvcjogc3RyaW5nIHwgRmllbGRWYWxpZGF0b3JGbiwgdmFsaWRhdG9yTmFtZT86IHN0cmluZykge1xuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICBsZXQgdmFsaWRhdG9yRm4gPSB2YWxpZGF0b3IgYXMgRmllbGRWYWxpZGF0b3JGbjtcbiAgICAgIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YWxpZGF0b3JGbiA9IHRoaXMuZm9ybWx5Q29uZmlnLmdldFZhbGlkYXRvcih2YWxpZGF0b3IpLnZhbGlkYXRpb247XG4gICAgICB9XG4gICAgICBpZiAoaXNPYmplY3QodmFsaWRhdG9yKSkge1xuICAgICAgICB2YWxpZGF0b3JGbiA9ICh2YWxpZGF0b3IgYXMgYW55KS5leHByZXNzaW9uO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdG9yRm4oY29udHJvbCwgZmllbGQpO1xuICAgICAgaWYgKHZhbGlkYXRvck5hbWUpIHtcbiAgICAgICAgaWYgKGlzUHJvbWlzZShpc1ZhbGlkKSkge1xuICAgICAgICAgIHJldHVybiBpc1ZhbGlkLnRoZW4oKHJlc3VsdDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTMyMDBcbiAgICAgICAgICAgIGlmIChmaWVsZC5vcHRpb25zICYmIGZpZWxkLm9wdGlvbnMuX21hcmtGb3JDaGVjaykge1xuICAgICAgICAgICAgICBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2soZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXN1bHQoZmllbGQsIHJlc3VsdCwgeyB2YWxpZGF0b3JOYW1lLCB2YWxpZGF0b3IgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXN1bHQoZmllbGQsIGlzVmFsaWQsIHsgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXN1bHQoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIGlzVmFsaWQsIHsgdmFsaWRhdG9yTmFtZSwgdmFsaWRhdG9yIH0pIHtcbiAgICBpZiAoaXNPYmplY3QodmFsaWRhdG9yKSAmJiBmaWVsZC5mb3JtQ29udHJvbCAmJiB2YWxpZGF0b3IuZXJyb3JQYXRoKSB7XG4gICAgICBjb25zdCBjb250cm9sID0gZmllbGQuZm9ybUNvbnRyb2wuZ2V0KHZhbGlkYXRvci5lcnJvclBhdGgpO1xuICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29uc3QgY29udHJvbEVycm9ycyA9IChjb250cm9sLmVycm9ycyB8fCB7fSk7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKHsgLi4uY29udHJvbEVycm9ycywgW3ZhbGlkYXRvck5hbWVdOiB7IG1lc3NhZ2U6IHZhbGlkYXRvci5tZXNzYWdlIH0gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGNvbnRyb2xFcnJvcnNbdmFsaWRhdG9yTmFtZV07XG4gICAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoT2JqZWN0LmtleXMoY29udHJvbEVycm9ycykubGVuZ3RoID09PSAwID8gbnVsbCA6IGNvbnRyb2xFcnJvcnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgW3ZhbGlkYXRvck5hbWVdOiB7IGVycm9yUGF0aDogdmFsaWRhdG9yLmVycm9yUGF0aCB9IH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogeyBbdmFsaWRhdG9yTmFtZV06IHRydWUgfTtcbiAgfVxufVxuIl19