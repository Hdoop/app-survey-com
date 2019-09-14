import { InjectionToken, ComponentRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
import { FieldType } from './../templates/field.type';
import { FormlyFieldConfig, FormlyFieldConfigCache } from '../components/formly.field.config';
export declare const FORMLY_CONFIG: InjectionToken<FormlyConfig>;
/** @experimental */
export interface FormlyExtension {
    prePopulate?(field: FormlyFieldConfig): void;
    onPopulate?(field: FormlyFieldConfig): void;
    postPopulate?(field: FormlyFieldConfig): void;
}
/**
 * Maintains list of formly field directive types. This can be used to register new field templates.
 */
export declare class FormlyConfig {
    types: {
        [name: string]: TypeOption;
    };
    validators: {
        [name: string]: ValidatorOption;
    };
    wrappers: {
        [name: string]: WrapperOption;
    };
    messages: {
        [name: string]: string | ((error: any, field: FormlyFieldConfig) => string);
    };
    templateManipulators: {
        preWrapper: ManipulatorWrapper[];
        postWrapper: ManipulatorWrapper[];
    };
    extras: ConfigOption['extras'];
    extensions: {
        [name: string]: FormlyExtension;
    };
    addConfig(config: ConfigOption): void;
    setType(options: TypeOption | TypeOption[]): void;
    getType(name: string): TypeOption;
    getMergedField(field?: FormlyFieldConfig): any;
    /** @internal */
    createComponent(field?: FormlyFieldConfigCache, resolver?: ComponentFactoryResolver, injector?: Injector): ComponentRef<FieldType>;
    setWrapper(options: WrapperOption): void;
    getWrapper(name: string): WrapperOption;
    setTypeWrapper(type: string, name: string): void;
    setValidator(options: ValidatorOption): void;
    getValidator(name: string): ValidatorOption;
    addValidatorMessage(name: string, message: string | ((error: any, field: FormlyFieldConfig) => string)): void;
    getValidatorMessage(name: string): string | ((error: any, field: FormlyFieldConfig) => string);
    setManipulator(manipulator: ManipulatorOption): void;
    private mergeExtendedType;
    private getFieldInjector;
}
export interface TypeOption {
    name: string;
    component?: any;
    wrappers?: string[];
    extends?: string;
    defaultOptions?: FormlyFieldConfig;
}
export interface WrapperOption {
    name: string;
    component: any;
    types?: string[];
}
export interface FieldValidatorFn {
    (c: AbstractControl, field: FormlyFieldConfig): ValidationErrors | null;
}
export interface ValidatorOption {
    name: string;
    validation: FieldValidatorFn;
}
export interface ExtensionOption {
    name: string;
    extension: FormlyExtension;
}
export interface ValidationMessageOption {
    name: string;
    message: string | ((error: any, field: FormlyFieldConfig) => string);
}
export interface ManipulatorOption {
    class?: {
        new (): any;
    };
    method?: string;
}
export interface ManipulatorWrapper {
    (f: FormlyFieldConfig): string;
}
export interface TemplateManipulators {
    preWrapper?: ManipulatorWrapper[];
    postWrapper?: ManipulatorWrapper[];
}
export interface ConfigOption {
    types?: TypeOption[];
    wrappers?: WrapperOption[];
    validators?: ValidatorOption[];
    extensions?: ExtensionOption[];
    validationMessages?: ValidationMessageOption[];
    /** @deprecated use `extensions` instead */
    manipulators?: ManipulatorOption[];
    extras?: {
        /** @deprecated use `extensions` instead */
        fieldTransform?: any;
        immutable?: boolean;
        showError?: (field: FieldType) => boolean;
        /**
         * Defines the option which formly rely on to check field expression properties.
         * - `modelChange`: perform a check when the value of the form control changes.
         * - `changeDetectionCheck`: triggers an immediate check when `ngDoCheck` is called.
        */
        checkExpressionOn?: 'modelChange' | 'changeDetectionCheck';
    };
}
