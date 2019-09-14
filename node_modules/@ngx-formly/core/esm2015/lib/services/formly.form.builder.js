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
export class FormlyFormBuilder {
    /**
     * @param {?} formlyConfig
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    constructor(formlyConfig, componentFactoryResolver, injector) {
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
    buildForm(formControl, fieldGroup = [], model, options) {
        if (!this.formlyConfig.extensions.core) {
            throw new Error('NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.');
        }
        this._buildForm({ fieldGroup, model, formControl, options: this._setOptions(options) });
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    _buildForm(field) {
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.prePopulate && extension.prePopulate(field)));
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.onPopulate && extension.onPopulate(field)));
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @return {?}
             */
            (f) => this._buildForm(f)));
        }
        this.getExtensions().forEach((/**
         * @param {?} extension
         * @return {?}
         */
        extension => extension.postPopulate && extension.postPopulate(field)));
    }
    /**
     * @private
     * @return {?}
     */
    getExtensions() {
        return Object.keys(this.formlyConfig.extensions).map((/**
         * @param {?} name
         * @return {?}
         */
        name => this.formlyConfig.extensions[name]));
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    _setOptions(options) {
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
            (field) => {
                if (field._componentRefs) {
                    field._componentRefs.forEach((/**
                     * @param {?} ref
                     * @return {?}
                     */
                    ref => ref.changeDetectorRef.markForCheck()));
                }
                if (field.fieldGroup) {
                    field.fieldGroup.forEach((/**
                     * @param {?} f
                     * @return {?}
                     */
                    f => options._markForCheck(f)));
                }
            });
        }
        return options;
    }
}
FormlyFormBuilder.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FormlyFormBuilder.ctorParameters = () => [
    { type: FormlyConfig },
    { type: ComponentFactoryResolver },
    { type: Injector }
];
/** @nocollapse */ FormlyFormBuilder.ngInjectableDef = i0.defineInjectable({ factory: function FormlyFormBuilder_Factory() { return new FormlyFormBuilder(i0.inject(i1.FormlyConfig), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.INJECTOR)); }, token: FormlyFormBuilder, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LmZvcm0uYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybWx5LmZvcm0uYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFHNUMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBQzVCLFlBQ1UsWUFBMEIsRUFDMUIsd0JBQWtELEVBQ2xELFFBQWtCO1FBRmxCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN6QixDQUFDOzs7Ozs7OztJQUVKLFNBQVMsQ0FBQyxXQUFrQyxFQUFFLGFBQWtDLEVBQUUsRUFBRSxLQUFVLEVBQUUsT0FBMEI7UUFDeEgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLDJGQUEyRixDQUFDLENBQUM7U0FDOUc7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUE2QjtRQUM5QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENB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LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtbHlDb25maWcgfSBmcm9tICcuL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcsIEZvcm1seUZvcm1PcHRpb25zLCBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCBGb3JtbHlWYWx1ZUNoYW5nZUV2ZW50LCBGb3JtbHlGb3JtT3B0aW9uc0NhY2hlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZmluZUhpZGRlblByb3AgfSBmcm9tICcuLi91dGlscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRm9ybWx5Rm9ybUJ1aWxkZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvcm1seUNvbmZpZzogRm9ybWx5Q29uZmlnLFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICkge31cblxuICBidWlsZEZvcm0oZm9ybUNvbnRyb2w6IEZvcm1Hcm91cCB8IEZvcm1BcnJheSwgZmllbGRHcm91cDogRm9ybWx5RmllbGRDb25maWdbXSA9IFtdLCBtb2RlbDogYW55LCBvcHRpb25zOiBGb3JtbHlGb3JtT3B0aW9ucykge1xuICAgIGlmICghdGhpcy5mb3JtbHlDb25maWcuZXh0ZW5zaW9ucy5jb3JlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05neEZvcm1seTogbWlzc2luZyBgZm9yUm9vdCgpYCBjYWxsLiB1c2UgYGZvclJvb3QoKWAgd2hlbiByZWdpc3RlcmluZyB0aGUgYEZvcm1seU1vZHVsZWAuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fYnVpbGRGb3JtKHsgZmllbGRHcm91cCwgbW9kZWwsIGZvcm1Db250cm9sLCBvcHRpb25zOiB0aGlzLl9zZXRPcHRpb25zKG9wdGlvbnMpIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRGb3JtKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgdGhpcy5nZXRFeHRlbnNpb25zKCkuZm9yRWFjaChleHRlbnNpb24gPT4gZXh0ZW5zaW9uLnByZVBvcHVsYXRlICYmIGV4dGVuc2lvbi5wcmVQb3B1bGF0ZShmaWVsZCkpO1xuICAgIHRoaXMuZ2V0RXh0ZW5zaW9ucygpLmZvckVhY2goZXh0ZW5zaW9uID0+IGV4dGVuc2lvbi5vblBvcHVsYXRlICYmIGV4dGVuc2lvbi5vblBvcHVsYXRlKGZpZWxkKSk7XG5cbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKChmKSA9PiB0aGlzLl9idWlsZEZvcm0oZikpO1xuICAgIH1cblxuICAgIHRoaXMuZ2V0RXh0ZW5zaW9ucygpLmZvckVhY2goZXh0ZW5zaW9uID0+IGV4dGVuc2lvbi5wb3N0UG9wdWxhdGUgJiYgZXh0ZW5zaW9uLnBvc3RQb3B1bGF0ZShmaWVsZCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFeHRlbnNpb25zKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmZvcm1seUNvbmZpZy5leHRlbnNpb25zKS5tYXAobmFtZSA9PiB0aGlzLmZvcm1seUNvbmZpZy5leHRlbnNpb25zW25hbWVdKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMob3B0aW9uczogRm9ybWx5Rm9ybU9wdGlvbnNDYWNoZSkge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZm9ybVN0YXRlID0gb3B0aW9ucy5mb3JtU3RhdGUgfHwge307XG5cbiAgICBpZiAoIW9wdGlvbnMuc2hvd0Vycm9yKSB7XG4gICAgICBvcHRpb25zLnNob3dFcnJvciA9IHRoaXMuZm9ybWx5Q29uZmlnLmV4dHJhcy5zaG93RXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLmZpZWxkQ2hhbmdlcykge1xuICAgICAgZGVmaW5lSGlkZGVuUHJvcChvcHRpb25zLCAnZmllbGRDaGFuZ2VzJywgbmV3IFN1YmplY3Q8Rm9ybWx5VmFsdWVDaGFuZ2VFdmVudD4oKSk7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcbiAgICAgIGRlZmluZUhpZGRlblByb3Aob3B0aW9ucywgJ19jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXInLCB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcik7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLl9pbmplY3Rvcikge1xuICAgICAgZGVmaW5lSGlkZGVuUHJvcChvcHRpb25zLCAnX2luamVjdG9yJywgdGhpcy5pbmplY3Rvcik7XG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25zLl9tYXJrRm9yQ2hlY2spIHtcbiAgICAgIG9wdGlvbnMuX21hcmtGb3JDaGVjayA9IChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQuX2NvbXBvbmVudFJlZnMpIHtcbiAgICAgICAgICBmaWVsZC5fY29tcG9uZW50UmVmcy5mb3JFYWNoKHJlZiA9PiByZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkR3JvdXApIHtcbiAgICAgICAgICBmaWVsZC5maWVsZEdyb3VwLmZvckVhY2goZiA9PiBvcHRpb25zLl9tYXJrRm9yQ2hlY2soZikpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG4iXX0=