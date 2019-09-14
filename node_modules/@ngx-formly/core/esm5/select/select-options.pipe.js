/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
var FormlySelectOptionsPipe = /** @class */ (function () {
    function FormlySelectOptionsPipe() {
    }
    /**
     * @param {?} options
     * @param {?=} field
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.transform = /**
     * @param {?} options
     * @param {?=} field
     * @return {?}
     */
    function (options, field) {
        var _this = this;
        if (!(options instanceof Observable)) {
            options = observableOf(options);
        }
        return ((/** @type {?} */ (options))).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.toOptions(value, field || {}); })));
    };
    /**
     * @private
     * @param {?} options
     * @param {?} field
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.toOptions = /**
     * @private
     * @param {?} options
     * @param {?} field
     * @return {?}
     */
    function (options, field) {
        var _this = this;
        /** @type {?} */
        var gOptions = [];
        /** @type {?} */
        var groups = {};
        /** @type {?} */
        var to = field.templateOptions || {};
        options.map((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (!_this.getGroupProp(option, to)) {
                gOptions.push(_this.toOption(option, to));
            }
            else {
                if (!groups[_this.getGroupProp(option, to)]) {
                    groups[_this.getGroupProp(option, to)] = [];
                    gOptions.push({
                        label: _this.getGroupProp(option, to),
                        group: groups[_this.getGroupProp(option, to)],
                    });
                }
                groups[_this.getGroupProp(option, to)].push(_this.toOption(option, to));
            }
        }));
        return gOptions;
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.toOption = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        return {
            label: this.getLabelProp(item, to),
            value: this.getValueProp(item, to),
            disabled: this.getDisabledProp(item, to) || false,
        };
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.getLabelProp = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        if (typeof to.labelProp === 'function') {
            return to.labelProp(item);
        }
        if (this.shouldUseLegacyOption(item, to)) {
            return item.value;
        }
        return item[to.labelProp || 'label'];
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.getValueProp = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        if (typeof to.valueProp === 'function') {
            return to.valueProp(item);
        }
        if (this.shouldUseLegacyOption(item, to)) {
            return item.key;
        }
        return item[to.valueProp || 'value'];
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.getDisabledProp = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        if (typeof to.disabledProp === 'function') {
            return to.disabledProp(item);
        }
        return item[to.disabledProp || 'disabled'];
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.getGroupProp = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        if (typeof to.groupProp === 'function') {
            return to.groupProp(item);
        }
        return item[to.groupProp || 'group'];
    };
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    FormlySelectOptionsPipe.prototype.shouldUseLegacyOption = /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    function (item, to) {
        return !to.valueProp
            && !to.labelProp
            && item != null
            && typeof item === 'object'
            && 'key' in item
            && 'value' in item;
    };
    FormlySelectOptionsPipe.decorators = [
        { type: Pipe, args: [{ name: 'formlySelectOptions' },] }
    ];
    return FormlySelectOptionsPipe;
}());
export { FormlySelectOptionsPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0LyIsInNvdXJjZXMiOlsic2VsZWN0LW9wdGlvbnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQztJQUFBO0lBMEZBLENBQUM7Ozs7OztJQXhGQywyQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQU8sRUFBRSxLQUF5QjtRQUE1QyxpQkFRQztRQVBDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxVQUFVLENBQUMsRUFBRTtZQUNwQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxDQUFDLG1CQUFBLE9BQU8sRUFBbUIsQ0FBQyxDQUFDLElBQUksQ0FDdEMsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQ2pELENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRU8sMkNBQVM7Ozs7OztJQUFqQixVQUFrQixPQUFPLEVBQUUsS0FBd0I7UUFBbkQsaUJBcUJDOztZQXBCTyxRQUFRLEdBQVUsRUFBRTs7WUFDeEIsTUFBTSxHQUE2QixFQUFFOztZQUNyQyxFQUFFLEdBQUcsS0FBSyxDQUFDLGVBQWUsSUFBSSxFQUFFO1FBRWxDLE9BQU8sQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUFXO1lBQ3RCLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFD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U0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBRUQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBRU8sdURBQXFCOzs7Ozs7SUFBN0IsVUFBOEIsSUFBSSxFQUFFLEVBQUU7UUFDcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTO2VBQ2YsQ0FBQyxFQUFFLENBQUMsU0FBUztlQUNiLElBQUksSUFBSSxJQUFJO2VBQ1osT0FBTyxJQUFJLEtBQUssUUFBUTtlQUN4QixLQUFLLElBQUksSUFBSTtlQUNiLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Z0JBekZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7SUEwRnJDLDhCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0F6RlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGb3JtbHlGaWVsZENvbmZpZyB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdmb3JtbHlTZWxlY3RPcHRpb25zJyB9KVxuZXhwb3J0IGNsYXNzIEZvcm1seVNlbGVjdE9wdGlvbnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvcHRpb25zLCBmaWVsZD86IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gICAgaWYgKCEob3B0aW9ucyBpbnN0YW5jZW9mIE9ic2VydmFibGUpKSB7XG4gICAgICBvcHRpb25zID0gb2JzZXJ2YWJsZU9mKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiAob3B0aW9ucyBhcyBPYnNlcnZhYmxlPGFueT4pLnBpcGUoXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy50b09wdGlvbnModmFsdWUsIGZpZWxkIHx8IHt9KSksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9PcHRpb25zKG9wdGlvbnMsIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykge1xuICAgIGNvbnN0IGdPcHRpb25zOiBhbnlbXSA9IFtdLFxuICAgICAgZ3JvdXBzOiB7IFtrZXk6IHN0cmluZ106IGFueVtdIH0gPSB7fSxcbiAgICAgIHRvID0gZmllbGQudGVtcGxhdGVPcHRpb25zIHx8IHt9O1xuXG4gICAgb3B0aW9ucy5tYXAoKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuZ2V0R3JvdXBQcm9wKG9wdGlvbiwgdG8pKSB7XG4gICAgICAgIGdPcHRpb25zLnB1c2godGhpcy50b09wdGlvbihvcHRpb24sIHRvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWdyb3Vwc1t0aGlzLmdldEdyb3VwUHJvcChvcHRpb24sIHRvKV0pIHtcbiAgICAgICAgICBncm91cHNbdGhpcy5nZXRHcm91cFByb3Aob3B0aW9uLCB0byldID0gW107XG4gICAgICAgICAgZ09wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5nZXRHcm91cFByb3Aob3B0aW9uLCB0byksXG4gICAgICAgICAgICBncm91cDogZ3JvdXBzW3RoaXMuZ2V0R3JvdXBQcm9wKG9wdGlvbiwgdG8pXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBncm91cHNbdGhpcy5nZXRHcm91cFByb3Aob3B0aW9uLCB0byldLnB1c2godGhpcy50b09wdGlvbihvcHRpb24sIHRvKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ09wdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIHRvT3B0aW9uKGl0ZW0sIHRvKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiB0aGlzLmdldExhYmVsUHJvcChpdGVtLCB0byksXG4gICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZVByb3AoaXRlbSwgdG8pLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZ2V0RGlzYWJsZWRQcm9wKGl0ZW0sIHRvKSB8fCBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYWJlbFByb3AoaXRlbSwgdG8pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdG8ubGFiZWxQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG8ubGFiZWxQcm9wKGl0ZW0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZUxlZ2FjeU9wdGlvbihpdGVtLCB0bykpIHtcbiAgICAgIHJldHVybiBpdGVtLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtW3RvLmxhYmVsUHJvcCB8fCAnbGFiZWwnXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWVQcm9wKGl0ZW0sIHRvKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRvLnZhbHVlUHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRvLnZhbHVlUHJvcChpdGVtKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG91bGRVc2VMZWdhY3lPcHRpb24oaXRlbSwgdG8pKSB7XG4gICAgICByZXR1cm4gaXRlbS5rZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1bdG8udmFsdWVQcm9wIHx8ICd2YWx1ZSddO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREaXNhYmxlZFByb3AoaXRlbSwgdG8pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdG8uZGlzYWJsZWRQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG8uZGlzYWJsZWRQcm9wKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbVt0by5kaXNhYmxlZFByb3AgfHwgJ2Rpc2FibGVkJ107XG4gIH1cblxuICBwcml2YXRlIGdldEdyb3VwUHJvcChpdGVtLCB0byk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0by5ncm91cFByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0by5ncm91cFByb3AoaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1bdG8uZ3JvdXBQcm9wIHx8ICdncm91cCddO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRVc2VMZWdhY3lPcHRpb24oaXRlbSwgdG8pIHtcbiAgICByZXR1cm4gIXRvLnZhbHVlUHJvcFxuICAgICAgJiYgIXRvLmxhYmVsUHJvcFxuICAgICAgJiYgaXRlbSAhPSBudWxsXG4gICAgICAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCdcbiAgICAgICYmICdrZXknIGluIGl0ZW1cbiAgICAgICYmICd2YWx1ZScgaW4gaXRlbTtcbiAgfVxufVxuIl19