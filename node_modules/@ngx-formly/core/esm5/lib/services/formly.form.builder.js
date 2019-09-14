/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import { FormlyConfig } from './formly.config';
import { Subject } from 'rxjs';
import { defineHiddenProp } from '../utils';
import * as i0 from "@angular/core";
import * as i1 from "./formly.config";
var FormlyFormBuilder = /** @class */ (function () {
    function FormlyFormBuilder(formlyConfig, componentFactoryResolver, injector) {
        this.formlyConfig = formlyConfig;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * @param {?} formControl
     * @param {?=} fieldGroup
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    FormlyFormBuilder.prototype.buildForm = /**
     * @param {?} formControl
     * @param {?=} fieldGroup
     * @param {?=} model
     * @param {?=} options
     * @return {?}
     */
    function (formControl, fieldGroup, model, options) {
        if (fieldGroup === void 0) { fieldGroup = []; }
        if (!this.formlyConfig.extensions.core) {
            throw new Error('NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.');
        }
        this._buildForm({ fieldGroup: fieldGroup, model: model, formControl: formControl, options: this._setOptions(options) });
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FormlyFormBuilder.prototype._buildForm = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.prePopulate && extension.prePopulate(field); }));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.onPopulate && extension.onPopulate(field); }));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this._buildForm(f); }));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        function (extension) { return extension.postPopulate && extension.postPopulate(field); }));
    };
    /**
     * @private
     * @return {?}
     */
    FormlyFormBuilder.prototype.getExtensions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return Object.keys(this.formlyConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        function (name) { return _this.formlyConfig.extensions[name]; }));
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    FormlyFormBuilder.prototype._setOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        options = options || {};
        options.formState = options.formState || {};
        if (!options.showError) {
            options.showError = this.formlyConfig.extras.showError;
        }
        if (!options.fieldChanges) {
            defineHiddenProp(options, 'fieldChanges', new Subject());
        }
        if (!options._componentFactoryResolver) {
            defineHiddenProp(options, '_componentFactoryResolver', this.componentFactoryResolver);
        }
        if (!options._injector) {
            defineHiddenProp(options, '_injector', this.injector);
        }
        if (!options._markForCheck) {
            options._markForCheck = (/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    function (ref) { return ref.changeDetectorRef.markForCheck(); }));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    function (f) { return options._markForCheck(f); }));
                }
            });
        }
        return options;
    };
    FormlyFormBuilder.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FormlyFormBuilder.ctorParameters = function () { return [
        { type: FormlyConfig },
        { type: ComponentFactoryResolver },
        { type: Injector }
    ]; };
    /** @nocollapse */ FormlyFormBuilder.ngInjectableDef = i0.defineInjectable({ factory: function FormlyFormBuilder_Factory() { return new FormlyFormBuilder(i0.inject(i1.FormlyConfig), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.INJECTOR)); }, token: FormlyFormBuilder, providedIn: "root" });
    return FormlyFormBuilder;
}());
export { FormlyFormBuilder };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormlyFormBuilder.prototype.formlyConfig;
    /**
     * @type {?}
     * @private
     */
    FormlyFormBuilder.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    FormlyFormBuilder.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LmZvcm0uYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybWx5LmZvcm0uYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFNUM7SUFFRSwyQkFDVSxZQUEwQixFQUMxQix3QkFBa0QsRUFDbEQsUUFBa0I7UUFGbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBRUoscUNBQVM7Ozs7Ozs7SUFBVCxVQUFVLFdBQWtDLEVBQUUsVUFBb0MsRUFBRSxLQUFVLEVBQUUsT0FBMEI7UUFBNUUsMkJBQUEsRUFBQSxlQUFvQztRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkZBQTJGLENBQUMsQ0FBQztTQUM5RztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7O0lBRU8sc0NBQVU7Ozs7O0lBQWxCLFVBQW1CLEtBQTZCO1FBQWhELGlCQVNDO1FBUkMsSUFBSSxDQUFD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QixZQUFZO2dCQUZBLHdCQUF3QjtnQkFBRSxRQUFROzs7NEJBQXZEO0NBd0VDLEFBakVELElBaUVDO1NBaEVZLGlCQUFpQjs7Ozs7O0lBRTFCLHlDQUFrQzs7Ozs7SUFDbEMscURBQTBEOzs7OztJQUMxRCxxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seUNvbmZpZyB9IGZyb20gJy4vZm9ybWx5LmNvbmZpZyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENvbmZpZywgRm9ybWx5Rm9ybU9wdGlvbnMsIEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIEZvcm1seVZhbHVlQ2hhbmdlRXZlbnQsIEZvcm1seUZvcm1PcHRpb25zQ2FjaGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVmaW5lSGlkZGVuUHJvcCB9IGZyb20gJy4uL3V0aWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlGb3JtQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZm9ybWx5Q29uZmlnOiBGb3JtbHlDb25maWcsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgKSB7fVxuXG4gIGJ1aWxkRm9ybShmb3JtQ29udHJvbDogRm9ybUdyb3VwIHwgRm9ybUFycmF5LCBmaWVsZEdyb3VwOiBGb3JtbHlGaWVsZENvbmZpZ1tdID0gW10sIG1vZGVsOiBhbnksIG9wdGlvbnM6IEZvcm1seUZvcm1PcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmZvcm1seUNvbmZpZy5leHRlbnNpb25zLmNvcmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmd4Rm9ybWx5OiBtaXNzaW5nIGBmb3JSb290KClgIGNhbGwuIHVzZSBgZm9yUm9vdCgpYCB3aGVuIHJlZ2lzdGVyaW5nIHRoZSBgRm9ybWx5TW9kdWxlYC4nKTtcbiAgICB9XG5cbiAgICB0aGlzLl9idWlsZEZvcm0oeyBmaWVsZEdyb3VwLCBtb2RlbCwgZm9ybUNvbnRyb2wsIG9wdGlvbnM6IHRoaXMuX3NldE9wdGlvbnMob3B0aW9ucykgfSk7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZEZvcm0oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICB0aGlzLmdldEV4dGVuc2lvbnMoKS5mb3JFYWNoKGV4dGVuc2lvbiA9PiBleHRlbnNpb24ucHJlUG9wdWxhdGUgJiYgZXh0ZW5zaW9uLnByZVBvcHVsYXRlKGZpZWxkKSk7XG4gICAgdGhpcy5nZXRFeHRlbnNpb25zKCkuZm9yRWFjaChleHRlbnNpb24gPT4gZXh0ZW5zaW9uLm9uUG9wdWxhdGUgJiYgZXh0ZW5zaW9uLm9uUG9wdWxhdGUoZmllbGQpKTtcblxuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XG4gICAgICBmaWVsZC5maWVsZEdyb3VwLmZvckVhY2goKGYpID0+IHRoaXMuX2J1aWxkRm9ybShmKSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRFeHRlbnNpb25zKCkuZm9yRWFjaChleHRlbnNpb24gPT4gZXh0ZW5zaW9uLnBvc3RQb3B1bGF0ZSAmJiBleHRlbnNpb24ucG9zdFBvcHVsYXRlKGZpZWxkKSk7XG4gIH1cblxuICBwcml2YXRlIGdldEV4dGVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZm9ybWx5Q29uZmlnLmV4dGVuc2lvbnMpLm1hcChuYW1lID0+IHRoaXMuZm9ybWx5Q29uZmlnLmV4dGVuc2lvbnNbbmFtZV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucyhvcHRpb25zOiBGb3JtbHlGb3JtT3B0aW9uc0NhY2hlKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5mb3JtU3RhdGUgPSBvcHRpb25zLmZvcm1TdGF0ZSB8fCB7fTtcblxuICAgIGlmICghb3B0aW9ucy5zaG93RXJyb3IpIHtcbiAgICAgIG9wdGlvbnMuc2hvd0Vycm9yID0gdGhpcy5mb3JtbHlDb25maWcuZXh0cmFzLnNob3dFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuZmllbGRDaGFuZ2VzKSB7XG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKG9wdGlvbnMsICdmaWVsZENoYW5nZXMnLCBuZXcgU3ViamVjdDxGb3JtbHlWYWx1ZUNoYW5nZUV2ZW50PigpKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuICAgICAgZGVmaW5lSGlkZGVuUHJvcChvcHRpb25zLCAnX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcicsIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuX2luamVjdG9yKSB7XG4gICAgICBkZWZpbmVIaWRkZW5Qcm9wKG9wdGlvbnMsICdfaW5qZWN0b3InLCB0aGlzLmluamVjdG9yKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMuX21hcmtGb3JDaGVjaykge1xuICAgICAgb3B0aW9ucy5fbWFya0ZvckNoZWNrID0gKGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZC5fY29tcG9uZW50UmVmcykge1xuICAgICAgICAgIGZpZWxkLl9jb21wb25lbnRSZWZzLmZvckVhY2gocmVmID0+IHJlZi5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IG9wdGlvbnMuX21hcmtGb3JDaGVjayhmKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cbn1cbiJdfQ==