/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function FormlyFieldConfig() { }
if (false) {
    /**
     * The model that stores all the data, where the model[key] is the value of the field
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.model;
    /**
     * The parent field.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.parent;
    /** @type {?|undefined} */
    FormlyFieldConfig.prototype.options;
    /** @type {?|undefined} */
    FormlyFieldConfig.prototype.form;
    /**
     * The key that relates to the model. This will link the field value to the model
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.key;
    /**
     * This allows you to specify the `id` of your field. Note, the `id` is generated if not set.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.id;
    /**
     * If you wish, you can specify a specific `name` for your field. This is useful if you're posting the form to a server using techniques of yester-year.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.name;
    /**
     * This is reserved for the templates. Any template-specific options go in here. Look at your specific template implementation to know the options required for this.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.templateOptions;
    /** @type {?|undefined} */
    FormlyFieldConfig.prototype.optionsTypes;
    /**
     * An object with a few useful properties
     * - `validation.messages`: A map of message names that will be displayed when the field has errors.
     * - `validation.show`: A boolean you as the developer can set to force displaying errors whatever the state of field. This is useful when you're trying to call the user's attention to some fields for some reason.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.validation;
    /**
     * Used to set validation rules for a particular field.
     * Should be an object of key - value pairs. The value can either be an expression to evaluate or a function to run.
     * Each should return a boolean value, returning true when the field is valid. See Validation for more information.
     *
     * {
     *   validation?: (string | ValidatorFn)[];
     *   [key: string]: ((control: AbstractControl, field: FormlyFieldConfig) => boolean) | ({ expression: (control: AbstractControl, field: FormlyFieldConfig) => boolean, message: string | ((error, field: FormlyFieldConfig) => string) });
     * }
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.validators;
    /**
     * Use this one for anything that needs to validate asynchronously.
     * Pretty much exactly the same as the validators api, except it must be a function that returns a promise.
     *
     * {
     *   validation?: (string | AsyncValidatorFn)[];
     *   [key: string]: ((control: AbstractControl, field: FormlyFieldConfig) => Promise<boolean>) | ({ expression: (control: AbstractControl, field: FormlyFieldConfig) => Promise<boolean>, message: string });
     * }
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.asyncValidators;
    /**
     * Can be set instead of `type` to render custom html content.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.template;
    /**
     *  It is expected to be the name of the wrappers.
     *  The formly field template will be wrapped by the first wrapper, then the second, then the third, etc.
     *  You can also specify these as part of a type (which is the recommended approach).
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.wrappers;
    /**
     * Whether to hide the field. Defaults to false. If you wish this to be conditional use `hideExpression`
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.hide;
    /**
     * Conditionally hiding Field based on values from other Fields
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.hideExpression;
    /**
     * An object where the key is a property to be set on the main field config and the value is an expression used to assign that property.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.expressionProperties;
    /**
     * This is the [FormControl](https://angular.io/api/forms/FormControl) for the field.
     * It provides you more control like running validators, calculating status, and resetting state.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.formControl;
    /**
     * You can specify your own class that will be applied to the `formly-field` component.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.className;
    /**
     * Specify your own class that will be applied to the `formly-group` component.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.fieldGroupClassName;
    /**
     * A field group is a way to group fields together, making advanced layout very simple.
     * It can also be used to group fields that are associated with the same model (useful if it's different than the model for the rest of the fields).
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.fieldGroup;
    /** @type {?|undefined} */
    FormlyFieldConfig.prototype.fieldArray;
    /**
     * This should be a formly-field type added either by you or a plugin. More information over at Creating Formly Fields.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.type;
    /**
     * Whether to focus or blur the element field. Defaults to false. If you wish this to be conditional use `expressionProperties`
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.focus;
    /**
     * An object with a few useful properties to control the model changes
     * - `debounce`: integer value which contains the debounce model update value in milliseconds. A value of 0 triggers an immediate update.
     * - `updateOn`: string event value that instructs when the control should be updated
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.modelOptions;
    /** @type {?|undefined} */
    FormlyFieldConfig.prototype.hooks;
    /**
     * @deprecated use `hooks` instead
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.lifecycle;
    /**
     * Use `defaultValue` to initialize it the model. If this is provided and the value of the model at compile-time is undefined, then the value of the model will be assigned to `defaultValue`.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.defaultValue;
    /**
     * Array of functions to execute, as a pipeline, whenever the model updates, usually via user input.
     * @type {?|undefined}
     */
    FormlyFieldConfig.prototype.parsers;
}
/**
 * @record
 */
export function ExpressionPropertyCache() { }
if (false) {
    /** @type {?} */
    ExpressionPropertyCache.prototype.expression;
    /** @type {?} */
    ExpressionPropertyCache.prototype.expressionValueSetter;
    /** @type {?|undefined} */
    ExpressionPropertyCache.prototype.expressionValue;
}
/**
 * @record
 */
export function FormlyFieldConfigCache() { }
if (false) {
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype.parent;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype.options;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._expressionProperties;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._validators;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._asyncValidators;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._componentRefs;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._componentFactory;
    /** @type {?|undefined} */
    FormlyFieldConfigCache.prototype._keyPath;
}
/**
 * @record
 */
export function FormlyTemplateOptions() { }
if (false) {
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.type;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.label;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.placeholder;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.disabled;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.options;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.rows;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.cols;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.description;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.hidden;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.max;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.min;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.minLength;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.maxLength;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.pattern;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.required;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.tabindex;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.readonly;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.attributes;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.step;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.focus;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.blur;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.keyup;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.keydown;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.click;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.change;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.keypress;
    /** @type {?|undefined} */
    FormlyTemplateOptions.prototype.templateManipulators;
    /* Skipping unhandled member: [additionalProperties: string]: any;*/
}
/**
 * @record
 */
export function FormlyLifeCycleFn() { }
/**
 * @record
 */
export function FormlyHookFn() { }
/**
 * @record
 * @template T
 */
export function FormlyLifeCycleOptions() { }
if (false) {
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.onInit;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.onChanges;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.doCheck;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.afterContentInit;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.afterContentChecked;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.afterViewInit;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.afterViewChecked;
    /** @type {?|undefined} */
    FormlyLifeCycleOptions.prototype.onDestroy;
    /* Skipping unhandled member: [additionalProperties: string]: any;*/
}
/**
 * @record
 */
export function FormlyFormOptionsCache() { }
if (false) {
    /** @type {?|undefined} */
    FormlyFormOptionsCache.prototype._checkField;
    /** @type {?|undefined} */
    FormlyFormOptionsCache.prototype._markForCheck;
    /** @type {?|undefined} */
    FormlyFormOptionsCache.prototype._buildForm;
    /** @type {?|undefined} */
    FormlyFormOptionsCache.prototype._componentFactoryResolver;
    /** @type {?|undefined} */
    FormlyFormOptionsCache.prototype._injector;
}
/**
 * @record
 */
export function FormlyFormOptions() { }
if (false) {
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.updateInitialValue;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.resetModel;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.formState;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.fieldChanges;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.fieldTransform;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.showError;
    /** @type {?|undefined} */
    FormlyFormOptions.prototype.parentForm;
}
/**
 * @record
 */
export function FormlyValueChangeEvent() { }
if (false) {
    /** @type {?} */
    FormlyValueChangeEvent.prototype.field;
    /** @type {?} */
    FormlyValueChangeEvent.prototype.type;
    /** @type {?} */
    FormlyValueChangeEvent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWx5LmZpZWxkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSx1Q0FxS0M7Ozs7OztJQWpLQyxrQ0FBcUI7Ozs7O0lBS3JCLG1DQUFvQzs7SUFHcEMsb0NBQXFDOztJQUNyQyxpQ0FBMEI7Ozs7O0lBSzFCLGdDQUFhOzs7OztJQUtiLCtCQUFZOzs7OztJQUtaLGlDQUFjOzs7OztJQUtkLDRDQUF3Qzs7SUFFeEMseUNBQXdCOzs7Ozs7O0lBT3hCLHVDQU1FOzs7Ozs7Ozs7Ozs7SUFZRix1Q0FBaUI7Ozs7Ozs7Ozs7O0lBV2pCLDRDQUFzQjs7Ozs7SUFLdEIscUNBQWtCOzs7Ozs7O0lBT2xCLHFDQUFvQjs7Ozs7SUFLcEIsaUNBQWU7Ozs7O0lBS2YsMkNBQXlHOzs7OztJQUt6RyxpREFBMkk7Ozs7OztJQU0zSSx3Q0FBOEI7Ozs7O0lBSzlCLHNDQUFtQjs7Ozs7SUFLbkIsZ0RBQTZCOzs7Ozs7SUFNN0IsdUNBQWlDOztJQUVqQyx1Q0FBK0I7Ozs7O0lBSy9CLGlDQUFjOzs7OztJQUtkLGtDQUFnQjs7Ozs7OztJQU9oQix5Q0FRRTs7SUFFRixrQ0FBNkM7Ozs7O0lBSzdDLHNDQUFtQzs7Ozs7SUFLbkMseUNBQW1COzs7OztJQUtuQixvQ0FBaUM7Ozs7O0FBR25DLDZDQUlDOzs7SUFIQyw2Q0FBbUY7O0lBQ25GLHdEQUE0Qzs7SUFDNUMsa0RBQXNCOzs7OztBQUd4Qiw0Q0FnQkM7OztJQWZDLHdDQUFnQzs7SUFDaEMseUNBQWlDOztJQUNqQyx1REFBd0U7O0lBQ3hFLDZDQUEwQjs7SUFDMUIsa0RBQW9DOztJQUNwQyxnREFBMkM7O0lBQzNDLG1EQUlFOztJQUNGLDBDQUdFOzs7OztBQUtKLDJDQTZCQzs7O0lBNUJDLHFDQUFjOztJQUNkLHNDQUFlOztJQUNmLDRDQUFxQjs7SUFDckIseUNBQW1COztJQUNuQix3Q0FBb0M7O0lBQ3BDLHFDQUFjOztJQUNkLHFDQUFjOztJQUNkLDRDQUFxQjs7SUFDckIsdUNBQWlCOztJQUNqQixvQ0FBYTs7SUFDYixvQ0FBYTs7SUFDYiwwQ0FBbUI7O0lBQ25CLDBDQUFtQjs7SUFDbkIsd0NBQXdCOztJQUN4Qix5Q0FBbUI7O0lBQ25CLHlDQUFrQjs7SUFDbEIseUNBQW1COztJQUNuQiwyQ0FBOEM7O0lBQzlDLHFDQUFjOztJQUNkLHNDQUE2Qjs7SUFDN0IscUNBQTRCOztJQUM1QixzQ0FBNkI7O0lBQzdCLHdDQUErQjs7SUFDL0Isc0NBQTZCOztJQUM3Qix1Q0FBOEI7O0lBQzlCLHlDQUFnQzs7SUFDaEMscURBQTRDOzs7Ozs7QUFJOUMsdUNBRUM7Ozs7QUFFRCxrQ0FFQzs7Ozs7QUFFRCw0Q0FVQzs7O0lBVEMsd0NBQVc7O0lBQ1gsMkNBQWM7O0lBQ2QseUNBQVk7O0lBQ1osa0RBQXFCOztJQUNyQixxREFBd0I7O0lBQ3hCLCtDQUFrQjs7SUFDbEIsa0RBQXFCOztJQUNyQiwyQ0FBYzs7Ozs7O0FBSWhCLDRDQU1DOzs7SUFMQyw2Q0FBNkU7O0lBQzdFLCtDQUF3RDs7SUFDeEQsNENBQXdCOztJQUN4QiwyREFBcUQ7O0lBQ3JELDJDQUFxQjs7Ozs7QUFFdkIsdUNBUUM7OztJQVBDLCtDQUFnQzs7SUFDaEMsdUNBQW1DOztJQUNuQyxzQ0FBZ0I7O0lBQ2hCLHlDQUErQzs7SUFDL0MsMkNBQTJJOztJQUMzSSxzQ0FBMEM7O0lBQzFDLHVDQUF1Qzs7Ozs7QUFHekMsNENBSUM7OztJQUhDLHVDQUF5Qjs7SUFDekIsc0NBQWE7O0lBQ2IsdUNBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAsIEFic3RyYWN0Q29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBGb3JtQXJyYXksIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL2ZpZWxkLnR5cGUnO1xuaW1wb3J0IHsgVGVtcGxhdGVNYW5pcHVsYXRvcnMgfSBmcm9tICcuLi9zZXJ2aWNlcy9mb3JtbHkuY29uZmlnJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBtb2RlbCB0aGF0IHN0b3JlcyBhbGwgdGhlIGRhdGEsIHdoZXJlIHRoZSBtb2RlbFtrZXldIGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICovXG4gIHJlYWRvbmx5IG1vZGVsPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgcGFyZW50IGZpZWxkLlxuICAgKi9cbiAgcmVhZG9ubHkgcGFyZW50PzogRm9ybWx5RmllbGRDb25maWc7XG5cblxuICByZWFkb25seSBvcHRpb25zPzogRm9ybWx5Rm9ybU9wdGlvbnM7XG4gIHJlYWRvbmx5IGZvcm0/OiBGb3JtR3JvdXA7XG5cbiAgLyoqXG4gICAqIFRoZSBrZXkgdGhhdCByZWxhdGVzIHRvIHRoZSBtb2RlbC4gVGhpcyB3aWxsIGxpbmsgdGhlIGZpZWxkIHZhbHVlIHRvIHRoZSBtb2RlbFxuICAgKi9cbiAga2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB5b3UgdG8gc3BlY2lmeSB0aGUgYGlkYCBvZiB5b3VyIGZpZWxkLiBOb3RlLCB0aGUgYGlkYCBpcyBnZW5lcmF0ZWQgaWYgbm90IHNldC5cbiAgICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd2lzaCwgeW91IGNhbiBzcGVjaWZ5IGEgc3BlY2lmaWMgYG5hbWVgIGZvciB5b3VyIGZpZWxkLiBUaGlzIGlzIHVzZWZ1bCBpZiB5b3UncmUgcG9zdGluZyB0aGUgZm9ybSB0byBhIHNlcnZlciB1c2luZyB0ZWNobmlxdWVzIG9mIHllc3Rlci15ZWFyLlxuICAgKi9cbiAgbmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyBpcyByZXNlcnZlZCBmb3IgdGhlIHRlbXBsYXRlcy4gQW55IHRlbXBsYXRlLXNwZWNpZmljIG9wdGlvbnMgZ28gaW4gaGVyZS4gTG9vayBhdCB5b3VyIHNwZWNpZmljIHRlbXBsYXRlIGltcGxlbWVudGF0aW9uIHRvIGtub3cgdGhlIG9wdGlvbnMgcmVxdWlyZWQgZm9yIHRoaXMuXG4gICAqL1xuICB0ZW1wbGF0ZU9wdGlvbnM/OiBGb3JtbHlUZW1wbGF0ZU9wdGlvbnM7XG5cbiAgb3B0aW9uc1R5cGVzPzogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIEFuIG9iamVjdCB3aXRoIGEgZmV3IHVzZWZ1bCBwcm9wZXJ0aWVzXG4gICAqIC0gYHZhbGlkYXRpb24ubWVzc2FnZXNgOiBBIG1hcCBvZiBtZXNzYWdlIG5hbWVzIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgd2hlbiB0aGUgZmllbGQgaGFzIGVycm9ycy5cbiAgICogLSBgdmFsaWRhdGlvbi5zaG93YDogQSBib29sZWFuIHlvdSBhcyB0aGUgZGV2ZWxvcGVyIGNhbiBzZXQgdG8gZm9yY2UgZGlzcGxheWluZyBlcnJvcnMgd2hhdGV2ZXIgdGhlIHN0YXRlIG9mIGZpZWxkLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSdyZSB0cnlpbmcgdG8gY2FsbCB0aGUgdXNlcidzIGF0dGVudGlvbiB0byBzb21lIGZpZWxkcyBmb3Igc29tZSByZWFzb24uXG4gICAqL1xuICB2YWxpZGF0aW9uPzoge1xuICAgIG1lc3NhZ2VzPzoge1xuICAgICAgW21lc3NhZ2VQcm9wZXJ0aWVzOiBzdHJpbmddOiBzdHJpbmcgfCAoKGVycm9yOiBhbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gc3RyaW5nKTtcbiAgICB9O1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xuICB9O1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHNldCB2YWxpZGF0aW9uIHJ1bGVzIGZvciBhIHBhcnRpY3VsYXIgZmllbGQuXG4gICAqIFNob3VsZCBiZSBhbiBvYmplY3Qgb2Yga2V5IC0gdmFsdWUgcGFpcnMuIFRoZSB2YWx1ZSBjYW4gZWl0aGVyIGJlIGFuIGV4cHJlc3Npb24gdG8gZXZhbHVhdGUgb3IgYSBmdW5jdGlvbiB0byBydW4uXG4gICAqIEVhY2ggc2hvdWxkIHJldHVybiBhIGJvb2xlYW4gdmFsdWUsIHJldHVybmluZyB0cnVlIHdoZW4gdGhlIGZpZWxkIGlzIHZhbGlkLiBTZWUgVmFsaWRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICoge1xuICAgKiAgIHZhbGlkYXRpb24/OiAoc3RyaW5nIHwgVmFsaWRhdG9yRm4pW107XG4gICAqICAgW2tleTogc3RyaW5nXTogKChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gYm9vbGVhbikgfCAoeyBleHByZXNzaW9uOiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBmaWVsZDogRm9ybWx5RmllbGRDb25maWcpID0+IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB8ICgoZXJyb3IsIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gc3RyaW5nKSB9KTtcbiAgICogfVxuICAgKi9cbiAgdmFsaWRhdG9ycz86IGFueTtcblxuICAvKipcbiAgICogVXNlIHRoaXMgb25lIGZvciBhbnl0aGluZyB0aGF0IG5lZWRzIHRvIHZhbGlkYXRlIGFzeW5jaHJvbm91c2x5LlxuICAgKiBQcmV0dHkgbXVjaCBleGFjdGx5IHRoZSBzYW1lIGFzIHRoZSB2YWxpZGF0b3JzIGFwaSwgZXhjZXB0IGl0IG11c3QgYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlLlxuICAgKlxuICAgKiB7XG4gICAqICAgdmFsaWRhdGlvbj86IChzdHJpbmcgfCBBc3luY1ZhbGlkYXRvckZuKVtdO1xuICAgKiAgIFtrZXk6IHN0cmluZ106ICgoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBmaWVsZDogRm9ybWx5RmllbGRDb25maWcpID0+IFByb21pc2U8Ym9vbGVhbj4pIHwgKHsgZXhwcmVzc2lvbjogKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSA9PiBQcm9taXNlPGJvb2xlYW4+LCBtZXNzYWdlOiBzdHJpbmcgfSk7XG4gICAqIH1cbiAgICovXG4gIGFzeW5jVmFsaWRhdG9ycz86IGFueTtcblxuICAvKipcbiAgICogQ2FuIGJlIHNldCBpbnN0ZWFkIG9mIGB0eXBlYCB0byByZW5kZXIgY3VzdG9tIGh0bWwgY29udGVudC5cbiAgICovXG4gIHRlbXBsYXRlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiAgSXQgaXMgZXhwZWN0ZWQgdG8gYmUgdGhlIG5hbWUgb2YgdGhlIHdyYXBwZXJzLlxuICAgKiAgVGhlIGZvcm1seSBmaWVsZCB0ZW1wbGF0ZSB3aWxsIGJlIHdyYXBwZWQgYnkgdGhlIGZpcnN0IHdyYXBwZXIsIHRoZW4gdGhlIHNlY29uZCwgdGhlbiB0aGUgdGhpcmQsIGV0Yy5cbiAgICogIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZXNlIGFzIHBhcnQgb2YgYSB0eXBlICh3aGljaCBpcyB0aGUgcmVjb21tZW5kZWQgYXBwcm9hY2gpLlxuICAgKi9cbiAgd3JhcHBlcnM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBoaWRlIHRoZSBmaWVsZC4gRGVmYXVsdHMgdG8gZmFsc2UuIElmIHlvdSB3aXNoIHRoaXMgdG8gYmUgY29uZGl0aW9uYWwgdXNlIGBoaWRlRXhwcmVzc2lvbmBcbiAgICovXG4gIGhpZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25hbGx5IGhpZGluZyBGaWVsZCBiYXNlZCBvbiB2YWx1ZXMgZnJvbSBvdGhlciBGaWVsZHNcbiAgICovXG4gIGhpZGVFeHByZXNzaW9uPzogYm9vbGVhbiB8IHN0cmluZyB8ICgobW9kZWw6IGFueSwgZm9ybVN0YXRlOiBhbnksIGZpZWxkPzogRm9ybWx5RmllbGRDb25maWcpID0+IGJvb2xlYW4pO1xuXG4gIC8qKlxuICAgKiBBbiBvYmplY3Qgd2hlcmUgdGhlIGtleSBpcyBhIHByb3BlcnR5IHRvIGJlIHNldCBvbiB0aGUgbWFpbiBmaWVsZCBjb25maWcgYW5kIHRoZSB2YWx1ZSBpcyBhbiBleHByZXNzaW9uIHVzZWQgdG8gYXNzaWduIHRoYXQgcHJvcGVydHkuXG4gICAqL1xuICBleHByZXNzaW9uUHJvcGVydGllcz86IHsgW3Byb3BlcnR5OiBzdHJpbmddOiBzdHJpbmcgfCAoKG1vZGVsOiBhbnksIGZvcm1TdGF0ZTogYW55LCBmaWVsZD86IEZvcm1seUZpZWxkQ29uZmlnKSA9PiBhbnkpIHwgT2JzZXJ2YWJsZTxhbnk+IH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIFtGb3JtQ29udHJvbF0oaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9mb3Jtcy9Gb3JtQ29udHJvbCkgZm9yIHRoZSBmaWVsZC5cbiAgICogSXQgcHJvdmlkZXMgeW91IG1vcmUgY29udHJvbCBsaWtlIHJ1bm5pbmcgdmFsaWRhdG9ycywgY2FsY3VsYXRpbmcgc3RhdHVzLCBhbmQgcmVzZXR0aW5nIHN0YXRlLlxuICAgKi9cbiAgZm9ybUNvbnRyb2w/OiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gc3BlY2lmeSB5b3VyIG93biBjbGFzcyB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgYGZvcm1seS1maWVsZGAgY29tcG9uZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHlvdXIgb3duIGNsYXNzIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBgZm9ybWx5LWdyb3VwYCBjb21wb25lbnQuXG4gICAqL1xuICBmaWVsZEdyb3VwQ2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIGZpZWxkIGdyb3VwIGlzIGEgd2F5IHRvIGdyb3VwIGZpZWxkcyB0b2dldGhlciwgbWFraW5nIGFkdmFuY2VkIGxheW91dCB2ZXJ5IHNpbXBsZS5cbiAgICogSXQgY2FuIGFsc28gYmUgdXNlZCB0byBncm91cCBmaWVsZHMgdGhhdCBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBzYW1lIG1vZGVsICh1c2VmdWwgaWYgaXQncyBkaWZmZXJlbnQgdGhhbiB0aGUgbW9kZWwgZm9yIHRoZSByZXN0IG9mIHRoZSBmaWVsZHMpLlxuICAgKi9cbiAgZmllbGRHcm91cD86IEZvcm1seUZpZWxkQ29uZmlnW107XG5cbiAgZmllbGRBcnJheT86IEZvcm1seUZpZWxkQ29uZmlnO1xuXG4gIC8qKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIGZvcm1seS1maWVsZCB0eXBlIGFkZGVkIGVpdGhlciBieSB5b3Ugb3IgYSBwbHVnaW4uIE1vcmUgaW5mb3JtYXRpb24gb3ZlciBhdCBDcmVhdGluZyBGb3JtbHkgRmllbGRzLlxuICAgKi9cbiAgdHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciB0byBmb2N1cyBvciBibHVyIHRoZSBlbGVtZW50IGZpZWxkLiBEZWZhdWx0cyB0byBmYWxzZS4gSWYgeW91IHdpc2ggdGhpcyB0byBiZSBjb25kaXRpb25hbCB1c2UgYGV4cHJlc3Npb25Qcm9wZXJ0aWVzYFxuICAgKi9cbiAgZm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBbiBvYmplY3Qgd2l0aCBhIGZldyB1c2VmdWwgcHJvcGVydGllcyB0byBjb250cm9sIHRoZSBtb2RlbCBjaGFuZ2VzXG4gICAqIC0gYGRlYm91bmNlYDogaW50ZWdlciB2YWx1ZSB3aGljaCBjb250YWlucyB0aGUgZGVib3VuY2UgbW9kZWwgdXBkYXRlIHZhbHVlIGluIG1pbGxpc2Vjb25kcy4gQSB2YWx1ZSBvZiAwIHRyaWdnZXJzIGFuIGltbWVkaWF0ZSB1cGRhdGUuXG4gICAqIC0gYHVwZGF0ZU9uYDogc3RyaW5nIGV2ZW50IHZhbHVlIHRoYXQgaW5zdHJ1Y3RzIHdoZW4gdGhlIGNvbnRyb2wgc2hvdWxkIGJlIHVwZGF0ZWRcbiAgICovXG4gIG1vZGVsT3B0aW9ucz86IHtcbiAgICBkZWJvdW5jZT86IHtcbiAgICAgIGRlZmF1bHQ6IG51bWJlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9mb3Jtcy9BYnN0cmFjdENvbnRyb2wjdXBkYXRlT25cbiAgICAgKi9cbiAgICB1cGRhdGVPbj86ICdjaGFuZ2UnIHwgJ2JsdXInIHwgJ3N1Ym1pdCc7XG4gIH07XG5cbiAgaG9va3M/OiBGb3JtbHlMaWZlQ3ljbGVPcHRpb25zPEZvcm1seUhvb2tGbj47XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgaG9va3NgIGluc3RlYWRcbiAgICovXG4gIGxpZmVjeWNsZT86IEZvcm1seUxpZmVDeWNsZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFVzZSBgZGVmYXVsdFZhbHVlYCB0byBpbml0aWFsaXplIGl0IHRoZSBtb2RlbC4gSWYgdGhpcyBpcyBwcm92aWRlZCBhbmQgdGhlIHZhbHVlIG9mIHRoZSBtb2RlbCBhdCBjb21waWxlLXRpbWUgaXMgdW5kZWZpbmVkLCB0aGVuIHRoZSB2YWx1ZSBvZiB0aGUgbW9kZWwgd2lsbCBiZSBhc3NpZ25lZCB0byBgZGVmYXVsdFZhbHVlYC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZT86IGFueTtcblxuICAvKipcbiAgICogQXJyYXkgb2YgZnVuY3Rpb25zIHRvIGV4ZWN1dGUsIGFzIGEgcGlwZWxpbmUsIHdoZW5ldmVyIHRoZSBtb2RlbCB1cGRhdGVzLCB1c3VhbGx5IHZpYSB1c2VyIGlucHV0LlxuICAgKi9cbiAgcGFyc2Vycz86ICgodmFsdWU6IGFueSkgPT4ge30pW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvblByb3BlcnR5Q2FjaGUge1xuICBleHByZXNzaW9uOiAobW9kZWw6IGFueSwgZm9ybVN0YXRlOiBhbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSA9PiBib29sZWFuO1xuICBleHByZXNzaW9uVmFsdWVTZXR0ZXI6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBleHByZXNzaW9uVmFsdWU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5RmllbGRDb25maWdDYWNoZSBleHRlbmRzIEZvcm1seUZpZWxkQ29uZmlnIHtcbiAgcGFyZW50PzogRm9ybWx5RmllbGRDb25maWdDYWNoZTtcbiAgb3B0aW9ucz86IEZvcm1seUZvcm1PcHRpb25zQ2FjaGU7XG4gIF9leHByZXNzaW9uUHJvcGVydGllcz86IHsgW3Byb3BlcnR5OiBzdHJpbmddOiBFeHByZXNzaW9uUHJvcGVydHlDYWNoZSB9O1xuICBfdmFsaWRhdG9ycz86IFZhbGlkYXRvckZuO1xuICBfYXN5bmNWYWxpZGF0b3JzPzogQXN5bmNWYWxpZGF0b3JGbjtcbiAgX2NvbXBvbmVudFJlZnM/OiBDb21wb25lbnRSZWY8RmllbGRUeXBlPltdO1xuICBfY29tcG9uZW50RmFjdG9yeT86IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgY29tcG9uZW50OiBhbnk7XG4gICAgY29tcG9uZW50UmVmPzogQ29tcG9uZW50UmVmPEZpZWxkVHlwZT47XG4gIH07XG4gIF9rZXlQYXRoPzoge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZ1tdO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBGb3JtbHlBdHRyaWJ1dGVFdmVudCA9IChmaWVsZDogRm9ybWx5RmllbGRDb25maWcsIGV2ZW50PzogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seVRlbXBsYXRlT3B0aW9ucyB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBvcHRpb25zPzogYW55W10gfCBPYnNlcnZhYmxlPGFueVtdPjtcbiAgcm93cz86IG51bWJlcjtcbiAgY29scz86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIG1heD86IG51bWJlcjtcbiAgbWluPzogbnVtYmVyO1xuICBtaW5MZW5ndGg/OiBudW1iZXI7XG4gIG1heExlbmd0aD86IG51bWJlcjtcbiAgcGF0dGVybj86IHN0cmluZ3xSZWdFeHA7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgdGFiaW5kZXg/OiBudW1iZXI7XG4gIHJlYWRvbmx5PzogYm9vbGVhbjtcbiAgYXR0cmlidXRlcz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlciB9O1xuICBzdGVwPzogbnVtYmVyO1xuICBmb2N1cz86IEZvcm1seUF0dHJpYnV0ZUV2ZW50O1xuICBibHVyPzogRm9ybWx5QXR0cmlidXRlRXZlbnQ7XG4gIGtleXVwPzogRm9ybWx5QXR0cmlidXRlRXZlbnQ7XG4gIGtleWRvd24/OiBGb3JtbHlBdHRyaWJ1dGVFdmVudDtcbiAgY2xpY2s/OiBGb3JtbHlBdHRyaWJ1dGVFdmVudDtcbiAgY2hhbmdlPzogRm9ybWx5QXR0cmlidXRlRXZlbnQ7XG4gIGtleXByZXNzPzogRm9ybWx5QXR0cmlidXRlRXZlbnQ7XG4gIHRlbXBsYXRlTWFuaXB1bGF0b3JzPzogVGVtcGxhdGVNYW5pcHVsYXRvcnM7XG4gIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUxpZmVDeWNsZUZuIHtcbiAgKGZvcm0/OiBGb3JtR3JvdXAsIGZpZWxkPzogRm9ybWx5RmllbGRDb25maWcsIG1vZGVsPzogYW55LCBvcHRpb25zPzogRm9ybWx5Rm9ybU9wdGlvbnMpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUhvb2tGbiB7XG4gIChmaWVsZD86IEZvcm1seUZpZWxkQ29uZmlnKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtbHlMaWZlQ3ljbGVPcHRpb25zPFQgPSBGb3JtbHlMaWZlQ3ljbGVGbj4ge1xuICBvbkluaXQ/OiBUO1xuICBvbkNoYW5nZXM/OiBUO1xuICBkb0NoZWNrPzogVDtcbiAgYWZ0ZXJDb250ZW50SW5pdD86IFQ7XG4gIGFmdGVyQ29udGVudENoZWNrZWQ/OiBUO1xuICBhZnRlclZpZXdJbml0PzogVDtcbiAgYWZ0ZXJWaWV3Q2hlY2tlZD86IFQ7XG4gIG9uRGVzdHJveT86IFQ7XG4gIFthZGRpdGlvbmFsUHJvcGVydGllczogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seUZvcm1PcHRpb25zQ2FjaGUgZXh0ZW5kcyBGb3JtbHlGb3JtT3B0aW9ucyB7XG4gIF9jaGVja0ZpZWxkPzogKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCBpZ25vcmVDYWNoZT86IGJvb2xlYW4pID0+IHZvaWQ7XG4gIF9tYXJrRm9yQ2hlY2s/OiAoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpID0+IHZvaWQ7XG4gIF9idWlsZEZvcm0/OiAoKSA9PiB2b2lkO1xuICBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyPzogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICBfaW5qZWN0b3I/OiBJbmplY3Rvcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWx5Rm9ybU9wdGlvbnMge1xuICB1cGRhdGVJbml0aWFsVmFsdWU/OiAoKSA9PiB2b2lkO1xuICByZXNldE1vZGVsPzogKG1vZGVsPzogYW55KSA9PiB2b2lkO1xuICBmb3JtU3RhdGU/OiBhbnk7XG4gIGZpZWxkQ2hhbmdlcz86IFN1YmplY3Q8Rm9ybWx5VmFsdWVDaGFuZ2VFdmVudD47XG4gIGZpZWxkVHJhbnNmb3JtPzogKGZpZWxkczogRm9ybWx5RmllbGRDb25maWdbXSwgbW9kZWw6IGFueSwgZm9ybTogRm9ybUdyb3VwIHwgRm9ybUFycmF5LCBvcHRpb25zOiBGb3JtbHlGb3JtT3B0aW9ucykgPT4gRm9ybWx5RmllbGRDb25maWdbXTtcbiAgc2hvd0Vycm9yPzogKGZpZWxkOiBGaWVsZFR5cGUpID0+IGJvb2xlYW47XG4gIHBhcmVudEZvcm0/OiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1seVZhbHVlQ2hhbmdlRXZlbnQge1xuICBmaWVsZDogRm9ybWx5RmllbGRDb25maWc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbn1cblxuIl19