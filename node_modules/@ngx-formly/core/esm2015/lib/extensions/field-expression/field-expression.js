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
export class FieldExpressionExtension {
    /**
     * @param {?} field
     * @return {?}
     */
    prePopulate(field) {
        if (field.parent || field.options._checkField) {
            return;
        }
        field.options._checkField = (/**
         * @param {?} f
         * @param {?} ignoreCache
         * @return {?}
         */
        (f, ignoreCache) => this._checkField(f, ignoreCache));
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onPopulate(field) {
        if (!field.parent || field._expressionProperties) {
            return;
        }
        // cache built expression
        defineHiddenProp(field, '_expressionProperties', {});
        if (field.expressionProperties) {
            for (const key in field.expressionProperties) {
                /** @type {?} */
                const expressionProperty = field.expressionProperties[key];
                /** @type {?} */
                const expressionValueSetter = evalExpressionValueSetter(`field.${key}`, ['expressionValue', 'model', 'field']);
                if (typeof expressionProperty === 'string' || isFunction(expressionProperty)) {
                    field._expressionProperties[key] = {
                        expression: this._evalExpression(expressionProperty, field.parent.expressionProperties && field.parent.expressionProperties.hasOwnProperty('templateOptions.disabled')
                            ? (/**
                             * @return {?}
                             */
                            () => field.parent.templateOptions.disabled)
                            : undefined),
                        expressionValueSetter,
                    };
                    if (key === 'templateOptions.disabled') {
                        Object.defineProperty(field._expressionProperties[key], 'expressionValue', {
                            get: (/**
                             * @return {?}
                             */
                            () => field.templateOptions.disabled),
                            set: (/**
                             * @return {?}
                             */
                            () => { }),
                            enumerable: true,
                            configurable: true,
                        });
                    }
                }
                else if (expressionProperty instanceof Observable) {
                    /** @type {?} */
                    const subscription = ((/** @type {?} */ (expressionProperty)))
                        .subscribe((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => evalExpression(expressionValueSetter, { field }, [v, field.model, field])));
                    /** @type {?} */
                    const onDestroy = field.hooks.onDestroy;
                    field.hooks.onDestroy = (/**
                     * @param {?} field
                     * @return {?}
                     */
                    (field) => {
                        onDestroy && onDestroy(field);
                        subscription.unsubscribe();
                    });
                }
            }
        }
        if (field.hideExpression) {
            // delete hide value in order to force re-evaluate it in FormlyFormExpression.
            delete field.hide;
            /** @type {?} */
            let parent = field.parent;
            while (parent && !parent.hideExpression) {
                parent = parent.parent;
            }
            field.hideExpression = this._evalExpression(field.hideExpression, parent && parent.hideExpression ? (/**
             * @return {?}
             */
            () => parent.hide) : undefined);
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    postPopulate(field) {
        if (field.parent) {
            return;
        }
        field.options._checkField(field, true);
    }
    /**
     * @private
     * @param {?} expression
     * @param {?=} parentExpression
     * @return {?}
     */
    _evalExpression(expression, parentExpression) {
        expression = expression || ((/**
         * @return {?}
         */
        () => false));
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
            (model, formState, field) => parentExpression() || expression(model, formState, field))
            : expression;
    }
    /**
     * @private
     * @param {?} field
     * @param {?=} ignoreCache
     * @return {?}
     */
    _checkField(field, ignoreCache = false) {
        /** @type {?} */
        let markForCheck = false;
        field.fieldGroup.forEach((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            this.checkFieldExpressionChange(f, ignoreCache) && (markForCheck = true);
            this.checkFieldVisibilityChange(f, ignoreCache) && (markForCheck = true);
            if (f.fieldGroup && f.fieldGroup.length > 0) {
                this._checkField(f, ignoreCache);
            }
        }));
        if (markForCheck && field.options && field.options._markForCheck) {
            field.options._markForCheck(field);
        }
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldExpressionChange(field, ignoreCache) {
        if (!field || !field._expressionProperties) {
            return false;
        }
        /** @type {?} */
        let markForCheck = false;
        /** @type {?} */
        const expressionProperties = field._expressionProperties;
        /** @type {?} */
        const validators = FORMLY_VALIDATORS.map((/**
         * @param {?} v
         * @return {?}
         */
        v => `templateOptions.${v}`));
        for (const key in expressionProperties) {
            /** @type {?} */
            let expressionValue = evalExpression(expressionProperties[key].expression, { field }, [field.model, field.options.formState, field]);
            if (key === 'templateOptions.disabled') {
                expressionValue = !!expressionValue;
            }
            if (ignoreCache || (expressionProperties[key].expressionValue !== expressionValue
                && (!isObject(expressionValue) || JSON.stringify(expressionValue) !== JSON.stringify(expressionProperties[key].expressionValue)))) {
                markForCheck = true;
                expressionProperties[key].expressionValue = expressionValue;
                evalExpression(expressionProperties[key].expressionValueSetter, { field }, [expressionValue, field.model, field]);
                if (key.indexOf('model.') === 0) {
                    /** @type {?} */
                    const path = key.replace(/^model\./, '');
                    /** @type {?} */
                    const control = field.key && key === path ? field.formControl : field.parent.formControl.get(path);
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
    }
    /**
     * @private
     * @param {?} field
     * @param {?} ignoreCache
     * @return {?}
     */
    checkFieldVisibilityChange(field, ignoreCache) {
        if (!field || isNullOrUndefined(field.hideExpression)) {
            return false;
        }
        /** @type {?} */
        const hideExpressionResult = !!evalExpression(field.hideExpression, { field }, [field.model, field.options.formState, field]);
        /** @type {?} */
        let markForCheck = false;
        if (hideExpressionResult !== field.hide || ignoreCache) {
            markForCheck = true;
            // toggle hide
            field.hide = hideExpressionResult;
            field.templateOptions.hidden = hideExpressionResult;
            this.toggleFormControl(field, hideExpressionResult);
        }
        return markForCheck;
    }
    /**
     * @private
     * @param {?} field
     * @param {?} hide
     * @return {?}
     */
    toggleFormControl(field, hide) {
        if (field.fieldGroup) {
            field.fieldGroup
                .filter((/**
             * @param {?} f
             * @return {?}
             */
            f => !f.hideExpression))
                .forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => this.toggleFormControl(f, hide)));
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZm9ybWx5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvZXh0ZW5zaW9ucy9maWVsZC1leHByZXNzaW9uL2ZpZWxkLWV4cHJlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDMUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFHekUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFDbkMsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM3QyxPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVc7Ozs7O1FBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQSxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQTZCO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFFRCx5QkFBeUI7UUFDekIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXJELElBQUksS0FBSyxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLEtBQUssTUFBTSxH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QUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDdEQsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBeUIsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFBLENBQUMsQ0FBQztTQUN6RztJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1seUZpZWxkQ29uZmlnLCBGb3JtbHlWYWx1ZUNoYW5nZUV2ZW50LCBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3JtbHkuZmllbGQuY29uZmlnJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc051bGxPclVuZGVmaW5lZCwgaXNGdW5jdGlvbiwgRk9STUxZX1ZBTElEQVRPUlMsIGRlZmluZUhpZGRlblByb3AgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBldmFsRXhwcmVzc2lvbiwgZXZhbFN0cmluZ0V4cHJlc3Npb24sIGV2YWxFeHByZXNzaW9uVmFsdWVTZXR0ZXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1seUV4dGVuc2lvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgdW5yZWdpc3RlckNvbnRyb2wsIHJlZ2lzdGVyQ29udHJvbCB9IGZyb20gJy4uL2ZpZWxkLWZvcm0vdXRpbHMnO1xuXG4vKiogQGV4cGVyaW1lbnRhbCAqL1xuZXhwb3J0IGNsYXNzIEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbiBpbXBsZW1lbnRzIEZvcm1seUV4dGVuc2lvbiB7XG4gIHByZVBvcHVsYXRlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgaWYgKGZpZWxkLnBhcmVudCB8fCBmaWVsZC5vcHRpb25zLl9jaGVja0ZpZWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmllbGQub3B0aW9ucy5fY2hlY2tGaWVsZCA9IChmLCBpZ25vcmVDYWNoZSkgPT4gdGhpcy5fY2hlY2tGaWVsZChmLCBpZ25vcmVDYWNoZSk7XG4gIH1cblxuICBvblBvcHVsYXRlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlKSB7XG4gICAgaWYgKCFmaWVsZC5wYXJlbnQgfHwgZmllbGQuX2V4cHJlc3Npb25Qcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2FjaGUgYnVpbHQgZXhwcmVzc2lvblxuICAgIGRlZmluZUhpZGRlblByb3AoZmllbGQsICdfZXhwcmVzc2lvblByb3BlcnRpZXMnLCB7fSk7XG5cbiAgICBpZiAoZmllbGQuZXhwcmVzc2lvblByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkLmV4cHJlc3Npb25Qcm9wZXJ0aWVzKSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb25Qcm9wZXJ0eSA9IGZpZWxkLmV4cHJlc3Npb25Qcm9wZXJ0aWVzW2tleV0sXG4gICAgICAgICAgZXhwcmVzc2lvblZhbHVlU2V0dGVyID0gZXZhbEV4cHJlc3Npb25WYWx1ZVNldHRlcihcbiAgICAgICAgICAgIGBmaWVsZC4ke2tleX1gLFxuICAgICAgICAgICAgWydleHByZXNzaW9uVmFsdWUnLCAnbW9kZWwnLCAnZmllbGQnXSxcbiAgICAgICAgICApO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZXhwcmVzc2lvblByb3BlcnR5ID09PSAnc3RyaW5nJyB8fCBpc0Z1bmN0aW9uKGV4cHJlc3Npb25Qcm9wZXJ0eSkpIHtcbiAgICAgICAgICBmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XSA9IHtcbiAgICAgICAgICAgIGV4cHJlc3Npb246IHRoaXMuX2V2YWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICBleHByZXNzaW9uUHJvcGVydHksXG4gICAgICAgICAgICAgIGZpZWxkLnBhcmVudC5leHByZXNzaW9uUHJvcGVydGllcyAmJiBmaWVsZC5wYXJlbnQuZXhwcmVzc2lvblByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgPyAoKSA9PiBmaWVsZC5wYXJlbnQudGVtcGxhdGVPcHRpb25zLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZXhwcmVzc2lvblZhbHVlU2V0dGVyLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3RlbXBsYXRlT3B0aW9ucy5kaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmaWVsZC5fZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XSwgJ2V4cHJlc3Npb25WYWx1ZScsIHtcbiAgICAgICAgICAgICAgZ2V0OiAoKSA9PiBmaWVsZC50ZW1wbGF0ZU9wdGlvbnMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIHNldDogKCkgPT4geyB9LFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwcmVzc2lvblByb3BlcnR5IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChleHByZXNzaW9uUHJvcGVydHkgYXMgT2JzZXJ2YWJsZTxhbnk+KVxuICAgICAgICAgICAgLnN1YnNjcmliZSh2ID0+IGV2YWxFeHByZXNzaW9uKGV4cHJlc3Npb25WYWx1ZVNldHRlciwgeyBmaWVsZCB9LCBbdiwgZmllbGQubW9kZWwsIGZpZWxkXSkpO1xuXG4gICAgICAgICAgY29uc3Qgb25EZXN0cm95ID0gZmllbGQuaG9va3Mub25EZXN0cm95O1xuICAgICAgICAgIGZpZWxkLmhvb2tzLm9uRGVzdHJveSA9IChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgb25EZXN0cm95ICYmIG9uRGVzdHJveShmaWVsZCk7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLmhpZGVFeHByZXNzaW9uKSB7XG4gICAgICAvLyBkZWxldGUgaGlkZSB2YWx1ZSBpbiBvcmRlciB0byBmb3JjZSByZS1ldmFsdWF0ZSBpdCBpbiBGb3JtbHlGb3JtRXhwcmVzc2lvbi5cbiAgICAgIGRlbGV0ZSBmaWVsZC5oaWRlO1xuXG4gICAgICBsZXQgcGFyZW50ID0gZmllbGQucGFyZW50O1xuICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcGFyZW50LmhpZGVFeHByZXNzaW9uKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGZpZWxkLmhpZGVFeHByZXNzaW9uID0gdGhpcy5fZXZhbEV4cHJlc3Npb24oXG4gICAgICAgIGZpZWxkLmhpZGVFeHByZXNzaW9uLFxuICAgICAgICBwYXJlbnQgJiYgcGFyZW50LmhpZGVFeHByZXNzaW9uID8gKCkgPT4gcGFyZW50LmhpZGUgOiB1bmRlZmluZWQsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHBvc3RQb3B1bGF0ZShmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSkge1xuICAgIGlmIChmaWVsZC5wYXJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWVsZC5vcHRpb25zLl9jaGVja0ZpZWxkKGZpZWxkLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2V2YWxFeHByZXNzaW9uKGV4cHJlc3Npb24sIHBhcmVudEV4cHJlc3Npb24/KSB7XG4gICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24gfHwgKCgpID0+IGZhbHNlKTtcbiAgICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBleHByZXNzaW9uID0gZXZhbFN0cmluZ0V4cHJlc3Npb24oZXhwcmVzc2lvbiwgWydtb2RlbCcsICdmb3JtU3RhdGUnLCAnZmllbGQnXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudEV4cHJlc3Npb25cbiAgICAgID8gKG1vZGVsOiBhbnksIGZvcm1TdGF0ZTogYW55LCBmaWVsZDogRm9ybWx5RmllbGRDb25maWcpID0+IHBhcmVudEV4cHJlc3Npb24oKSB8fCBleHByZXNzaW9uKG1vZGVsLCBmb3JtU3RhdGUsIGZpZWxkKVxuICAgICAgOiBleHByZXNzaW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tGaWVsZChmaWVsZDogRm9ybWx5RmllbGRDb25maWdDYWNoZSwgaWdub3JlQ2FjaGUgPSBmYWxzZSkge1xuICAgIGxldCBtYXJrRm9yQ2hlY2sgPSBmYWxzZTtcbiAgICBmaWVsZC5maWVsZEdyb3VwLmZvckVhY2goZiA9PiB7XG4gICAgICB0aGlzLmNoZWNrRmllbGRFeHByZXNzaW9uQ2hhbmdlKGYsIGlnbm9yZUNhY2hlKSAmJiAobWFya0ZvckNoZWNrID0gdHJ1ZSk7XG4gICAgICB0aGlzLmNoZWNrRmllbGRWaXNpYmlsaXR5Q2hhbmdlKGYsIGlnbm9yZUNhY2hlKSAmJiAobWFya0ZvckNoZWNrID0gdHJ1ZSk7XG5cbiAgICAgIGlmIChmLmZpZWxkR3JvdXAgJiYgZi5maWVsZEdyb3VwLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fY2hlY2tGaWVsZChmLCBpZ25vcmVDYWNoZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobWFya0ZvckNoZWNrICYmIGZpZWxkLm9wdGlvbnMgJiYgZmllbGQub3B0aW9ucy5fbWFya0ZvckNoZWNrKSB7XG4gICAgICBmaWVsZC5vcHRpb25zLl9tYXJrRm9yQ2hlY2soZmllbGQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tGaWVsZEV4cHJlc3Npb25DaGFuZ2UoZmllbGQ6IEZvcm1seUZpZWxkQ29uZmlnQ2FjaGUsIGlnbm9yZUNhY2hlKTogYm9vbGVhbiB7XG4gICAgaWYgKCFmaWVsZCB8fCAhZmllbGQuX2V4cHJlc3Npb25Qcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG1hcmtGb3JDaGVjayA9IGZhbHNlO1xuICAgIGNvbnN0IGV4cHJlc3Npb25Qcm9wZXJ0aWVzID0gZmllbGQuX2V4cHJlc3Npb25Qcm9wZXJ0aWVzO1xuICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBGT1JNTFlfVkFMSURBVE9SUy5tYXAodiA9PiBgdGVtcGxhdGVPcHRpb25zLiR7dn1gKTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIGV4cHJlc3Npb25Qcm9wZXJ0aWVzKSB7XG4gICAgICBsZXQgZXhwcmVzc2lvblZhbHVlID0gZXZhbEV4cHJlc3Npb24oZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XS5leHByZXNzaW9uLCB7IGZpZWxkIH0sIFtmaWVsZC5tb2RlbCwgZmllbGQub3B0aW9ucy5mb3JtU3RhdGUsIGZpZWxkXSk7XG4gICAgICBpZiAoa2V5ID09PSAndGVtcGxhdGVPcHRpb25zLmRpc2FibGVkJykge1xuICAgICAgICBleHByZXNzaW9uVmFsdWUgPSAhIWV4cHJlc3Npb25WYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpZ25vcmVDYWNoZSB8fCAoXG4gICAgICAgICAgZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XS5leHByZXNzaW9uVmFsdWUgIT09IGV4cHJlc3Npb25WYWx1ZVxuICAgICAgICAgICYmICghaXNPYmplY3QoZXhwcmVzc2lvblZhbHVlKSB8fCBKU09OLnN0cmluZ2lmeShleHByZXNzaW9uVmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZSkpXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBtYXJrRm9yQ2hlY2sgPSB0cnVlO1xuICAgICAgICBleHByZXNzaW9uUHJvcGVydGllc1trZXldLmV4cHJlc3Npb25WYWx1ZSA9IGV4cHJlc3Npb25WYWx1ZTtcbiAgICAgICAgZXZhbEV4cHJlc3Npb24oXG4gICAgICAgICAgZXhwcmVzc2lvblByb3BlcnRpZXNba2V5XS5leHByZXNzaW9uVmFsdWVTZXR0ZXIsXG4gICAgICAgICAgeyBmaWVsZCB9LFxuICAgICAgICAgIFtleHByZXNzaW9uVmFsdWUsIGZpZWxkLm1vZGVsLCBmaWVsZF0sXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCdtb2RlbC4nKSA9PT0gMCkge1xuICAgICAgICAgIGNvbnN0IHBhdGggPSBrZXkucmVwbGFjZSgvXm1vZGVsXFwuLywgJycpLFxuICAgICAgICAgICAgY29udHJvbCA9IGZpZWxkLmtleSAmJiBrZXkgPT09IHBhdGggPyBmaWVsZC5mb3JtQ29udHJvbCA6IGZpZWxkLnBhcmVudC5mb3JtQ29udHJvbC5nZXQocGF0aCk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb250cm9sXG4gICAgICAgICAgICAmJiAhKGlzTnVsbE9yVW5kZWZpbmVkKGNvbnRyb2wudmFsdWUpICYmIGlzTnVsbE9yVW5kZWZpbmVkKGV4cHJlc3Npb25WYWx1ZSkpXG4gICAgICAgICAgICAmJiBjb250cm9sLnZhbHVlICE9PSBleHByZXNzaW9uVmFsdWVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRyb2wucGF0Y2hWYWx1ZShleHByZXNzaW9uVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0b3JzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgZmllbGQuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXJrRm9yQ2hlY2s7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRmllbGRWaXNpYmlsaXR5Q2hhbmdlKGZpZWxkOiBGb3JtbHlGaWVsZENvbmZpZ0NhY2hlLCBpZ25vcmVDYWNoZSk6IGJvb2xlYW4ge1xuICAgIGlmICghZmllbGQgfHwgaXNOdWxsT3JVbmRlZmluZWQoZmllbGQuaGlkZUV4cHJlc3Npb24pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV4cHJlc3Npb25SZXN1bHQ6IGJvb2xlYW4gPSAhIWV2YWxFeHByZXNzaW9uKFxuICAgICAgZmllbGQuaGlkZUV4cHJlc3Npb24sXG4gICAgICB7IGZpZWxkIH0sXG4gICAgICBbZmllbGQubW9kZWwsIGZpZWxkLm9wdGlvbnMuZm9ybVN0YXRlLCBmaWVsZF0sXG4gICAgKTtcbiAgICBsZXQgbWFya0ZvckNoZWNrID0gZmFsc2U7XG4gICAgaWYgKGhpZGVFeHByZXNzaW9uUmVzdWx0ICE9PSBmaWVsZC5oaWRlIHx8IGlnbm9yZUNhY2hlKSB7XG4gICAgICBtYXJrRm9yQ2hlY2sgPSB0cnVlO1xuICAgICAgLy8gdG9nZ2xlIGhpZGVcbiAgICAgIGZpZWxkLmhpZGUgPSBoaWRlRXhwcmVzc2lvblJlc3VsdDtcbiAgICAgIGZpZWxkLnRlbXBsYXRlT3B0aW9ucy5oaWRkZW4gPSBoaWRlRXhwcmVzc2lvblJlc3VsdDtcbiAgICAgIHRoaXMudG9nZ2xlRm9ybUNvbnRyb2woZmllbGQsIGhpZGVFeHByZXNzaW9uUmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFya0ZvckNoZWNrO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVGb3JtQ29udHJvbChmaWVsZDogRm9ybWx5RmllbGRDb25maWcsIGhpZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmllbGQuZmllbGRHcm91cCkge1xuICAgICAgZmllbGQuZmllbGRHcm91cFxuICAgICAgICAuZmlsdGVyKGYgPT4gIWYuaGlkZUV4cHJlc3Npb24pXG4gICAgICAgIC5mb3JFYWNoKGYgPT4gdGhpcy50b2dnbGVGb3JtQ29udHJvbChmLCBoaWRlKSk7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLmZvcm1Db250cm9sICYmIGZpZWxkLmtleSkge1xuICAgICAgaWYgKGhpZGUgPT09IHRydWUgJiYgZmllbGQuZm9ybUNvbnRyb2wucGFyZW50KSB7XG4gICAgICAgIHVucmVnaXN0ZXJDb250cm9sKGZpZWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoaGlkZSA9PT0gZmFsc2UgJiYgIWZpZWxkLmZvcm1Db250cm9sLnBhcmVudCkge1xuICAgICAgICByZWdpc3RlckNvbnRyb2woZmllbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZC5vcHRpb25zLmZpZWxkQ2hhbmdlcykge1xuICAgICAgZmllbGQub3B0aW9ucy5maWVsZENoYW5nZXMubmV4dCg8Rm9ybWx5VmFsdWVDaGFuZ2VFdmVudD4geyBmaWVsZDogZmllbGQsIHR5cGU6ICdoaWRkZW4nLCB2YWx1ZTogaGlkZSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==