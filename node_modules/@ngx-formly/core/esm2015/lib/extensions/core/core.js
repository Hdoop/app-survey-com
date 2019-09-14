/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getFieldId, assignModelValue, isUndefined, getFieldValue, reverseDeepMerge, getKeyPath } from '../../utils';
/**
 * \@experimental
 */
export class CoreExtension {
    /**
     * @param {?} formlyConfig
     */
    constructor(formlyConfig) {
        this.formlyConfig = formlyConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        const fieldTransforms = (field.options && field.options.fieldTransform) || this.formlyConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms) ? fieldTransforms : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        fieldTransform => {
            if (fieldTransform) {
                console.warn(`NgxFormly: fieldTransform is deprecated since v5.0, use custom extension instead.`);
                /** @type {?} */
                const fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
                if (!fieldGroup) {
                    throw new Error('fieldTransform must return an array of fields');
                }
            }
        }));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            (f, index) => {
                Object.defineProperty(f, 'parent', { get: (/**
                     * @return {?}
                     */
                    () => field), configurable: true });
                Object.defineProperty(f, 'index', { get: (/**
                     * @return {?}
                     */
                    () => index), configurable: true });
                this.formId++;
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        this.getFieldComponentInstance(field).postPopulate();
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldOptions(field) {
        /** @type {?} */
        const root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, 'form', { get: (/**
             * @return {?}
             */
            () => root.formControl), configurable: true });
        Object.defineProperty(field, 'options', { get: (/**
             * @return {?}
             */
            () => root.options), configurable: true });
        Object.defineProperty(field, 'model', {
            get: (/**
             * @return {?}
             */
            () => field.key && field.fieldGroup ? getFieldValue(field) : root.model),
            configurable: true,
        });
        reverseDeepMerge(field, {
            id: getFieldId(`formly_${this.formId}`, field, field['index']),
            hooks: {},
            modelOptions: {},
            templateOptions: !field.type || !field.key ? {} : {
                label: '',
                placeholder: '',
                focus: false,
            },
        });
        if (field.lifecycle) {
            console.warn(`NgxFormly: 'lifecycle' is deprecated since v5.0, use 'hooks' instead.`);
        }
        if (field.template && field.type !== 'formly-template') {
            if (field.type) {
                console.warn(`NgxFormly: passing 'type' property is not allowed when 'template' is set.`);
            }
            field.type = 'formly-template';
        }
        if (!field.type && field.fieldGroup) {
            field.type = 'formly-group';
        }
        if (field.type) {
            this.formlyConfig.getMergedField(field);
        }
        if (!isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
            assignModelValue(root.model, getKeyPath(field), field.defaultValue);
        }
        this.initFieldWrappers(field);
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    initFieldWrappers(field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        const fieldTemplateManipulators = Object.assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = [
            ...this.formlyConfig.templateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.preWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...field.wrappers,
            ...this.formlyConfig.templateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
            ...fieldTemplateManipulators.postWrapper.map((/**
             * @param {?} m
             * @return {?}
             */
            m => m(field))),
        ].filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        (el, i, a) => el && i === a.indexOf(el)));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getFieldComponentInstance(field) {
        /** @type {?} */
        const componentRef = this.formlyConfig.createComponent(field);
        /** @type {?} */
        const instance = componentRef ? (/** @type {?} */ (componentRef.instance)) : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            () => instance.prePopulate && instance.prePopulate(field)),
            onPopulate: (/**
             * @return {?}
             */
            () => instance.onPopulate && instance.onPopulate(field)),
            postPopulate: (/**
             * @return {?}
             */
            () => instance.postPopulate && instance.postPopulate(field)),
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CoreExtension.prototype.formId;
    /**
     * @type {?}
     * @private
     */
    CoreExtension.prototype.formlyConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9jb3JlL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFHckgsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFEdEMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQUMrQixDQUFDOzs7OztJQUVuRCxXQUFXLENBQUMsS0FBNkI7UUFDdkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7O2NBRUssZUFBZSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWM7UUFDbEgsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDOUYsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUZBQW1GLENBQUMsQ0FBQzs7c0JBQzVGLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLG1CQUFXLEtBQUssQ0FBQyxXQUFXLEVBQUEsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUM3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Q0FBQTtTQUMxRSxDQUFDO0lBQ0osQ0FBQztDQUNGOzs7Ozs7SUFsSEMsK0JBQW1COzs7OztJQUNQLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1seUV4dGVuc2lvbiwgRm9ybWx5Q29uZmlnLCBUZW1wbGF0ZU1hbmlwdWxhdG9ycyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWdDYWNoZSwgRm9ybWx5RmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0RmllbGRJZCwgYXNzaWduTW9kZWxWYWx1ZSwgaXNVbmRlZmluZWQsIGdldEZpZWxkVmFsdWUsIHJldmVyc2VEZWVwTWVyZ2UsIGdldEtleVBhdGggfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKiBAZXhwZXJpbWVudGFsICovXG5leHBvcnQgY2xhc3MgQ29yZUV4dGVuc2lvbiBpbXBsZW1lbnRzIEZvcm1seUV4dGVuc2lvbiB7XG4gIHByaXZhdGUgZm9ybUlkID0gMDtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtbHlDb25maWc6IEZvcm1seUNvbmZpZykgeyB9XG5cbiAgcHJlUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnByZVBvcHVsYXRlKCk7XG4gICAgaWYgKGZpZWxkLnBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkVHJhbnNmb3JtcyA9IChmaWVsZC5vcHRpb25zICYmIGZpZWxkLm9wdGlvbnMuZmllbGRUcmFuc2Zvcm0pIHx8IHRoaXMuZm9ybWx5Q29uZmlnLmV4dHJhcy5maWVsZFRyYW5zZm9ybTtcbiAgICAoQXJyYXkuaXNBcnJheShmaWVsZFRyYW5zZm9ybXMpID8gZmllbGRUcmFuc2Zvcm1zIDogW2ZpZWxkVHJhbnNmb3Jtc10pLmZvckVhY2goZmllbGRUcmFuc2Zvcm0gPT4ge1xuICAgICAgaWYgKGZpZWxkVHJhbnNmb3JtKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTmd4Rm9ybWx5OiBmaWVsZFRyYW5zZm9ybSBpcyBkZXByZWNhdGVkIHNpbmNlIHY1LjAsIHVzZSBjdXN0b20gZXh0ZW5zaW9uIGluc3RlYWQuYCk7XG4gICAgICAgIGNvbnN0IGZpZWxkR3JvdXAgPSBmaWVsZFRyYW5zZm9ybShmaWVsZC5maWVsZEdyb3VwLCBmaWVsZC5tb2RlbCwgPEZvcm1Hcm91cD5maWVsZC5mb3JtQ29udHJvbCwgZmllbGQub3B0aW9ucyk7XG4gICAgICAgIGlmICghZmllbGRHcm91cCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGRUcmFuc2Zvcm0gbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgZmllbGRzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICB0aGlzLmluaXRGaWVsZE9wdGlvbnMoZmllbGQpO1xuICAgIHRoaXMuZ2V0RmllbGRDb21wb25lbnRJbnN0YW5jZShmaWVsZCkub25Qb3B1bGF0ZSgpO1xuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XG4gICAgICBmaWVsZC5maWVsZEdyb3VwLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCAncGFyZW50JywgeyBnZXQ6ICgpID0+IGZpZWxkLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCAnaW5kZXgnLCB7IGdldDogKCkgPT4gaW5kZXgsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5mb3JtSWQrKztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIHRoaXMuZ2V0RmllbGRDb21wb25lbnRJbnN0YW5jZShmaWVsZCkucG9zdFBvcHVsYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGaWVsZE9wdGlvbnMoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBjb25zdCByb290ID0gPEZvcm1seUZpZWxkQ29uZmlnQ2FjaGU+IGZpZWxkLnBhcmVudDtcbiAgICBpZiAoIXJvb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsICdmb3JtJywgeyBnZXQ6ICgpID0+IHJvb3QuZm9ybUNvbnRyb2wsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsICdvcHRpb25zJywgeyBnZXQ6ICgpID0+IHJvb3Qub3B0aW9ucywgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZCwgJ21vZGVsJywge1xuICAgICAgZ2V0OiAoKSA9PiBmaWVsZC5rZXkgJiYgZmllbGQuZmllbGRHcm91cCA/IGdldEZpZWxkVmFsdWUoZmllbGQpIDogcm9vdC5tb2RlbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldmVyc2VEZWVwTWVyZ2UoZmllbGQsIHtcbiAgICAgIGlkOiBnZXRGaWVsZElkKGBmb3JtbHlfJHt0aGlzLmZvcm1JZH1gLCBmaWVsZCwgZmllbGRbJ2luZGV4J10pLFxuICAgICAgaG9va3M6IHt9LFxuICAgICAgbW9kZWxPcHRpb25zOiB7fSxcbiAgICAgIHRlbXBsYXRlT3B0aW9uczogIWZpZWxkLnR5cGUgfHwgIWZpZWxkLmtleSA/IHt9IDoge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChmaWVsZC5saWZlY3ljbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgTmd4Rm9ybWx5OiAnbGlmZWN5Y2xlJyBpcyBkZXByZWNhdGVkIHNpbmNlIHY1LjAsIHVzZSAnaG9va3MnIGluc3RlYWQuYCk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLnRlbXBsYXRlICYmIGZpZWxkLnR5cGUgIT09ICdmb3JtbHktdGVtcGxhdGUnKSB7XG4gICAgICBpZiAoZmllbGQudHlwZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5neEZvcm1seTogcGFzc2luZyAndHlwZScgcHJvcGVydHkgaXMgbm90IGFsbG93ZWQgd2hlbiAndGVtcGxhdGUnIGlzIHNldC5gKTtcbiAgICAgIH1cbiAgICAgIGZpZWxkLnR5cGUgPSAnZm9ybWx5LXRlbXBsYXRlJztcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkLnR5cGUgJiYgZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgZmllbGQudHlwZSA9ICdmb3JtbHktZ3JvdXAnO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlKSB7XG4gICAgICB0aGlzLmZvcm1seUNvbmZpZy5nZXRNZXJnZWRGaWVsZChmaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChmaWVsZC5kZWZhdWx0VmFsdWUpICYmIGlzVW5kZWZpbmVkKGdldEZpZWxkVmFsdWUoZmllbGQpKSkge1xuICAgICAgYXNzaWduTW9kZWxWYWx1ZShyb290Lm1vZGVsLCBnZXRLZXlQYXRoKGZpZWxkKSwgZmllbGQuZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRGaWVsZFdyYXBwZXJzKGZpZWxkKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZpZWxkV3JhcHBlcnMoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gICAgZmllbGQud3JhcHBlcnMgPSBmaWVsZC53cmFwcGVycyB8fCBbXTtcbiAgICBjb25zdCBmaWVsZFRlbXBsYXRlTWFuaXB1bGF0b3JzOiBUZW1wbGF0ZU1hbmlwdWxhdG9ycyA9IHtcbiAgICAgIHByZVdyYXBwZXI6IFtdLFxuICAgICAgcG9zdFdyYXBwZXI6IFtdLFxuICAgICAgLi4uKGZpZWxkLnRlbXBsYXRlT3B0aW9ucy50ZW1wbGF0ZU1hbmlwdWxhdG9ycyB8fCB7fSksXG4gICAgfTtcblxuICAgIGZpZWxkLndyYXBwZXJzID0gW1xuICAgICAgLi4udGhpcy5mb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucHJlV3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXG4gICAgICAuLi5maWVsZFRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIubWFwKG0gPT4gbShmaWVsZCkpLFxuICAgICAgLi4uZmllbGQud3JhcHBlcnMsXG4gICAgICAuLi50aGlzLmZvcm1seUNvbmZpZy50ZW1wbGF0ZU1hbmlwdWxhdG9ycy5wb3N0V3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXG4gICAgICAuLi5maWVsZFRlbXBsYXRlTWFuaXB1bGF0b3JzLnBvc3RXcmFwcGVyLm1hcChtID0+IG0oZmllbGQpKSxcbiAgICBdLmZpbHRlcigoZWwsIGksIGEpID0+IGVsICYmIGkgPT09IGEuaW5kZXhPZihlbCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWVsZENvbXBvbmVudEluc3RhbmNlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5mb3JtbHlDb25maWcuY3JlYXRlQ29tcG9uZW50KGZpZWxkKTtcbiAgICBjb25zdCBpbnN0YW5jZTogRm9ybWx5RXh0ZW5zaW9uID0gY29tcG9uZW50UmVmID8gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIGFueSA6IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByZVBvcHVsYXRlOiAoKSA9PiBpbnN0YW5jZS5wcmVQb3B1bGF0ZSAmJiBpbnN0YW5jZS5wcmVQb3B1bGF0ZShmaWVsZCksXG4gICAgICBvblBvcHVsYXRlOiAoKSA9PiBpbnN0YW5jZS5vblBvcHVsYXRlICYmIGluc3RhbmNlLm9uUG9wdWxhdGUoZmllbGQpLFxuICAgICAgcG9zdFBvcHVsYXRlOiAoKSA9PiBpbnN0YW5jZS5wb3N0UG9wdWxhdGUgJiYgaW5zdGFuY2UucG9zdFBvcHVsYXRlKGZpZWxkKSxcbiAgICB9O1xuICB9XG59XG4iXX0=