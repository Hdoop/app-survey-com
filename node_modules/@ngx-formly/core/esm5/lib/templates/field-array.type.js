/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Optional } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FieldType } from './field.type';
import { clone, isNullOrUndefined } from '../utils';
import { FormlyFormBuilder } from '../services/formly.form.builder';
import { FORMLY_CONFIG } from '../services/formly.config';
import { registerControl } from '../extensions/field-form/utils';
/**
 * @abstract
 * @template F
 */
var FieldArrayType = /** @class */ (function (_super) {
    tslib_1.__extends(FieldArrayType, _super);
    function FieldArrayType(builder) {
        var _this = _super.call(this) || this;
        _this.defaultOptions = {
            defaultValue: [],
        };
        if (builder instanceof FormlyFormBuilder) {
            console.warn("NgxFormly: passing 'FormlyFormBuilder' to '" + _this.constructor.name + "' type is not required anymore, you may remove it!");
        }
        return _this;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldArrayType.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        field.fieldGroup = field.fieldGroup || [];
        if (field.fieldGroup.length > field.model.length) {
            for (var i = field.fieldGroup.length; i >= field.model.length; --i) {
                ((/** @type {?} */ (field.formControl))).removeAt(i);
                field.fieldGroup.splice(i, 1);
            }
        }
        for (var i = field.fieldGroup.length; i < field.model.length; i++) {
            /** @type {?} */
            var f = tslib_1.__assign({}, clone(field.fieldArray), { key: "" + i });
            field.fieldGroup.push(f);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldArrayType.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.formControl) {
            return;
        }
        registerControl(field, new FormArray(field.fieldGroup.map((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.formControl; })), {
            validators: field._validators,
            asyncValidators: field._asyncValidators,
            updateOn: field.modelOptions.updateOn,
        }));
    };
    /**
     * @param {?=} i
     * @param {?=} initialModel
     * @return {?}
     */
    FieldArrayType.prototype.add = /**
     * @param {?=} i
     * @param {?=} initialModel
     * @return {?}
     */
    function (i, initialModel) {
        i = isNullOrUndefined(i) ? this.field.fieldGroup.length : i;
        this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);
        ((/** @type {?} */ (this.options)))._buildForm(true);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    FieldArrayType.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.model.splice(i, 1);
        this.formControl.removeAt(i);
        this.field.fieldGroup.splice(i, 1);
        this.field.fieldGroup.forEach((/**
         * @param {?} f
         * @param {?} key
         * @return {?}
         */
        function (f, key) { return f.key = "" + key; }));
        ((/** @type {?} */ (this.options)))._buildForm(true);
    };
    /** @nocollapse */
    FieldArrayType.ctorParameters = function () { return [
        { type: FormlyFormBuilder, decorators: [{ type: Inject, args: [FORMLY_CONFIG,] }, { type: Optional }] }
    ]; };
    return FieldArrayType;
}(FieldType));
export { FieldArrayType };
if (false) {
    /** @type {?} */
    FieldArrayType.prototype.formControl;
    /** @type {?} */
    FieldArrayType.prototype.defaultOptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtYXJyYXkudHlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGVzL2ZpZWxkLWFycmF5LnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQW1CLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQUVqRTtJQUE4RiwwQ0FBWTtJQU14Ryx3QkFBK0MsT0FBMkI7UUFBMUUsWUFDRSxpQkFBTyxTQUtSO1FBVkQsb0JBQWMsR0FBUTtZQUNwQixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDO1FBS0EsSUFBSSxPQUFPLFlBQVksaUJBQWlCLEVBQUU7WUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBOEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLHVEQUFvRCxDQUFDLENBQUM7U0FDdkk7O0lBQ0gsQ0FBQzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsS0FBd0I7UUFDakMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hELEtBQUssSUFBSSxDQUFDLEdBQUcsS0FB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bmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkLnR5cGUnO1xuaW1wb3J0IHsgY2xvbmUsIGlzTnVsbE9yVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybWx5Rm9ybUJ1aWxkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtbHkuZm9ybS5idWlsZGVyJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZPUk1MWV9DT05GSUcsIEZvcm1seUV4dGVuc2lvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgcmVnaXN0ZXJDb250cm9sIH0gZnJvbSAnLi4vZXh0ZW5zaW9ucy9maWVsZC1mb3JtL3V0aWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZWxkQXJyYXlUeXBlPEYgZXh0ZW5kcyBGb3JtbHlGaWVsZENvbmZpZyA9IEZvcm1seUZpZWxkQ29uZmlnPiBleHRlbmRzIEZpZWxkVHlwZTxGPiBpbXBsZW1lbnRzIEZvcm1seUV4dGVuc2lvbiB7XG4gIGZvcm1Db250cm9sOiBGb3JtQXJyYXk7XG4gIGRlZmF1bHRPcHRpb25zOiBhbnkgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEZPUk1MWV9DT05GSUcpIEBPcHRpb25hbCgpIGJ1aWxkZXI/OiBGb3JtbHlGb3JtQnVpbGRlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoYnVpbGRlciBpbnN0YW5jZW9mIEZvcm1seUZvcm1CdWlsZGVyKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5neEZvcm1seTogcGFzc2luZyAnRm9ybWx5Rm9ybUJ1aWxkZXInIHRvICcke3RoaXMuY29uc3RydWN0b3IubmFtZX0nIHR5cGUgaXMgbm90IHJlcXVpcmVkIGFueW1vcmUsIHlvdSBtYXkgcmVtb3ZlIGl0IWApO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gICAgZmllbGQuZmllbGRHcm91cCA9IGZpZWxkLmZpZWxkR3JvdXAgfHwgW107XG4gICAgaWYgKGZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoID4gZmllbGQubW9kZWwubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gZmllbGQuZmllbGRHcm91cC5sZW5ndGg7IGkgPj0gZmllbGQubW9kZWwubGVuZ3RoOyAtLWkpIHtcbiAgICAgICAgKGZpZWxkLmZvcm1Db250cm9sIGFzIEZvcm1BcnJheSkucmVtb3ZlQXQoaSk7XG4gICAgICAgIGZpZWxkLmZpZWxkR3JvdXAuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBmaWVsZC5maWVsZEdyb3VwLmxlbmd0aDsgaSA8IGZpZWxkLm1vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmID0geyAuLi5jbG9uZShmaWVsZC5maWVsZEFycmF5KSwga2V5OiBgJHtpfWAgfTtcbiAgICAgIGZpZWxkLmZpZWxkR3JvdXAucHVzaChmKTtcbiAgICB9XG4gIH1cblxuICBwb3N0UG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBpZiAoZmllbGQuZm9ybUNvbnRyb2wpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbnRyb2woZmllbGQsIG5ldyBGb3JtQXJyYXkoXG4gICAgICBmaWVsZC5maWVsZEdyb3VwLm1hcChmID0+IGYuZm9ybUNvbnRyb2wpLFxuICAgICAge1xuICAgICAgICB2YWxpZGF0b3JzOiBmaWVsZC5fdmFsaWRhdG9ycyxcbiAgICAgICAgYXN5bmNWYWxpZGF0b3JzOiBmaWVsZC5fYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICB1cGRhdGVPbjogZmllbGQubW9kZWxPcHRpb25zLnVwZGF0ZU9uLFxuICAgICAgfSxcbiAgICApKTtcbiAgfVxuXG4gIGFkZChpPzogbnVtYmVyLCBpbml0aWFsTW9kZWw/OiBhbnkpIHtcbiAgICBpID0gaXNOdWxsT3JVbmRlZmluZWQoaSkgPyB0aGlzLmZpZWxkLmZpZWxkR3JvdXAubGVuZ3RoIDogaTtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpLCAwLCBpbml0aWFsTW9kZWwgPyBjbG9uZShpbml0aWFsTW9kZWwpIDogdW5kZWZpbmVkKTtcblxuICAgICg8YW55PiB0aGlzLm9wdGlvbnMpLl9idWlsZEZvcm0odHJ1ZSk7XG4gIH1cblxuICByZW1vdmUoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5yZW1vdmVBdChpKTtcbiAgICB0aGlzLmZpZWxkLmZpZWxkR3JvdXAuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKChmLCBrZXkpID0+IGYua2V5ID0gYCR7a2V5fWApO1xuXG4gICAgKDxhbnk+IHRoaXMub3B0aW9ucykuX2J1aWxkRm9ybSh0cnVlKTtcbiAgfVxufVxuIl19