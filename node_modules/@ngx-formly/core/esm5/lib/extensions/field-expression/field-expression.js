/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObject, isNullOrUndefined, isFunction, FORMLY_VALIDATORS, defineHiddenProp } from '../../utils';
import { evalExpression, evalStringExpression, evalExpressionValueSetter } from './utils';
import { Observable } from 'rxjs';
import { unregisterControl, registerControl } from '../field-form/utils';
/**
 * \@experimental
 */
var /**
 * \@experimental
 */
FieldExpressionExtension = /** @class */ (function () {
    function FieldExpressionExtension() {
    }
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.prePopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        if (field.parent || field.options._checkField) {
            return;
        }
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        function (f, ignoreCache) { return _this._checkField(f, ignoreCache); });
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.onPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        // cache built expression
        defineHiddenProp(field, '_expressionProperties', {});
        if (field.expressionProperties) {
            var _loop_1 = function (key) {
                /** @type {?} */
                var expressionProperty = field.expressionProperties[key];
                /** @type {?} */
                var expressionValueSetter = evalExpressionValueSetter("field." + key, ['expressionValue', 'model', 'field']);
                if (typeof expressionProperty === 'string' || isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this_1._evalExpression(expressionProperty, field.parent.expressionProperties && field.parent.expressionProperties.hasOwnProperty('templateOptions.disabled')
                            ? (/**
                             * @return {?}
                             */
                            function () { return field.parent.templateOptions.disabled; })
                            : undefined),
                        expressionValueSetter: expressionValueSetter,
                    };
                    if (key === 'templateOptions.disabled') {
                        Object.defineProperty(field._expressionProperties[key], 'expressionValue', {
                            get: (/**
                             * @return {?}
                             */
                            function () { return field.templateOptions.disabled; }),
                            set: (/**
                             * @return {?}
                             */
                            function () { }),
                            enumerable: true,
                            configurable: true,
                        });
                    }
                }
                else if (expressionProperty instanceof Observable) {
                    /** @type {?} */
                    var subscription_1 = ((/** @type {?} */ (expressionProperty)))
                        .subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) { return evalExpression(expressionValueSetter, { field: field }, [v, field.model, field]); }));
                    /** @type {?} */
                    var onDestroy_1 = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @param {?} field
                     * @return {?}
                     */
                    function (field) {
                        onDestroy_1 && onDestroy_1(field);
                        subscription_1.unsubscribe();
                    });
                }
            };
            var this_1 = this;
            for (var key in field.expressionProperties) {
                _loop_1(key);
            }
        }
        if (field.hideExpression) {
            // delete hide value in order to force re-evaluate it in FormlyFormExpression.
            delete field.hide;
            /** @type {?} */
            var parent_1 = field.parent;
            while (parent_1 && !parent_1.hideExpression) {
                parent_1 = parent_1.parent;
            }
            field.hideExpression = this._evalExpression(field.hideExpression, parent_1 && parent_1.hideExpression ? (/**
             * @return {?}
             */
            function () { return parent_1.hide; }) : undefined);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    FieldExpressionExtension.prototype.postPopulate = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.parent) {
            return;
        }
        field.options._checkField(field, true);
    };
    /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    FieldExpressionExtension.prototype._evalExpression = /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    function (expression, parentExpression) {
        expression = expression || ((/**
         * @return {?}
         */
        function () { return false; }));
        if (typeof expression === 'string') {
            expression = evalStringExpression(expression, ['model', 'formState', 'field']);
        }
        return parentExpression
            ? (/**
             * @param {?} model
             * @param {?} formState
             * @param {?} field
             * @return {?}
             */
            function (model, formState, field) { return parentExpression() || expression(model, formState, field); })
            : expression;
    };
    /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype._checkField = /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        var _this = this;
        if (ignoreCache === void 0) { ignoreCache = false; }
        /** @type {?} */
        var markForCheck = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            _this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
            _this.checkFieldVisibilityChange(f, ignoreCache) && (markForCheck = true);
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                _this._checkField(f, ignoreCache);
            }
        }));
        if (markForCheck && field.options && field.options._markForCheck) {
            field.options._markForCheck(field);
        }
    };
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype.checkFieldExpressionChange = /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        var markForCheck = false;
        /** @type {?} */
        var expressionProperties = field._expressionProperties;
        /** @type {?} */
        var validators = FORMLY_VALIDATORS.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return "templateOptions." + v; }));
        for (var key in expressionProperties) {
            /** @type {?} */
            var expressionValue = evalExpression(expressionProperties[key].expression, { field: field }, [field.model, field.options.formState, field]);
            if (key === 'templateOptions.disabled') {
                expressionValue = !!expressionValue;
            }
            if (ignoreCache || (expressionProperties[key].expressionValue !== expressionValue
                && (!isObject(expressionValue) || JSON.stringify(expressionValue) !== JSON.stringify(expressionProperties[key].expressionValue)))) {
                markForCheck = true;
                expressionProperties[key].expressionValue = expressionValue;
                evalExpression(expressionProperties[key].expressionValueSetter, { field: field }, [expressionValue, field.model, field]);
                if (key.indexOf('model.') === 0) {
                    /** @type {?} */
                    var path = key.replace(/^model\./, '');
                    /** @type {?} */
                    var control = field.key && key === path ? field.formControl : field.parent.formControl.get(path);
                    if (control
                        && !(isNullOrUndefined(control.value) && isNullOrUndefined(expressionValue))
                        && control.value !== expressionValue) {
                        control.patchValue(expressionValue);
                    }
                }
                if (validators.indexOf(key) !== -1 && field.formControl) {
                    field.formControl.updateValueAndValidity({ emitEvent: false });
                }
            }
        }
        return markForCheck;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    FieldExpressionExtension.prototype.checkFieldVisibilityChange = /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    function (field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        var hideExpressionResult = !!evalExpression(field.hideExpression, { field: field }, [field.model, field.options.formState, field]);
        /** @type {?} */
        var markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            // toggle hide
            field.hide = hideExpressionResult;
            field.templateOptions.hidden = hideExpressionResult;
            this.toggleFormControl(field, hideExpressionResult);
        }
        return markForCheck;
    };
    /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    FieldExpressionExtension.prototype.toggleFormControl = /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    function (field, hide) {
        var _this = this;
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return !f.hideExpression; }))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            function (f) { return _this.toggleFormControl(f, hide); }));
        }
        if (field.formControl && field.key) {
            if (hide === true && field.formControl.parent) {
                unregisterControl(field);
            }
            else if (hide === false && !field.formControl.parent) {
                registerControl(field);
            }
        }
        if (field.options.fieldChanges) {
            field.options.fieldChanges.next((/** @type {?} */ ({ field: field, type: 'hidden', value: hide })));
        }
    };
    return FieldExpressionExtension;
}());
/**
 * \@experimental
 */
export { FieldExpressionExtension };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1leHByZXNzaW9uL2ZpZWxkLWV4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHekU7Ozs7SUFBQTtJQXVNQSxDQUFDOzs7OztJQXRNQyw4Q0FBVzs7OztJQUFYLFVBQVksS0FBNkI7UUFBekMsaUJBTUM7UUFMQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDN0MsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXOzs7OztRQUFHLFVBQUMsQ0FBQyxFQUFFLFdBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxFQUFoQyxDQUFnQyxDQUFBLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFRCw2Q0FBVTs7OztJQUFWLFVBQVcsS0FBNkI7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixFQUFFO1lBQ2hELE9BQU87U0FDUjtRQUVELHlCQUF5QjtRQUN6QixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFckQsSUFBSSxLQUFLLENBQUMsb0JBQW9CLEVBQUU7b0NBQ25CLEdBQUc7O29CQUNOLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7O29CQUN4RCxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FDL0MsV0FBUyxHQUFLLEVBQ2QsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQ3RDO2dCQUVILElBQUksT0FBTyxrQkFBa0IsS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7b0JBQzVFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRzt3QkFDakMsVUFBVSxFQUFFLE9BQUssZUFBZSxDQUM5QixrQkFBa0IsRUFDbEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQzs0QkFDL0csQ0FBQzs7OzRCQUFDLGNBQU0sT0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQXJDLENBQXFDOzRCQUM3QyxDQUFDLENBQUMsU0FBUyxDQUNkO3dCQUNELHFCQUFxQix1QkFBQTtxQkFDdEIsQ0FBQztvQkFDRixJQUFJLEdBQUcsS0FBSywwQkFBMEIsRUFBRTt3QkFDdEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQUUsaUJBQWlCLEVBQUU7NEJBQ3pFLEdBQUc7Ozs0QkFBRSxjQUFNLE9BQUEsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQTlCLENBQThCLENBQUE7NEJBQ3pDLEdBQUc7Ozs0QkFBRSxjQUFRLENBQUMsQ0FBQTs0QkFDZCxVQUFVLEVBQUUsSUFBSTs0QkFDaEIsWUFBWSxFQUFFLElBQUk7eUJBQ25CLENBQUMsQ0FBQztxQkFDSjtpQkFDRjtxQkFBTSxJQUFJLGtCQUFrQixZQUFZLFVBQVUsRUFBRTs7d0JBQzdDLGNBQVksR0FBRyxDQUFDLG1CQUFBLGtCQUFrQixFQUFtQixDQUFDO3lCQUN6RCxTQUFTOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsY0FBYyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQXpFLENBQXlFLEVBQUM7O3dCQUV0RixXQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTO29CQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7b0JBQUcsVUFBQyxLQUFLO3dCQUM1QixXQUFTLElBQUksV0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QixjQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzdCLENBQUMsQ0FBQSxDQUFDO2lCQUNIOzs7WUFsQ0gsS0FBSyxJQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CO3dCQUFqQyxHQUFHO2FBbUNiO1NBQ0Y7UUFFRCxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDeEIsOEVBQThFO1lBQzlFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQzs7Z0JBRWQsUUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNO1lBQ3pCLE9BQU8sUUFBTSxJQUFJLENBQUMsUUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDdkMsUUFBTSxHQUFHLFFBQU0sQ0FBQyxNQUFNLENBQUM7YUFDeEI7WUFFRCxLQUFLLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQ3pDLEtBQUssQ0FBQyxjQUFjLEVBQ3BCLFFBQU0sSUFBSSxRQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7OztZQUFDLGNBQU0sT0FBQSxRQUFNLENBQUMsSUFBSSxFQUFYLENBQVcsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUNoRSxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxLQUE2QjtRQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFTyxrREFBZTs7Ozs7O0lBQXZCLFVBQXdCLFVBQVUsRUFBRSxnQkFBaUI7UUFDbkQsVUFBVSxHQUFHLFVBQVUsSUFBSTs7O1FBQUMsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQztRQUN6QyxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsRUFBRTtZQUNsQyxVQUFVLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsT0FBTyxnQkFBZ0I7WUFDckIsQ0FBQzs7Ozs7O1lBQUMsVUFBQyxLQUFVLEVBQUUsU0FBYyxFQUFFLEtBQXdCLElBQUssT0FBQSxnQkFBZ0IsRUFBRSxJQUFJLFVBQVUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUF6RCxDQUF5RDtZQUNySCxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFTyw4Q0FBVzs7Ozs7O0lBQW5CLFVBQW9CLEtBQTZCLEVBQUUsV0FBbUI7UUFBdEUsaUJBY0M7UUFka0QsNEJBQUEsRUFBQSxtQkFBbUI7O1lBQ2hFLFlBQVksR0FBRyxLQUFLO1FBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQztZQUN4QixLQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3pFLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFekUsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksWUFBWSxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDaEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sNkRBQTBCOzs7Ozs7SUFBbEMsVUFBbUMsS0FBNkIsRUFBRSxXQUFXO1FBQzNFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUU7WUFDMUMsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFFRyxZQUFZLEdBQUcsS0FBSzs7WUFDbEIsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLHFCQUFxQjs7WUFDbEQsVUFBVSxHQUFHLGlCQUFpQixDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLHFCQUFtQixDQUFHLEVBQXRCLENBQXNCLEVBQUM7UUFFckUsS0FBSyxJQUFNLEdBQUcsSUFBSSxvQkFBb0IsRUFBRTs7Z0JBQ2xDLGVBQWUsR0FBRyxjQUFjLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEksSUFBSSxHQUFHLEtBQUssMEJBQTBCLEVBQUU7Z0JBQ3RDLGVBQWUsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2FBQ3JDO1lBRUQsSUFDRSxXQUFXLElBQUksQ0FDYixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEtBQUssZUFBZTttQkFDMUQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FDakksRUFDRDtnQkFDQSxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO2dCQUM1RCxjQUFjLENBQ1osb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQy9DLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFDVCxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUN0QyxDQUFDO2dCQUVGLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7O3dCQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDOzt3QkFDdEMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFFOUYsSUFDRSxPQUFPOzJCQUNKLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQWlCLENBQUMsZUFBZSxDQUFDLENBQUM7MkJBQ3pFLE9BQU8sQ0FBQyxLQUFLLEtBQUssZUFBZSxFQUNwQzt3QkFDQSxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3FCQUNyQztpQkFDRjtnQkFFRCxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDdkQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRTthQUNGO1NBQ0Y7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7Ozs7O0lBRU8sNkRBQTBCOzs7Ozs7SUFBbEMsVUFBbUMsS0FBNkIsRUFBRSxXQUFXO1FBQzNFLElBQUksQ0FBQyxLQUFLLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBRUssb0JBQW9CLEdBQVksQ0FBQyxDQUFDLGNBQWMsQ0FDcEQsS0FBSyxDQUFDLGNBQWMsRUFDcEIsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUNULENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FDOUM7O1lBQ0csWUFBWSxHQUFHLEtBQUs7UUFDeEIsSUFBSSxvQkFBb0IsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUN0RCxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLGNBQWM7WUFDZCxLQUFLLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDO1lBQ2xDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUNyRDtRQUVELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFFTyxvREFBaUI7Ozs7OztJQUF6QixVQUEwQixLQUF3QixFQUFFLElBQWE7UUFBakUsaUJBa0JDO1FBakJDLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNwQixLQUFLLENBQUMsVUFBVTtpQkFDYixNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQWpCLENBQWlCLEVBQUM7aUJBQzlCLE9BQU87Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStCLEVBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RELGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUM5QixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQXlCLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQSxDQUFDLENBQUM7U0FDekc7SUFDSCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBdk1ELElBdU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybWx5RmllbGRDb25maWcsIEZvcm1seVZhbHVlQ2hhbmdlRXZlbnQsIEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzTnVsbE9yVW5kZWZpbmVkLCBpc0Z1bmN0aW9uLCBGT1JNTFlfVkFMSURBVE9SUywgZGVmaW5lSGlkZGVuUHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IGV2YWxFeHByZXNzaW9uLCBldmFsU3RyaW5nRXhwcmVzc2lvbiwgZXZhbEV4cHJlc3Npb25WYWx1ZVNldHRlciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybWx5RXh0ZW5zaW9uIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWx5LmNvbmZpZyc7XG5pbXBvcnQgeyB1bnJlZ2lzdGVyQ29udHJvbCwgcmVnaXN0ZXJDb250cm9sIH0gZnJvbSAnLi4vZmllbGQtZm9ybS91dGlscyc7XG5cbi8qKiBAZXhwZXJpbWVudGFsICovXG5leHBvcnQgY2xhc3MgRmllbGRFeHByZXNzaW9uRXh0ZW5zaW9uIGltcGxlbWVudHMgRm9ybWx5RXh0ZW5zaW9uIHtcbiAgcHJlUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBpZiAoZmllbGQucGFyZW50IHx8IGZpZWxkLm9wdGlvbnMuX2NoZWNrRmllbGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWVsZC5vcHRpb25zLl9jaGVja0ZpZWxkID0gKGYsIGlnbm9yZUNhY2hlKSA9PiB0aGlzLl9jaGVja0ZpZWxkKGYsIGlnbm9yZUNhY2hlKTtcbiAgfVxuXG4gIG9uUG9wdWxhdGUoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUpIHtcbiAgICBpZiAoIWZpZWxkLnBhcmVudCB8fCBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjYWNoZSBidWlsdCBleHByZXNzaW9uXG4gICAgZGVmaW5lSGlkZGVuUHJvcChmaWVsZCwgJ19leHByZXNzaW9uUHJvcGVydGllcycsIHt9KTtcblxuICAgIGlmIChmaWVsZC5leHByZXNzaW9uUHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvblByb3BlcnR5ID0gZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XSxcbiAgICAgICAgICBleHByZXNzaW9uVmFsdWVTZXR0ZXIgPSBldmFsRXhwcmVzc2lvblZhbHVlU2V0dGVyKFxuICAgICAgICAgICAgYGZpZWxkLiR7a2V5fWAsXG4gICAgICAgICAgICBbJ2V4cHJlc3Npb25WYWx1ZScsICdtb2RlbCcsICdmaWVsZCddLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBleHByZXNzaW9uUHJvcGVydHkgPT09ICdzdHJpbmcnIHx8IGlzRnVuY3Rpb24oZXhwcmVzc2lvblByb3BlcnR5KSkge1xuICAgICAgICAgIGZpZWxkLl9leHByZXNzaW9uUHJvcGVydGllc1trZXldID0ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5fZXZhbEV4cHJlc3Npb24oXG4gICAgICAgICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0eSxcbiAgICAgICAgICAgICAgZmllbGQucGFyZW50LmV4cHJlc3Npb25Qcm9wZXJ0aWVzICYmIGZpZWxkLnBhcmVudC5leHByZXNzaW9uUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndGVtcGxhdGVPcHRpb25zLmRpc2FibGVkJylcbiAgICAgICAgICAgICAgICA/ICgpID0+IGZpZWxkLnBhcmVudC50ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBleHByZXNzaW9uVmFsdWVTZXR0ZXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAndGVtcGxhdGVPcHRpb25zLmRpc2FibGVkJykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpZWxkLl9leHByZXNzaW9uUHJvcGVydGllc1trZXldLCAnZXhwcmVzc2lvblZhbHVlJywge1xuICAgICAgICAgICAgICBnZXQ6ICgpID0+IGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgc2V0OiAoKSA9PiB7IH0sXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChleHByZXNzaW9uUHJvcGVydHkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gKGV4cHJlc3Npb25Qcm9wZXJ0eSBhcyBPYnNlcnZhYmxlPGFueT4pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHYgPT4gZXZhbEV4cHJlc3Npb24oZXhwcmVzc2lvblZhbHVlU2V0dGVyLCB7IGZpZWxkIH0sIFt2LCBmaWVsZC5tb2RlbCwgZmllbGRdKSk7XG5cbiAgICAgICAgICBjb25zdCBvbkRlc3Ryb3kgPSBmaWVsZC5ob29rcy5vbkRlc3Ryb3k7XG4gICAgICAgICAgZmllbGQuaG9va3Mub25EZXN0cm95ID0gKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBvbkRlc3Ryb3kgJiYgb25EZXN0cm95KGZpZWxkKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGQuaGlkZUV4cHJlc3Npb24pIHtcbiAgICAgIC8vIGRlbGV0ZSBoaWRlIHZhbHVlIGluIG9yZGVyIHRvIGZvcmNlIHJlLWV2YWx1YXRlIGl0IGluIEZvcm1seUZvcm1FeHByZXNzaW9uLlxuICAgICAgZGVsZXRlIGZpZWxkLmhpZGU7XG5cbiAgICAgIGxldCBwYXJlbnQgPSBmaWVsZC5wYXJlbnQ7XG4gICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuaGlkZUV4cHJlc3Npb24pIHtcbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgZmllbGQuaGlkZUV4cHJlc3Npb24gPSB0aGlzLl9ldmFsRXhwcmVzc2lvbihcbiAgICAgICAgZmllbGQuaGlkZUV4cHJlc3Npb24sXG4gICAgICAgIHBhcmVudCAmJiBwYXJlbnQuaGlkZUV4cHJlc3Npb24gPyAoKSA9PiBwYXJlbnQuaGlkZSA6IHVuZGVmaW5lZCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcG9zdFBvcHVsYXRlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgaWYgKGZpZWxkLnBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpZWxkLm9wdGlvbnMuX2NoZWNrRmllbGQoZmllbGQsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXZhbEV4cHJlc3Npb24oZXhwcmVzc2lvbiwgcGFyZW50RXhwcmVzc2lvbj8pIHtcbiAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbiB8fCAoKCkgPT4gZmFsc2UpO1xuICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGV4cHJlc3Npb24gPSBldmFsU3RyaW5nRXhwcmVzc2lvbihleHByZXNzaW9uLCBbJ21vZGVsJywgJ2Zvcm1TdGF0ZScsICdmaWVsZCddKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50RXhwcmVzc2lvblxuICAgICAgPyAobW9kZWw6IGFueSwgZm9ybVN0YXRlOiBhbnksIGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZykgPT4gcGFyZW50RXhwcmVzc2lvbigpIHx8IGV4cHJlc3Npb24obW9kZWwsIGZvcm1TdGF0ZSwgZmllbGQpXG4gICAgICA6IGV4cHJlc3Npb247XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0ZpZWxkKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCBpZ25vcmVDYWNoZSA9IGZhbHNlKSB7XG4gICAgbGV0IG1hcmtGb3JDaGVjayA9IGZhbHNlO1xuICAgIGZpZWxkLmZpZWxkR3JvdXAuZm9yRWFjaChmID0+IHtcbiAgICAgIHRoaXMuY2hlY2tGaWVsZEV4cHJlc3Npb25DaGFuZ2UoZiwgaWdub3JlQ2FjaGUpICYmIChtYXJrRm9yQ2hlY2sgPSB0cnVlKTtcbiAgICAgIHRoaXMuY2hlY2tGaWVsZFZpc2liaWxpdHlDaGFuZ2UoZiwgaWdub3JlQ2FjaGUpICYmIChtYXJrRm9yQ2hlY2sgPSB0cnVlKTtcblxuICAgICAgaWYgKGYuZmllbGRHcm91cCAmJiBmLmZpZWxkR3JvdXAubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9jaGVja0ZpZWxkKGYsIGlnbm9yZUNhY2hlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtYXJrRm9yQ2hlY2sgJiYgZmllbGQub3B0aW9ucyAmJiBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2spIHtcbiAgICAgIGZpZWxkLm9wdGlvbnMuX21hcmtGb3JDaGVjayhmaWVsZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0ZpZWxkRXhwcmVzc2lvbkNoYW5nZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSwgaWdub3JlQ2FjaGUpOiBib29sZWFuIHtcbiAgICBpZiAoIWZpZWxkIHx8ICFmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbWFya0ZvckNoZWNrID0gZmFsc2U7XG4gICAgY29uc3QgZXhwcmVzc2lvblByb3BlcnRpZXMgPSBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXM7XG4gICAgY29uc3QgdmFsaWRhdG9ycyA9IEZPUk1MWV9WQUxJREFUT1JTLm1hcCh2ID0+IGB0ZW1wbGF0ZU9wdGlvbnMuJHt2fWApO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgIGxldCBleHByZXNzaW9uVmFsdWUgPSBldmFsRXhwcmVzc2lvbihleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb24sIHsgZmllbGQgfSwgW2ZpZWxkLm1vZGVsLCBmaWVsZC5vcHRpb25zLmZvcm1TdGF0ZSwgZmllbGRdKTtcbiAgICAgIGlmIChrZXkgPT09ICd0ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWQnKSB7XG4gICAgICAgIGV4cHJlc3Npb25WYWx1ZSA9ICEhZXhwcmVzc2lvblZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGlnbm9yZUNhY2hlIHx8IChcbiAgICAgICAgICBleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZSAhPT0gZXhwcmVzc2lvblZhbHVlXG4gICAgICAgICAgJiYgKCFpc09iamVjdChleHByZXNzaW9uVmFsdWUpIHx8IEpTT04uc3RyaW5naWZ5KGV4cHJlc3Npb25WYWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlKSlcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XG4gICAgICAgIGV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0uZXhwcmVzc2lvblZhbHVlID0gZXhwcmVzc2lvblZhbHVlO1xuICAgICAgICBldmFsRXhwcmVzc2lvbihcbiAgICAgICAgICBleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZVNldHRlcixcbiAgICAgICAgICB7IGZpZWxkIH0sXG4gICAgICAgICAgW2V4cHJlc3Npb25WYWx1ZSwgZmllbGQubW9kZWwsIGZpZWxkXSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ21vZGVsLicpID09PSAwKSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IGtleS5yZXBsYWNlKC9ebW9kZWxcXC4vLCAnJyksXG4gICAgICAgICAgICBjb250cm9sID0gZmllbGQua2V5ICYmIGtleSA9PT0gcGF0aCA/IGZpZWxkLmZvcm1Db250cm9sIDogZmllbGQucGFyZW50LmZvcm1Db250cm9sLmdldChwYXRoKTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNvbnRyb2xcbiAgICAgICAgICAgICYmICEoaXNOdWxsT3JVbmRlZmluZWQoY29udHJvbC52YWx1ZSkgJiYgaXNOdWxsT3JVbmRlZmluZWQoZXhwcmVzc2lvblZhbHVlKSlcbiAgICAgICAgICAgICYmIGNvbnRyb2wudmFsdWUgIT09IGV4cHJlc3Npb25WYWx1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29udHJvbC5wYXRjaFZhbHVlKGV4cHJlc3Npb25WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRvcnMuaW5kZXhPZihrZXkpICE9PSAtMSAmJiBmaWVsZC5mb3JtQ29udHJvbCkge1xuICAgICAgICAgIGZpZWxkLmZvcm1Db250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtGb3JDaGVjaztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tGaWVsZFZpc2liaWxpdHlDaGFuZ2UoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIGlnbm9yZUNhY2hlKTogYm9vbGVhbiB7XG4gICAgaWYgKCFmaWVsZCB8fCBpc051bGxPclVuZGVmaW5lZChmaWVsZC5oaWRlRXhwcmVzc2lvbikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlRXhwcmVzc2lvblJlc3VsdDogYm9vbGVhbiA9ICEhZXZhbEV4cHJlc3Npb24oXG4gICAgICBmaWVsZC5oaWRlRXhwcmVzc2lvbixcbiAgICAgIHsgZmllbGQgfSxcbiAgICAgIFtmaWVsZC5tb2RlbCwgZmllbGQub3B0aW9ucy5mb3JtU3RhdGUsIGZpZWxkXSxcbiAgICApO1xuICAgIGxldCBtYXJrRm9yQ2hlY2sgPSBmYWxzZTtcbiAgICBpZiAoaGlkZUV4cHJlc3Npb25SZXN1bHQgIT09IGZpZWxkLmhpZGUgfHwgaWdub3JlQ2FjaGUpIHtcbiAgICAgIG1hcmtGb3JDaGVjayA9IHRydWU7XG4gICAgICAvLyB0b2dnbGUgaGlkZVxuICAgICAgZmllbGQuaGlkZSA9IGhpZGVFeHByZXNzaW9uUmVzdWx0O1xuICAgICAgZmllbGQudGVtcGxhdGVPcHRpb25zLmhpZGRlbiA9IGhpZGVFeHByZXNzaW9uUmVzdWx0O1xuICAgICAgdGhpcy50b2dnbGVGb3JtQ29udHJvbChmaWVsZCwgaGlkZUV4cHJlc3Npb25SZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXJrRm9yQ2hlY2s7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUZvcm1Db250cm9sKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZywgaGlkZTogYm9vbGVhbikge1xuICAgIGlmIChmaWVsZC5maWVsZEdyb3VwKSB7XG4gICAgICBmaWVsZC5maWVsZEdyb3VwXG4gICAgICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRlRXhwcmVzc2lvbilcbiAgICAgICAgLmZvckVhY2goZiA9PiB0aGlzLnRvZ2dsZUZvcm1Db250cm9sKGYsIGhpZGUpKTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQuZm9ybUNvbnRyb2wgJiYgZmllbGQua2V5KSB7XG4gICAgICBpZiAoaGlkZSA9PT0gdHJ1ZSAmJiBmaWVsZC5mb3JtQ29udHJvbC5wYXJlbnQpIHtcbiAgICAgICAgdW5yZWdpc3RlckNvbnRyb2woZmllbGQpO1xuICAgICAgfSBlbHNlIGlmIChoaWRlID09PSBmYWxzZSAmJiAhZmllbGQuZm9ybUNvbnRyb2wucGFyZW50KSB7XG4gICAgICAgIHJlZ2lzdGVyQ29udHJvbChmaWVsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLm9wdGlvbnMuZmllbGRDaGFuZ2VzKSB7XG4gICAgICBmaWVsZC5vcHRpb25zLmZpZWxkQ2hhbmdlcy5uZXh0KDxGb3JtbHlWYWx1ZUNoYW5nZUV2ZW50PiB7IGZpZWxkOiBmaWVsZCwgdHlwZTogJ2hpZGRlbicsIHZhbHVlOiBoaWRlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19