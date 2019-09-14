/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getFieldId, assignModelValue, isUndefined, getFieldValue, reverseDeepMerge, getKeyPath } from '../../utils';
/**
 * \@experimental
 */
var /**
 * \@experimental
 */
CoreExtension = /** @class */ (function () {
    function CoreExtension(formlyConfig) {
        this.formlyConfig = formlyConfig;
        this.formId = 0;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.prePopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.getFieldComponentInstance(field).prePopulate();
        if (field.parent) {
            return;
        }
        /** @type {?} */
        var fieldTransforms = (field.options && field.options.fieldTransform) || this.formlyConfig.extras.fieldTransform;
        (Array.isArray(fieldTransforms) ? fieldTransforms : [fieldTransforms]).forEach((/**
         * @param {?} fieldTransform
         * @return {?}
         */
        function (fieldTransform) {
            if (fieldTransform) {
                console.warn("NgxFormly: fieldTransform is deprecated since v5.0, use custom extension instead.");
                /** @type {?} */
                var fieldGroup = fieldTransform(field.fieldGroup, field.model, (/** @type {?} */ (field.formControl)), field.options);
                if (!fieldGroup) {
                    throw new Error('fieldTransform must return an array of fields');
                }
            }
        }));
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        this.initFieldOptions(field);
        this.getFieldComponentInstance(field).onPopulate();
        if (field.fieldGroup) {
            field.fieldGroup.forEach((/**
             * @param {?} f
             * @param {?} index
             * @return {?}
             */
            function (f, index) {
                Object.defineProperty(f, 'parent', { get: (/**
                     * @return {?}
                     */
                    function () { return field; }), configurable: true });
                Object.defineProperty(f, 'index', { get: (/**
                     * @return {?}
                     */
                    function () { return index; }), configurable: true });
                _this.formId++;
            }));
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.getFieldComponentInstance(field).postPopulate();
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.initFieldOptions = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var root = (/** @type {?} */ (field.parent));
        if (!root) {
            return;
        }
        Object.defineProperty(field, 'form', { get: (/**
             * @return {?}
             */
            function () { return root.formControl; }), configurable: true });
        Object.defineProperty(field, 'options', { get: (/**
             * @return {?}
             */
            function () { return root.options; }), configurable: true });
        Object.defineProperty(field, 'model', {
            get: (/**
             * @return {?}
             */
            function () { return field.key && field.fieldGroup ? getFieldValue(field) : root.model; }),
            configurable: true,
        });
        reverseDeepMerge(field, {
            id: getFieldId("formly_" + this.formId, field, field['index']),
            hooks: {},
            modelOptions: {},
            templateOptions: !field.type || !field.key ? {} : {
                label: '',
                placeholder: '',
                focus: false,
            },
        });
        if (field.lifecycle) {
            console.warn("NgxFormly: 'lifecycle' is deprecated since v5.0, use 'hooks' instead.");
        }
        if (field.template && field.type !== 'formly-template') {
            if (field.type) {
                console.warn("NgxFormly: passing 'type' property is not allowed when 'template' is set.");
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
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.initFieldWrappers = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        field.wrappers = field.wrappers || [];
        /** @type {?} */
        var fieldTemplateManipulators = tslib_1.__assign({ preWrapper: [], postWrapper: [] }, (field.templateOptions.templateManipulators || {}));
        field.wrappers = tslib_1.__spread(this.formlyConfig.templateManipulators.preWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), fieldTemplateManipulators.preWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), field.wrappers, this.formlyConfig.templateManipulators.postWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); })), fieldTemplateManipulators.postWrapper.map((/**
         * @param {?} m
         * @return {?}
         */
        function (m) { return m(field); }))).filter((/**
         * @param {?} el
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        function (el, i, a) { return el && i === a.indexOf(el); }));
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    CoreExtension.prototype.getFieldComponentInstance = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var componentRef = this.formlyConfig.createComponent(field);
        /** @type {?} */
        var instance = componentRef ? (/** @type {?} */ (componentRef.instance)) : {};
        return {
            prePopulate: (/**
             * @return {?}
             */
            function () { return instance.prePopulate && instance.prePopulate(field); }),
            onPopulate: (/**
             * @return {?}
             */
            function () { return instance.onPopulate && instance.onPopulate(field); }),
            postPopulate: (/**
             * @return {?}
             */
            function () { return instance.postPopulate && instance.postPopulate(field); }),
        };
    };
    return CoreExtension;
}());
/**
 * \@experimental
 */
export { CoreExtension };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9jb3JlL2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3JIOzs7O0lBRUUsdUJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRHRDLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFDK0IsQ0FBQzs7Ozs7SUFFbkQsbUNBQVc7Ozs7SUFBWCxVQUFZLEtBQTZCO1FBQ3ZDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSOztZQUVLLGVBQWUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjO1FBQ2xILENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsY0FBYztZQUMzRixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxtRkFBbUYsQ0FBQyxDQUFDOztvQkFDNUYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsbUJBQVcsS0FBSyxDQUFDLFdBQVcsRUFBQSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzdHLElBQUksQ0FB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akQsQ0FBaUQsQ0FBQTtZQUNuRSxZQUFZOzs7WUFBRSxjQUFNLE9BQUEsUUFBUSxDQUFDLFlBQVksSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFyRCxDQUFxRCxDQUFBO1NBQzFFLENBQUM7SUFDSixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkhELElBbUhDOzs7Ozs7Ozs7O0lBbEhDLCtCQUFtQjs7Ozs7SUFDUCxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtbHlFeHRlbnNpb24sIEZvcm1seUNvbmZpZywgVGVtcGxhdGVNYW5pcHVsYXRvcnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtbHkuY29uZmlnJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGdldEZpZWxkSWQsIGFzc2lnbk1vZGVsVmFsdWUsIGlzVW5kZWZpbmVkLCBnZXRGaWVsZFZhbHVlLCByZXZlcnNlRGVlcE1lcmdlLCBnZXRLZXlQYXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiogQGV4cGVyaW1lbnRhbCAqL1xuZXhwb3J0IGNsYXNzIENvcmVFeHRlbnNpb24gaW1wbGVtZW50cyBGb3JtbHlFeHRlbnNpb24ge1xuICBwcml2YXRlIGZvcm1JZCA9IDA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybWx5Q29uZmlnOiBGb3JtbHlDb25maWcpIHsgfVxuXG4gIHByZVBvcHVsYXRlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgdGhpcy5nZXRGaWVsZENvbXBvbmVudEluc3RhbmNlKGZpZWxkKS5wcmVQb3B1bGF0ZSgpO1xuICAgIGlmIChmaWVsZC5wYXJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZFRyYW5zZm9ybXMgPSAoZmllbGQub3B0aW9ucyAmJiBmaWVsZC5vcHRpb25zLmZpZWxkVHJhbnNmb3JtKSB8fCB0aGlzLmZvcm1seUNvbmZpZy5leHRyYXMuZmllbGRUcmFuc2Zvcm07XG4gICAgKEFycmF5LmlzQXJyYXkoZmllbGRUcmFuc2Zvcm1zKSA/IGZpZWxkVHJhbnNmb3JtcyA6IFtmaWVsZFRyYW5zZm9ybXNdKS5mb3JFYWNoKGZpZWxkVHJhbnNmb3JtID0+IHtcbiAgICAgIGlmIChmaWVsZFRyYW5zZm9ybSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5neEZvcm1seTogZmllbGRUcmFuc2Zvcm0gaXMgZGVwcmVjYXRlZCBzaW5jZSB2NS4wLCB1c2UgY3VzdG9tIGV4dGVuc2lvbiBpbnN0ZWFkLmApO1xuICAgICAgICBjb25zdCBmaWVsZEdyb3VwID0gZmllbGRUcmFuc2Zvcm0oZmllbGQuZmllbGRHcm91cCwgZmllbGQubW9kZWwsIDxGb3JtR3JvdXA+ZmllbGQuZm9ybUNvbnRyb2wsIGZpZWxkLm9wdGlvbnMpO1xuICAgICAgICBpZiAoIWZpZWxkR3JvdXApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkVHJhbnNmb3JtIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIGZpZWxkcycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblBvcHVsYXRlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgdGhpcy5pbml0RmllbGRPcHRpb25zKGZpZWxkKTtcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLm9uUG9wdWxhdGUoKTtcbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgZmllbGQuZmllbGRHcm91cC5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgJ3BhcmVudCcsIHsgZ2V0OiAoKSA9PiBmaWVsZCwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgJ2luZGV4JywgeyBnZXQ6ICgpID0+IGluZGV4LCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuZm9ybUlkKys7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwb3N0UG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICB0aGlzLmdldEZpZWxkQ29tcG9uZW50SW5zdGFuY2UoZmllbGQpLnBvc3RQb3B1bGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0RmllbGRPcHRpb25zKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgY29uc3Qgcm9vdCA9IDxGb3JtbHlGaWVsZENvbmZpZ0NhY2hlPiBmaWVsZC5wYXJlbnQ7XG4gICAgaWYgKCFyb290KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCAnZm9ybScsIHsgZ2V0OiAoKSA9PiByb290LmZvcm1Db250cm9sLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLCAnb3B0aW9ucycsIHsgZ2V0OiAoKSA9PiByb290Lm9wdGlvbnMsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZmllbGQsICdtb2RlbCcsIHtcbiAgICAgIGdldDogKCkgPT4gZmllbGQua2V5ICYmIGZpZWxkLmZpZWxkR3JvdXAgPyBnZXRGaWVsZFZhbHVlKGZpZWxkKSA6IHJvb3QubW9kZWwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXZlcnNlRGVlcE1lcmdlKGZpZWxkLCB7XG4gICAgICBpZDogZ2V0RmllbGRJZChgZm9ybWx5XyR7dGhpcy5mb3JtSWR9YCwgZmllbGQsIGZpZWxkWydpbmRleCddKSxcbiAgICAgIGhvb2tzOiB7fSxcbiAgICAgIG1vZGVsT3B0aW9uczoge30sXG4gICAgICB0ZW1wbGF0ZU9wdGlvbnM6ICFmaWVsZC50eXBlIHx8ICFmaWVsZC5rZXkgPyB7fSA6IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGQubGlmZWN5Y2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5neEZvcm1seTogJ2xpZmVjeWNsZScgaXMgZGVwcmVjYXRlZCBzaW5jZSB2NS4wLCB1c2UgJ2hvb2tzJyBpbnN0ZWFkLmApO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50ZW1wbGF0ZSAmJiBmaWVsZC50eXBlICE9PSAnZm9ybWx5LXRlbXBsYXRlJykge1xuICAgICAgaWYgKGZpZWxkLnR5cGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBOZ3hGb3JtbHk6IHBhc3NpbmcgJ3R5cGUnIHByb3BlcnR5IGlzIG5vdCBhbGxvd2VkIHdoZW4gJ3RlbXBsYXRlJyBpcyBzZXQuYCk7XG4gICAgICB9XG4gICAgICBmaWVsZC50eXBlID0gJ2Zvcm1seS10ZW1wbGF0ZSc7XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZC50eXBlICYmIGZpZWxkLmZpZWxkR3JvdXApIHtcbiAgICAgIGZpZWxkLnR5cGUgPSAnZm9ybWx5LWdyb3VwJztcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSkge1xuICAgICAgdGhpcy5mb3JtbHlDb25maWcuZ2V0TWVyZ2VkRmllbGQoZmllbGQpO1xuICAgIH1cblxuICAgIGlmICghaXNVbmRlZmluZWQoZmllbGQuZGVmYXVsdFZhbHVlKSAmJiBpc1VuZGVmaW5lZChnZXRGaWVsZFZhbHVlKGZpZWxkKSkpIHtcbiAgICAgIGFzc2lnbk1vZGVsVmFsdWUocm9vdC5tb2RlbCwgZ2V0S2V5UGF0aChmaWVsZCksIGZpZWxkLmRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0RmllbGRXcmFwcGVycyhmaWVsZCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGaWVsZFdyYXBwZXJzKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykge1xuICAgIGZpZWxkLndyYXBwZXJzID0gZmllbGQud3JhcHBlcnMgfHwgW107XG4gICAgY29uc3QgZmllbGRUZW1wbGF0ZU1hbmlwdWxhdG9yczogVGVtcGxhdGVNYW5pcHVsYXRvcnMgPSB7XG4gICAgICBwcmVXcmFwcGVyOiBbXSxcbiAgICAgIHBvc3RXcmFwcGVyOiBbXSxcbiAgICAgIC4uLihmaWVsZC50ZW1wbGF0ZU9wdGlvbnMudGVtcGxhdGVNYW5pcHVsYXRvcnMgfHwge30pLFxuICAgIH07XG5cbiAgICBmaWVsZC53cmFwcGVycyA9IFtcbiAgICAgIC4uLnRoaXMuZm9ybWx5Q29uZmlnLnRlbXBsYXRlTWFuaXB1bGF0b3JzLnByZVdyYXBwZXIubWFwKG0gPT4gbShmaWVsZCkpLFxuICAgICAgLi4uZmllbGRUZW1wbGF0ZU1hbmlwdWxhdG9ycy5wcmVXcmFwcGVyLm1hcChtID0+IG0oZmllbGQpKSxcbiAgICAgIC4uLmZpZWxkLndyYXBwZXJzLFxuICAgICAgLi4udGhpcy5mb3JtbHlDb25maWcudGVtcGxhdGVNYW5pcHVsYXRvcnMucG9zdFdyYXBwZXIubWFwKG0gPT4gbShmaWVsZCkpLFxuICAgICAgLi4uZmllbGRUZW1wbGF0ZU1hbmlwdWxhdG9ycy5wb3N0V3JhcHBlci5tYXAobSA9PiBtKGZpZWxkKSksXG4gICAgXS5maWx0ZXIoKGVsLCBpLCBhKSA9PiBlbCAmJiBpID09PSBhLmluZGV4T2YoZWwpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmllbGRDb21wb25lbnRJbnN0YW5jZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZm9ybWx5Q29uZmlnLmNyZWF0ZUNvbXBvbmVudChmaWVsZCk7XG4gICAgY29uc3QgaW5zdGFuY2U6IEZvcm1seUV4dGVuc2lvbiA9IGNvbXBvbmVudFJlZiA/IGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkgOiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcmVQb3B1bGF0ZTogKCkgPT4gaW5zdGFuY2UucHJlUG9wdWxhdGUgJiYgaW5zdGFuY2UucHJlUG9wdWxhdGUoZmllbGQpLFxuICAgICAgb25Qb3B1bGF0ZTogKCkgPT4gaW5zdGFuY2Uub25Qb3B1bGF0ZSAmJiBpbnN0YW5jZS5vblBvcHVsYXRlKGZpZWxkKSxcbiAgICAgIHBvc3RQb3B1bGF0ZTogKCkgPT4gaW5zdGFuY2UucG9zdFBvcHVsYXRlICYmIGluc3RhbmNlLnBvc3RQb3B1bGF0ZShmaWVsZCksXG4gICAgfTtcbiAgfVxufVxuIl19