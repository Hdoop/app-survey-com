/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
export class FormlySelectOptionsPipe {
    /**
     * @param {?} options
     * @param {?=} field
     * @return {?}
     */
    transform(options, field) {
        if (!(options instanceof Observable)) {
            options = observableOf(options);
        }
        return ((/** @type {?} */ (options))).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        value => this.toOptions(value, field || {}))));
    }
    /**
     * @private
     * @param {?} options
     * @param {?} field
     * @return {?}
     */
    toOptions(options, field) {
        /** @type {?} */
        const gOptions = [];
        /** @type {?} */
        const groups = {};
        /** @type {?} */
        const to = field.templateOptions || {};
        options.map((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            if (!this.getGroupProp(option, to)) {
                gOptions.push(this.toOption(option, to));
            }
            else {
                if (!groups[this.getGroupProp(option, to)]) {
                    groups[this.getGroupProp(option, to)] = [];
                    gOptions.push({
                        label: this.getGroupProp(option, to),
                        group: groups[this.getGroupProp(option, to)],
                    });
                }
                groups[this.getGroupProp(option, to)].push(this.toOption(option, to));
            }
        }));
        return gOptions;
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    toOption(item, to) {
        return {
            label: this.getLabelProp(item, to),
            value: this.getValueProp(item, to),
            disabled: this.getDisabledProp(item, to) || false,
        };
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    getLabelProp(item, to) {
        if (typeof to.labelProp === 'function') {
            return to.labelProp(item);
        }
        if (this.shouldUseLegacyOption(item, to)) {
            return item.value;
        }
        return item[to.labelProp || 'label'];
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    getValueProp(item, to) {
        if (typeof to.valueProp === 'function') {
            return to.valueProp(item);
        }
        if (this.shouldUseLegacyOption(item, to)) {
            return item.key;
        }
        return item[to.valueProp || 'value'];
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    getDisabledProp(item, to) {
        if (typeof to.disabledProp === 'function') {
            return to.disabledProp(item);
        }
        return item[to.disabledProp || 'disabled'];
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    getGroupProp(item, to) {
        if (typeof to.groupProp === 'function') {
            return to.groupProp(item);
        }
        return item[to.groupProp || 'group'];
    }
    /**
     * @private
     * @param {?} item
     * @param {?} to
     * @return {?}
     */
    shouldUseLegacyOption(item, to) {
        return !to.valueProp
            && !to.labelProp
            && item != null
            && typeof item === 'object'
            && 'key' in item
            && 'value' in item;
    }
}
FormlySelectOptionsPipe.decorators = [
    { type: Pipe, args: [{ name: 'formlySelectOptions' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvc2VsZWN0LyIsInNvdXJjZXMiOlsic2VsZWN0LW9wdGlvbnMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFDbEMsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUF5QjtRQUMxQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksVUFBVSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sQ0FBQyxtQkFBQSxPQUFPLEVBQW1CLENBQUMsQ0FBQyxJQUFJLENBQ3RDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsRUFBQyxDQUNqRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBd0I7O2NBQzNDLFFBQVEsR0FBVSxFQUFFOztjQUN4QixNQUFNLEdBQTZCLEVBQUU7O2NBQ3JDLEVBQUUsR0FBRyxLQUFLLENBQUMsZUFBZSxJQUFJLEVBQUU7UUFFbEMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0s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QixDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUztlQUNmLENBQUMsRUFBRSxDQUFDLFNBQVM7ZUFDYixJQUFJLElBQUksSUFBSTtlQUNaLE9BQU8sSUFBSSxLQUFLLFFBQVE7ZUFDeEIsS0FBSyxJQUFJLElBQUk7ZUFDYixPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3ZCLENBQUM7OztZQXpGRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnIH0gZnJvbSAnQG5neC1mb3JtbHkvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2Zvcm1seVNlbGVjdE9wdGlvbnMnIH0pXG5leHBvcnQgY2xhc3MgRm9ybWx5U2VsZWN0T3B0aW9uc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKG9wdGlvbnMsIGZpZWxkPzogRm9ybWx5RmllbGRDb25maWcpIHtcbiAgICBpZiAoIShvcHRpb25zIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkpIHtcbiAgICAgIG9wdGlvbnMgPSBvYnNlcnZhYmxlT2Yob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChvcHRpb25zIGFzIE9ic2VydmFibGU8YW55PikucGlwZShcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLnRvT3B0aW9ucyh2YWx1ZSwgZmllbGQgfHwge30pKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0b09wdGlvbnMob3B0aW9ucywgZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnKSB7XG4gICAgY29uc3QgZ09wdGlvbnM6IGFueVtdID0gW10sXG4gICAgICBncm91cHM6IHsgW2tleTogc3RyaW5nXTogYW55W10gfSA9IHt9LFxuICAgICAgdG8gPSBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMgfHwge307XG5cbiAgICBvcHRpb25zLm1hcCgob3B0aW9uOiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhpcy5nZXRHcm91cFByb3Aob3B0aW9uLCB0bykpIHtcbiAgICAgICAgZ09wdGlvbnMucHVzaCh0aGlzLnRvT3B0aW9uKG9wdGlvbiwgdG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghZ3JvdXBzW3RoaXMuZ2V0R3JvdXBQcm9wKG9wdGlvbiwgdG8pXSkge1xuICAgICAgICAgIGdyb3Vwc1t0aGlzLmdldEdyb3VwUHJvcChvcHRpb24sIHRvKV0gPSBbXTtcbiAgICAgICAgICBnT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmdldEdyb3VwUHJvcChvcHRpb24sIHRvKSxcbiAgICAgICAgICAgIGdyb3VwOiBncm91cHNbdGhpcy5nZXRHcm91cFByb3Aob3B0aW9uLCB0byldLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGdyb3Vwc1t0aGlzLmdldEdyb3VwUHJvcChvcHRpb24sIHRvKV0ucHVzaCh0aGlzLnRvT3B0aW9uKG9wdGlvbiwgdG8pKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBnT3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgdG9PcHRpb24oaXRlbSwgdG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMuZ2V0TGFiZWxQcm9wKGl0ZW0sIHRvKSxcbiAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlUHJvcChpdGVtLCB0byksXG4gICAgICBkaXNhYmxlZDogdGhpcy5nZXREaXNhYmxlZFByb3AoaXRlbSwgdG8pIHx8IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldExhYmVsUHJvcChpdGVtLCB0byk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0by5sYWJlbFByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0by5sYWJlbFByb3AoaXRlbSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkVXNlTGVnYWN5T3B0aW9uKGl0ZW0sIHRvKSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1bdG8ubGFiZWxQcm9wIHx8ICdsYWJlbCddO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYWx1ZVByb3AoaXRlbSwgdG8pOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdG8udmFsdWVQcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdG8udmFsdWVQcm9wKGl0ZW0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFVzZUxlZ2FjeU9wdGlvbihpdGVtLCB0bykpIHtcbiAgICAgIHJldHVybiBpdGVtLmtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVt0by52YWx1ZVByb3AgfHwgJ3ZhbHVlJ107XG4gIH1cblxuICBwcml2YXRlIGdldERpc2FibGVkUHJvcChpdGVtLCB0byk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0by5kaXNhYmxlZFByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0by5kaXNhYmxlZFByb3AoaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtW3RvLmRpc2FibGVkUHJvcCB8fCAnZGlzYWJsZWQnXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R3JvdXBQcm9wKGl0ZW0sIHRvKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHRvLmdyb3VwUHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRvLmdyb3VwUHJvcChpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVt0by5ncm91cFByb3AgfHwgJ2dyb3VwJ107XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFVzZUxlZ2FjeU9wdGlvbihpdGVtLCB0bykge1xuICAgIHJldHVybiAhdG8udmFsdWVQcm9wXG4gICAgICAmJiAhdG8ubGFiZWxQcm9wXG4gICAgICAmJiBpdGVtICE9IG51bGxcbiAgICAgICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0J1xuICAgICAgJiYgJ2tleScgaW4gaXRlbVxuICAgICAgJiYgJ3ZhbHVlJyBpbiBpdGVtO1xuICB9XG59XG4iXX0=