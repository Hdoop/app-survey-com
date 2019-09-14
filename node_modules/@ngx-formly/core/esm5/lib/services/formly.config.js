/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken } from '@angular/core';
import { reverseDeepMerge, defineHiddenProp } from './../utils';
import * as i0 from "@angular/core";
/** @type {?} */
export var FORMLY_CONFIG = new InjectionToken('FORMLY_CONFIG');
/**
 * \@experimental
 * @record
 */
export function FormlyExtension() { }
if (false) {
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyExtension.prototype.prePopulate = function (field) { };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyExtension.prototype.onPopulate = function (field) { };
    /**
     * @param {?} field
     * @return {?}
     */
    FormlyExtension.prototype.postPopulate = function (field) { };
}
/**
 * Maintains list of formly field directive types. This can be used to register new field templates.
 */
var FormlyConfig = /** @class */ (function () {
    function FormlyConfig() {
        this.types = {};
        this.validators = {};
        this.wrappers = {};
        this.messages = {};
        this.templateManipulators = {
            preWrapper: [],
            postWrapper: [],
        };
        this.extras = {
            checkExpressionOn: 'changeDetectionCheck',
            showError: (/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                return field.formControl && field.formControl.invalid && (field.formControl.touched || (field.options.parentForm && field.options.parentForm.submitted) || (field.field.validation && field.field.validation.show));
            }),
        };
        this.extensions = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    FormlyConfig.prototype.addConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        if (config.types) {
            config.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return _this.setType(type); }));
        }
        if (config.validators) {
            config.validators.forEach((/**
             * @param {?} validator
             * @return {?}
             */
            function (validator) { return _this.setValidator(validator); }));
        }
        if (config.wrappers) {
            config.wrappers.forEach((/**
             * @param {?} wrapper
             * @return {?}
             */
            function (wrapper) { return _this.setWrapper(wrapper); }));
        }
        if (config.manipulators) {
            console.warn("NgxFormly: passing 'manipulators' config is deprecated, use custom extension instead.");
            config.manipulators.forEach((/**
             * @param {?} manipulator
             * @return {?}
             */
            function (manipulator) { return _this.setManipulator(manipulator); }));
        }
        if (config.validationMessages) {
            config.validationMessages.forEach((/**
             * @param {?} validation
             * @return {?}
             */
            function (validation) { return _this.addValidatorMessage(validation.name, validation.message); }));
        }
        if (config.extensions) {
            config.extensions.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return _this.extensions[c.name] = c.extension; }));
        }
        if (config.extras) {
            this.extras = tslib_1.__assign({}, this.extras, config.extras);
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormlyConfig.prototype.setType = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (Array.isArray(options)) {
            options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return _this.setType(option); }));
        }
        else {
            if (!this.types[options.name]) {
                this.types[options.name] = (/** @type {?} */ ({}));
            }
            this.types[options.name].component = options.component;
            this.types[options.name].name = options.name;
            this.types[options.name].extends = options.extends;
            this.types[options.name].defaultOptions = options.defaultOptions;
            if (options.wrappers) {
                options.wrappers.forEach((/**
                 * @param {?} wrapper
                 * @return {?}
                 */
                function (wrapper) { return _this.setTypeWrapper(options.name, wrapper); }));
            }
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.getType = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.types[name]) {
            throw new Error("[Formly Error] There is no type by the name of \"" + name + "\"");
        }
        this.mergeExtendedType(name);
        return this.types[name];
    };
    /**
     * @param {?=} field
     * @return {?}
     */
    FormlyConfig.prototype.getMergedField = /**
     * @param {?=} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (field === void 0) { field = {}; }
        /** @type {?} */
        var type = this.getType(field.type);
        if (type.defaultOptions) {
            reverseDeepMerge(field, type.defaultOptions);
        }
        /** @type {?} */
        var extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
        if (extendDefaults) {
            reverseDeepMerge(field, extendDefaults);
        }
        if (field && field.optionsTypes) {
            field.optionsTypes.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var defaultOptions = _this.getType(option).defaultOptions;
                if (defaultOptions) {
                    reverseDeepMerge(field, defaultOptions);
                }
            }));
        }
        /** @type {?} */
        var componentRef = this.createComponent(field);
        if (componentRef && componentRef.instance && componentRef.instance.defaultOptions) {
            reverseDeepMerge(field, componentRef.instance.defaultOptions);
        }
        if (!field.wrappers && type.wrappers) {
            field.wrappers = tslib_1.__spread(type.wrappers);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?=} field
     * @param {?=} resolver
     * @param {?=} injector
     * @return {?}
     */
    FormlyConfig.prototype.createComponent = /**
     * \@internal
     * @param {?=} field
     * @param {?=} resolver
     * @param {?=} injector
     * @return {?}
     */
    function (field, resolver, injector) {
        if (field === void 0) { field = {}; }
        if (!field.type) {
            return;
        }
        /** @type {?} */
        var cf = field._componentFactory;
        if (cf && field.type === cf.type && (cf.componentRef && cf.componentRef.hostView && !cf.componentRef.hostView.destroyed)) {
            return field._componentFactory.componentRef;
        }
        /** @type {?} */
        var type = this.getType(field.type);
        if (!resolver) {
            resolver = field.parent.options._componentFactoryResolver;
        }
        if (!injector) {
            injector = this.getFieldInjector(field);
        }
        defineHiddenProp(field, '_componentFactory', {
            type: field.type,
            component: type.component,
            componentRef: resolver
                ? resolver.resolveComponentFactory(type.component).create(injector)
                : null,
        });
        return field._componentFactory.componentRef;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormlyConfig.prototype.setWrapper = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        this.wrappers[options.name] = options;
        if (options.types) {
            options.types.forEach((/**
             * @param {?} type
             * @return {?}
             */
            function (type) {
                _this.setTypeWrapper(type, options.name);
            }));
        }
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.getWrapper = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.wrappers[name]) {
            throw new Error("[Formly Error] There is no wrapper by the name of \"" + name + "\"");
        }
        return this.wrappers[name];
    };
    /**
     * @param {?} type
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.setTypeWrapper = /**
     * @param {?} type
     * @param {?} name
     * @return {?}
     */
    function (type, name) {
        if (!this.types[type]) {
            this.types[type] = (/** @type {?} */ ({}));
        }
        if (!this.types[type].wrappers) {
            this.types[type].wrappers = [];
        }
        if (this.types[type].wrappers.indexOf(name) === -1) {
            this.types[type].wrappers.push(name);
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    FormlyConfig.prototype.setValidator = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.validators[options.name] = options;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.getValidator = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.validators[name]) {
            throw new Error("[Formly Error] There is no validator by the name of \"" + name + "\"");
        }
        return this.validators[name];
    };
    /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    FormlyConfig.prototype.addValidatorMessage = /**
     * @param {?} name
     * @param {?} message
     * @return {?}
     */
    function (name, message) {
        this.messages[name] = message;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.getValidatorMessage = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.messages[name];
    };
    /**
     * @param {?} manipulator
     * @return {?}
     */
    FormlyConfig.prototype.setManipulator = /**
     * @param {?} manipulator
     * @return {?}
     */
    function (manipulator) {
        new manipulator.class()[manipulator.method](this);
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    FormlyConfig.prototype.mergeExtendedType = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.types[name].extends) {
            return;
        }
        /** @type {?} */
        var extendedType = this.getType(this.types[name].extends);
        if (!this.types[name].component) {
            this.types[name].component = extendedType.component;
        }
        if (!this.types[name].wrappers) {
            this.types[name].wrappers = extendedType.wrappers;
        }
    };
    /**
     * @private
     * @param {?=} field
     * @return {?}
     */
    FormlyConfig.prototype.getFieldInjector = /**
     * @private
     * @param {?=} field
     * @return {?}
     */
    function (field) {
        if (field === void 0) { field = {}; }
        /** @type {?} */
        var parent = field.parent;
        if (parent._componentFactory && parent._componentFactory.componentRef) {
            return parent._componentFactory.componentRef.injector;
        }
        return parent.options._injector;
    };
    FormlyConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FormlyConfig.ngInjectableDef = i0.defineInjectable({ factory: function FormlyConfig_Factory() { return new FormlyConfig(); }, token: FormlyConfig, providedIn: "root" });
    return FormlyConfig;
}());
export { FormlyConfig };
if (false) {
    /** @type {?} */
    FormlyConfig.prototype.types;
    /** @type {?} */
    FormlyConfig.prototype.validators;
    /** @type {?} */
    FormlyConfig.prototype.wrappers;
    /** @type {?} */
    FormlyConfig.prototype.messages;
    /** @type {?} */
    FormlyConfig.prototype.templateManipulators;
    /** @type {?} */
    FormlyConfig.prototype.extras;
    /** @type {?} */
    FormlyConfig.prototype.extensions;
}
/**
 * @record
 */
export function TypeOption() { }
if (false) {
    /** @type {?} */
    TypeOption.prototype.name;
    /** @type {?|undefined} */
    TypeOption.prototype.component;
    /** @type {?|undefined} */
    TypeOption.prototype.wrappers;
    /** @type {?|undefined} */
    TypeOption.prototype.extends;
    /** @type {?|undefined} */
    TypeOption.prototype.defaultOptions;
}
/**
 * @record
 */
export function WrapperOption() { }
if (false) {
    /** @type {?} */
    WrapperOption.prototype.name;
    /** @type {?} */
    WrapperOption.prototype.component;
    /** @type {?|undefined} */
    WrapperOption.prototype.types;
}
/**
 * @record
 */
export function FieldValidatorFn() { }
/**
 * @record
 */
export function ValidatorOption() { }
if (false) {
    /** @type {?} */
    ValidatorOption.prototype.name;
    /** @type {?} */
    ValidatorOption.prototype.validation;
}
/**
 * @record
 */
export function ExtensionOption() { }
if (false) {
    /** @type {?} */
    ExtensionOption.prototype.name;
    /** @type {?} */
    ExtensionOption.prototype.extension;
}
/**
 * @record
 */
export function ValidationMessageOption() { }
if (false) {
    /** @type {?} */
    ValidationMessageOption.prototype.name;
    /** @type {?} */
    ValidationMessageOption.prototype.message;
}
/**
 * @record
 */
export function ManipulatorOption() { }
if (false) {
    /** @type {?|undefined} */
    ManipulatorOption.prototype.class;
    /** @type {?|undefined} */
    ManipulatorOption.prototype.method;
}
/**
 * @record
 */
export function ManipulatorWrapper() { }
/**
 * @record
 */
export function TemplateManipulators() { }
if (false) {
    /** @type {?|undefined} */
    TemplateManipulators.prototype.preWrapper;
    /** @type {?|undefined} */
    TemplateManipulators.prototype.postWrapper;
}
/**
 * @record
 */
export function ConfigOption() { }
if (false) {
    /** @type {?|undefined} */
    ConfigOption.prototype.types;
    /** @type {?|undefined} */
    ConfigOption.prototype.wrappers;
    /** @type {?|undefined} */
    ConfigOption.prototype.validators;
    /** @type {?|undefined} */
    ConfigOption.prototype.extensions;
    /** @type {?|undefined} */
    ConfigOption.prototype.validationMessages;
    /**
     * @deprecated use `extensions` instead
     * @type {?|undefined}
     */
    ConfigOption.prototype.manipulators;
    /** @type {?|undefined} */
    ConfigOption.prototype.extras;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZm9ybWx5LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFvRCxNQUFNLGVBQWUsQ0FBQztBQUc3RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUdoRSxNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFlLGVBQWUsQ0FBQzs7Ozs7QUFHOUUscUNBSUM7Ozs7OztJQUhDLDZEQUE2Qzs7Ozs7SUFDN0MsNERBQTRDOzs7OztJQUM1Qyw4REFBOEM7Ozs7O0FBTWhEO0lBQUE7UUFFRSxVQUFLLEdBQWlDLEVBQUUsQ0FBQztRQUN6QyxlQUFVLEdBQXdDLEVBQUUsQ0FBQztRQUNyRCxhQUFRLEdBQXNDLEVBQUUsQ0FBQztRQUNqRCxhQUFRLEdBQXFGLEVBQUUsQ0FBQztRQUNoRyx5QkFBb0IsR0FHaEI7WUFDRixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFDRixXQUFNLEdBQTJCO1lBQy9CLGlCQUFpQixFQUFFLHNCQUFzQjtZQUN6QyxTQUFTOzs7O1lBQUUsVUFBUyxLQUFnQjtnQkFDbEMsT0FBTyxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7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cnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgQ29tcG9uZW50UmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL3RlbXBsYXRlcy9maWVsZC50eXBlJztcbmltcG9ydCB7IHJldmVyc2VEZWVwTWVyZ2UsIGRlZmluZUhpZGRlblByb3AgfSBmcm9tICcuLy4uL3V0aWxzJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnLCBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEZPUk1MWV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48Rm9ybWx5Q29uZmlnPignRk9STUxZX0NPTkZJRycpO1xuXG4vKiogQGV4cGVyaW1lbnRhbCAqL1xuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlFeHRlbnNpb24ge1xuICBwcmVQb3B1bGF0ZT8oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKTogdm9pZDtcbiAgb25Qb3B1bGF0ZT8oZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKTogdm9pZDtcbiAgcG9zdFBvcHVsYXRlPyhmaWVsZDogRm9ybWx5RmllbGRDb25maWcpOiB2b2lkO1xufVxuXG4vKipcbiAqIE1haW50YWlucyBsaXN0IG9mIGZvcm1seSBmaWVsZCBkaXJlY3RpdmUgdHlwZXMuIFRoaXMgY2FuIGJlIHVzZWQgdG8gcmVnaXN0ZXIgbmV3IGZpZWxkIHRlbXBsYXRlcy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGb3JtbHlDb25maWcge1xuICB0eXBlczoge1tuYW1lOiBzdHJpbmddOiBUeXBlT3B0aW9ufSA9IHt9O1xuICB2YWxpZGF0b3JzOiB7IFtuYW1lOiBzdHJpbmddOiBWYWxpZGF0b3JPcHRpb24gfSA9IHt9O1xuICB3cmFwcGVyczogeyBbbmFtZTogc3RyaW5nXTogV3JhcHBlck9wdGlvbiB9ID0ge307XG4gIG1lc3NhZ2VzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfCAoKGVycm9yOiBhbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gc3RyaW5nKTsgfSA9IHt9O1xuICB0ZW1wbGF0ZU1hbmlwdWxhdG9yczoge1xuICAgIHByZVdyYXBwZXI6IE1hbmlwdWxhdG9yV3JhcHBlcltdO1xuICAgIHBvc3RXcmFwcGVyOiBNYW5pcHVsYXRvcldyYXBwZXJbXTtcbiAgfSA9IHtcbiAgICBwcmVXcmFwcGVyOiBbXSxcbiAgICBwb3N0V3JhcHBlcjogW10sXG4gIH07XG4gIGV4dHJhczogQ29uZmlnT3B0aW9uWydleHRyYXMnXSA9IHtcbiAgICBjaGVja0V4cHJlc3Npb25PbjogJ2NoYW5nZURldGVjdGlvbkNoZWNrJyxcbiAgICBzaG93RXJyb3I6IGZ1bmN0aW9uKGZpZWxkOiBGaWVsZFR5cGUpIHtcbiAgICAgIHJldHVybiBmaWVsZC5mb3JtQ29udHJvbCAmJiBmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIChmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkIHx8IChmaWVsZC5vcHRpb25zLnBhcmVudEZvcm0gJiYgZmllbGQub3B0aW9ucy5wYXJlbnRGb3JtLnN1Ym1pdHRlZCkgfHwgKGZpZWxkLmZpZWxkLnZhbGlkYXRpb24gJiYgZmllbGQuZmllbGQudmFsaWRhdGlvbi5zaG93KSk7XG4gICAgfSxcbiAgfTtcbiAgZXh0ZW5zaW9uczogeyBbbmFtZTogc3RyaW5nXTogRm9ybWx5RXh0ZW5zaW9uIH0gPSB7fTtcblxuICBhZGRDb25maWcoY29uZmlnOiBDb25maWdPcHRpb24pIHtcbiAgICBpZiAoY29uZmlnLnR5cGVzKSB7XG4gICAgICBjb25maWcudHlwZXMuZm9yRWFjaCh0eXBlID0+IHRoaXMuc2V0VHlwZSh0eXBlKSk7XG4gICAgfVxuICAgIGlmIChjb25maWcudmFsaWRhdG9ycykge1xuICAgICAgY29uZmlnLnZhbGlkYXRvcnMuZm9yRWFjaCh2YWxpZGF0b3IgPT4gdGhpcy5zZXRWYWxpZGF0b3IodmFsaWRhdG9yKSk7XG4gICAgfVxuICAgIGlmIChjb25maWcud3JhcHBlcnMpIHtcbiAgICAgIGNvbmZpZy53cmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4gdGhpcy5zZXRXcmFwcGVyKHdyYXBwZXIpKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5tYW5pcHVsYXRvcnMpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTmd4Rm9ybWx5OiBwYXNzaW5nICdtYW5pcHVsYXRvcnMnIGNvbmZpZyBpcyBkZXByZWNhdGVkLCB1c2UgY3VzdG9tIGV4dGVuc2lvbiBpbnN0ZWFkLmApO1xuICAgICAgY29uZmlnLm1hbmlwdWxhdG9ycy5mb3JFYWNoKG1hbmlwdWxhdG9yID0+IHRoaXMuc2V0TWFuaXB1bGF0b3IobWFuaXB1bGF0b3IpKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICAgIGNvbmZpZy52YWxpZGF0aW9uTWVzc2FnZXMuZm9yRWFjaCh2YWxpZGF0aW9uID0+IHRoaXMuYWRkVmFsaWRhdG9yTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSkpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmV4dGVuc2lvbnMpIHtcbiAgICAgIGNvbmZpZy5leHRlbnNpb25zLmZvckVhY2goYyA9PiB0aGlzLmV4dGVuc2lvbnNbYy5uYW1lXSA9IGMuZXh0ZW5zaW9uKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5leHRyYXMpIHtcbiAgICAgIHRoaXMuZXh0cmFzID0geyAuLi50aGlzLmV4dHJhcywgLi4uY29uZmlnLmV4dHJhcyB9O1xuICAgIH1cbiAgfVxuXG4gIHNldFR5cGUob3B0aW9uczogVHlwZU9wdGlvbiB8IFR5cGVPcHRpb25bXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4gdGhpcy5zZXRUeXBlKG9wdGlvbikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMudHlwZXNbb3B0aW9ucy5uYW1lXSkge1xuICAgICAgICB0aGlzLnR5cGVzW29wdGlvbnMubmFtZV0gPSA8VHlwZU9wdGlvbj57fTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHlwZXNbb3B0aW9ucy5uYW1lXS5jb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcbiAgICAgIHRoaXMudHlwZXNbb3B0aW9ucy5uYW1lXS5uYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgICAgdGhpcy50eXBlc1tvcHRpb25zLm5hbWVdLmV4dGVuZHMgPSBvcHRpb25zLmV4dGVuZHM7XG4gICAgICB0aGlzLnR5cGVzW29wdGlvbnMubmFtZV0uZGVmYXVsdE9wdGlvbnMgPSBvcHRpb25zLmRlZmF1bHRPcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMud3JhcHBlcnMpIHtcbiAgICAgICAgb3B0aW9ucy53cmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB0aGlzLnNldFR5cGVXcmFwcGVyKG9wdGlvbnMubmFtZSwgd3JhcHBlcikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFR5cGUobmFtZTogc3RyaW5nKTogVHlwZU9wdGlvbiB7XG4gICAgaWYgKCF0aGlzLnR5cGVzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtGb3JtbHkgRXJyb3JdIFRoZXJlIGlzIG5vIHR5cGUgYnkgdGhlIG5hbWUgb2YgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICB0aGlzLm1lcmdlRXh0ZW5kZWRUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIHRoaXMudHlwZXNbbmFtZV07XG4gIH1cblxuICBnZXRNZXJnZWRGaWVsZChmaWVsZDogRm9ybWx5RmllbGRDb25maWcgPSB7fSk6IGFueSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZShmaWVsZC50eXBlKTtcbiAgICBpZiAodHlwZS5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgcmV2ZXJzZURlZXBNZXJnZShmaWVsZCwgdHlwZS5kZWZhdWx0T3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgZXh0ZW5kRGVmYXVsdHMgPSB0eXBlLmV4dGVuZHMgJiYgdGhpcy5nZXRUeXBlKHR5cGUuZXh0ZW5kcykuZGVmYXVsdE9wdGlvbnM7XG4gICAgaWYgKGV4dGVuZERlZmF1bHRzKSB7XG4gICAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCBleHRlbmREZWZhdWx0cyk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkICYmIGZpZWxkLm9wdGlvbnNUeXBlcykge1xuICAgICAgZmllbGQub3B0aW9uc1R5cGVzLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmdldFR5cGUob3B0aW9uKS5kZWZhdWx0T3B0aW9ucztcbiAgICAgICAgaWYgKGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgcmV2ZXJzZURlZXBNZXJnZShmaWVsZCwgZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudChmaWVsZCk7XG4gICAgaWYgKGNvbXBvbmVudFJlZiAmJiBjb21wb25lbnRSZWYuaW5zdGFuY2UgJiYgY29tcG9uZW50UmVmLmluc3RhbmNlLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGVmYXVsdE9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICghZmllbGQud3JhcHBlcnMgJiYgdHlwZS53cmFwcGVycykge1xuICAgICAgZmllbGQud3JhcHBlcnMgPSBbLi4udHlwZS53cmFwcGVyc107XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBjcmVhdGVDb21wb25lbnQoXG4gICAgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUgPSB7fSxcbiAgICByZXNvbHZlcj86IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBpbmplY3Rvcj86IEluamVjdG9yLFxuICApOiBDb21wb25lbnRSZWY8RmllbGRUeXBlPiB7XG4gICAgaWYgKCFmaWVsZC50eXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2YgPSBmaWVsZC5fY29tcG9uZW50RmFjdG9yeTtcbiAgICBpZiAoY2YgJiYgZmllbGQudHlwZSA9PT0gY2YudHlwZSAmJiAoY2YuY29tcG9uZW50UmVmICYmIGNmLmNvbXBvbmVudFJlZi5ob3N0VmlldyAmJiAhY2YuY29tcG9uZW50UmVmLmhvc3RWaWV3LmRlc3Ryb3llZCkpIHtcbiAgICAgIHJldHVybiBmaWVsZC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnRSZWY7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZShmaWVsZC50eXBlKTtcbiAgICBpZiAoIXJlc29sdmVyKSB7XG4gICAgICByZXNvbHZlciA9IGZpZWxkLnBhcmVudC5vcHRpb25zLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgfVxuICAgIGlmICghaW5qZWN0b3IpIHtcbiAgICAgIGluamVjdG9yID0gdGhpcy5nZXRGaWVsZEluamVjdG9yKGZpZWxkKTtcbiAgICB9XG5cbiAgICBkZWZpbmVIaWRkZW5Qcm9wKGZpZWxkLCAnX2NvbXBvbmVudEZhY3RvcnknLCB7XG4gICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgY29tcG9uZW50OiB0eXBlLmNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFJlZjogcmVzb2x2ZXJcbiAgICAgICAgPyByZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0eXBlLmNvbXBvbmVudCkuY3JlYXRlKGluamVjdG9yKVxuICAgICAgICA6IG51bGwsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmllbGQuX2NvbXBvbmVudEZhY3RvcnkuY29tcG9uZW50UmVmO1xuICB9XG5cbiAgc2V0V3JhcHBlcihvcHRpb25zOiBXcmFwcGVyT3B0aW9uKSB7XG4gICAgdGhpcy53cmFwcGVyc1tvcHRpb25zLm5hbWVdID0gb3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy50eXBlcykge1xuICAgICAgb3B0aW9ucy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VHlwZVdyYXBwZXIodHlwZSwgb3B0aW9ucy5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldFdyYXBwZXIobmFtZTogc3RyaW5nKTogV3JhcHBlck9wdGlvbiB7XG4gICAgaWYgKCF0aGlzLndyYXBwZXJzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtGb3JtbHkgRXJyb3JdIFRoZXJlIGlzIG5vIHdyYXBwZXIgYnkgdGhlIG5hbWUgb2YgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy53cmFwcGVyc1tuYW1lXTtcbiAgfVxuXG4gIHNldFR5cGVXcmFwcGVyKHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnR5cGVzW3R5cGVdKSB7XG4gICAgICB0aGlzLnR5cGVzW3R5cGVdID0gPFR5cGVPcHRpb24+e307XG4gICAgfVxuICAgIGlmICghdGhpcy50eXBlc1t0eXBlXS53cmFwcGVycykge1xuICAgICAgdGhpcy50eXBlc1t0eXBlXS53cmFwcGVycyA9IFtdO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlc1t0eXBlXS53cmFwcGVycy5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgdGhpcy50eXBlc1t0eXBlXS53cmFwcGVycy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbGlkYXRvcihvcHRpb25zOiBWYWxpZGF0b3JPcHRpb24pIHtcbiAgICB0aGlzLnZhbGlkYXRvcnNbb3B0aW9ucy5uYW1lXSA9IG9wdGlvbnM7XG4gIH1cblxuICBnZXRWYWxpZGF0b3IobmFtZTogc3RyaW5nKTogVmFsaWRhdG9yT3B0aW9uIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdG9yc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbRm9ybWx5IEVycm9yXSBUaGVyZSBpcyBubyB2YWxpZGF0b3IgYnkgdGhlIG5hbWUgb2YgXCIke25hbWV9XCJgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzW25hbWVdO1xuICB9XG5cbiAgYWRkVmFsaWRhdG9yTWVzc2FnZShuYW1lOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyB8ICgoZXJyb3I6IGFueSwgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSA9PiBzdHJpbmcpKSB7XG4gICAgdGhpcy5tZXNzYWdlc1tuYW1lXSA9IG1lc3NhZ2U7XG4gIH1cblxuICBnZXRWYWxpZGF0b3JNZXNzYWdlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW25hbWVdO1xuICB9XG5cbiAgc2V0TWFuaXB1bGF0b3IobWFuaXB1bGF0b3I6IE1hbmlwdWxhdG9yT3B0aW9uKSB7XG4gICAgbmV3IG1hbmlwdWxhdG9yLmNsYXNzKClbbWFuaXB1bGF0b3IubWV0aG9kXSh0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VFeHRlbmRlZFR5cGUobmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnR5cGVzW25hbWVdLmV4dGVuZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleHRlbmRlZFR5cGUgPSB0aGlzLmdldFR5cGUodGhpcy50eXBlc1tuYW1lXS5leHRlbmRzKTtcbiAgICBpZiAoIXRoaXMudHlwZXNbbmFtZV0uY29tcG9uZW50KSB7XG4gICAgICB0aGlzLnR5cGVzW25hbWVdLmNvbXBvbmVudCA9IGV4dGVuZGVkVHlwZS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnR5cGVzW25hbWVdLndyYXBwZXJzKSB7XG4gICAgICB0aGlzLnR5cGVzW25hbWVdLndyYXBwZXJzID0gZXh0ZW5kZWRUeXBlLndyYXBwZXJzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmllbGRJbmplY3RvcihmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSA9IHt9KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZmllbGQucGFyZW50O1xuICAgIGlmIChwYXJlbnQuX2NvbXBvbmVudEZhY3RvcnkgJiYgcGFyZW50Ll9jb21wb25lbnRGYWN0b3J5LmNvbXBvbmVudFJlZikge1xuICAgICAgcmV0dXJuIHBhcmVudC5fY29tcG9uZW50RmFjdG9yeS5jb21wb25lbnRSZWYuaW5qZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5vcHRpb25zLl9pbmplY3RvcjtcbiAgfVxufVxuZXhwb3J0IGludGVyZmFjZSBUeXBlT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb21wb25lbnQ/OiBhbnk7XG4gIHdyYXBwZXJzPzogc3RyaW5nW107XG4gIGV4dGVuZHM/OiBzdHJpbmc7XG4gIGRlZmF1bHRPcHRpb25zPzogRm9ybWx5RmllbGRDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3JhcHBlck9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29tcG9uZW50OiBhbnk7XG4gIHR5cGVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmllbGRWYWxpZGF0b3JGbiB7XG4gIChjOiBBYnN0cmFjdENvbnRyb2wsIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZyk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRvck9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsaWRhdGlvbjogRmllbGRWYWxpZGF0b3JGbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbnNpb25PcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGV4dGVuc2lvbjogRm9ybWx5RXh0ZW5zaW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25NZXNzYWdlT3B0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmcgfCAoKGVycm9yOiBhbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gc3RyaW5nKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYW5pcHVsYXRvck9wdGlvbiB7XG4gIGNsYXNzPzogeyBuZXcgKCk6IGFueSB9O1xuICBtZXRob2Q/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFuaXB1bGF0b3JXcmFwcGVyIHtcbiAgKGY6IEZvcm1seUZpZWxkQ29uZmlnKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlTWFuaXB1bGF0b3JzIHtcbiAgcHJlV3JhcHBlcj86IE1hbmlwdWxhdG9yV3JhcHBlcltdO1xuICBwb3N0V3JhcHBlcj86IE1hbmlwdWxhdG9yV3JhcHBlcltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ09wdGlvbiB7XG4gIHR5cGVzPzogVHlwZU9wdGlvbltdO1xuICB3cmFwcGVycz86IFdyYXBwZXJPcHRpb25bXTtcbiAgdmFsaWRhdG9ycz86IFZhbGlkYXRvck9wdGlvbltdO1xuICBleHRlbnNpb25zPzogRXh0ZW5zaW9uT3B0aW9uW107XG4gIHZhbGlkYXRpb25NZXNzYWdlcz86IFZhbGlkYXRpb25NZXNzYWdlT3B0aW9uW107XG5cbiAgLyoqIEBkZXByZWNhdGVkIHVzZSBgZXh0ZW5zaW9uc2AgaW5zdGVhZCAqL1xuICBtYW5pcHVsYXRvcnM/OiBNYW5pcHVsYXRvck9wdGlvbltdO1xuICBleHRyYXM/OiB7XG4gICAgLyoqIEBkZXByZWNhdGVkIHVzZSBgZXh0ZW5zaW9uc2AgaW5zdGVhZCAqL1xuICAgIGZpZWxkVHJhbnNmb3JtPzogYW55LFxuICAgIGltbXV0YWJsZT86IGJvb2xlYW4sXG4gICAgc2hvd0Vycm9yPzogKGZpZWxkOiBGaWVsZFR5cGUpID0+IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBvcHRpb24gd2hpY2ggZm9ybWx5IHJlbHkgb24gdG8gY2hlY2sgZmllbGQgZXhwcmVzc2lvbiBwcm9wZXJ0aWVzLlxuICAgICAqIC0gYG1vZGVsQ2hhbmdlYDogcGVyZm9ybSBhIGNoZWNrIHdoZW4gdGhlIHZhbHVlIG9mIHRoZSBmb3JtIGNvbnRyb2wgY2hhbmdlcy5cbiAgICAgKiAtIGBjaGFuZ2VEZXRlY3Rpb25DaGVja2A6IHRyaWdnZXJzIGFuIGltbWVkaWF0ZSBjaGVjayB3aGVuIGBuZ0RvQ2hlY2tgIGlzIGNhbGxlZC5cbiAgICAqL1xuICAgIGNoZWNrRXhwcmVzc2lvbk9uPzogJ21vZGVsQ2hhbmdlJyB8ICdjaGFuZ2VEZXRlY3Rpb25DaGVjaycsXG4gIH07XG59XG4iXX0=