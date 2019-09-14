/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyForm } from './components/formly.form';
import { FormlyField } from './components/formly.field';
import { FormlyAttributes } from './components/formly.attributes';
import { FormlyConfig, FORMLY_CONFIG } from './services/formly.config';
import { FormlyFormBuilder } from './services/formly.form.builder';
import { FormlyGroup } from './templates/formly.group';
import { FormlyValidationMessage } from './templates/formly.validation-message';
import { FormlyTemplateType } from './templates/field-template.type';
import { FieldExpressionExtension } from './extensions/field-expression/field-expression';
import { FieldValidationExtension } from './extensions/field-validation/field-validation';
import { FieldFormExtension } from './extensions/field-form/field-form';
import { CoreExtension } from './extensions/core/core';
/**
 * @param {?} formlyConfig
 * @return {?}
 */
export function defaultFormlyConfig(formlyConfig) {
    return {
        types: [
            { name: 'formly-group', component: FormlyGroup },
            { name: 'formly-template', component: FormlyTemplateType },
        ],
        extensions: [
            { name: 'core', extension: new CoreExtension(formlyConfig) },
            { name: 'field-validation', extension: new FieldValidationExtension(formlyConfig) },
            { name: 'field-form', extension: new FieldFormExtension() },
            { name: 'field-expression', extension: new FieldExpressionExtension() },
        ],
    };
}
var FormlyModule = /** @class */ (function () {
    function FormlyModule(configService, configs) {
        if (configs === void 0) { configs = []; }
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        function (config) { return configService.addConfig(config); }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    FormlyModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: FormlyModule,
            providers: [
                { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
                { provide: FORMLY_CONFIG, useValue: config, multi: true },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
                FormlyConfig,
                FormlyFormBuilder,
            ],
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    FormlyModule.forChild = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: FormlyModule,
            providers: [
                { provide: FORMLY_CONFIG, useValue: config, multi: true },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
                FormlyFormBuilder,
            ],
        };
    };
    FormlyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FormlyForm,
                        FormlyField,
                        FormlyAttributes,
                        FormlyGroup,
                        FormlyValidationMessage,
                        FormlyTemplateType,
                    ],
                    entryComponents: [FormlyGroup, FormlyTemplateType],
                    exports: [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage],
                    imports: [CommonModule],
                },] }
    ];
    /** @nocollapse */
    FormlyModule.ctorParameters = function () { return [
        { type: FormlyConfig },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [FORMLY_CONFIG,] }] }
    ]; };
    return FormlyModule;
}());
export { FormlyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1Qiw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQWdCLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXZELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxZQUEwQjtJQUM1RCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO1NBQzNEO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM1RCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNuRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksa0JBQWtCLEVBQUUsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsSUFBSSx3QkFBd0IsRUFBRSxFQUFFO1NBQ3hFO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFRDtJQXNDRSxzQkFDRSxhQUEyQixFQUNRLE9BQTRCO1FBQS9ELHdCQUFBLEVBQUEsWUFBK0Q7UUFFL0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixFQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFqQ00sb0JBQU87Ozs7SUFBZCxVQUFlLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsV0FBeUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzlGLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDeEUsWUFBWTtnQkFDWixpQkFBaUI7YUFDbEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxxQkFBUTs7OztJQUFmLFVBQWdCLE1BQXlCO1FBQXpCLHVCQUFBLEVBQUEsV0FBeUI7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUN6RCxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ3hFLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFwQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixDQUFDO29CQUMxRixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQ3hCOzs7O2dCQXRDUSxZQUFZOzRDQWtFaEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhOztJQVFyQyxtQkFBQztDQUFBLEFBaERELElBZ0RDO1NBbkNZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1seUZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LmZvcm0nO1xuaW1wb3J0IHsgRm9ybWx5RmllbGQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LmZpZWxkJztcbmltcG9ydCB7IEZvcm1seUF0dHJpYnV0ZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybWx5LmF0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgRm9ybWx5Q29uZmlnLCBDb25maWdPcHRpb24sIEZPUk1MWV9DT05GSUcgfSBmcm9tICcuL3NlcnZpY2VzL2Zvcm1seS5jb25maWcnO1xuaW1wb3J0IHsgRm9ybWx5Rm9ybUJ1aWxkZXIgfSBmcm9tICcuL3NlcnZpY2VzL2Zvcm1seS5mb3JtLmJ1aWxkZXInO1xuaW1wb3J0IHsgRm9ybWx5R3JvdXAgfSBmcm9tICcuL3RlbXBsYXRlcy9mb3JtbHkuZ3JvdXAnO1xuaW1wb3J0IHsgRm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuL3RlbXBsYXRlcy9mb3JtbHkudmFsaWRhdGlvbi1tZXNzYWdlJztcbmltcG9ydCB7IEZvcm1seVRlbXBsYXRlVHlwZSB9IGZyb20gJy4vdGVtcGxhdGVzL2ZpZWxkLXRlbXBsYXRlLnR5cGUnO1xuXG5pbXBvcnQgeyBGaWVsZEV4cHJlc3Npb25FeHRlbnNpb24gfSBmcm9tICcuL2V4dGVuc2lvbnMvZmllbGQtZXhwcmVzc2lvbi9maWVsZC1leHByZXNzaW9uJztcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbkV4dGVuc2lvbiB9IGZyb20gJy4vZXh0ZW5zaW9ucy9maWVsZC12YWxpZGF0aW9uL2ZpZWxkLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgRmllbGRGb3JtRXh0ZW5zaW9uIH0gZnJvbSAnLi9leHRlbnNpb25zL2ZpZWxkLWZvcm0vZmllbGQtZm9ybSc7XG5pbXBvcnQgeyBDb3JlRXh0ZW5zaW9uIH0gZnJvbSAnLi9leHRlbnNpb25zL2NvcmUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Rm9ybWx5Q29uZmlnKGZvcm1seUNvbmZpZzogRm9ybWx5Q29uZmlnKTogQ29uZmlnT3B0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlczogW1xuICAgICAgeyBuYW1lOiAnZm9ybWx5LWdyb3VwJywgY29tcG9uZW50OiBGb3JtbHlHcm91cCB9LFxuICAgICAgeyBuYW1lOiAnZm9ybWx5LXRlbXBsYXRlJywgY29tcG9uZW50OiBGb3JtbHlUZW1wbGF0ZVR5cGUgfSxcbiAgICBdLFxuICAgIGV4dGVuc2lvbnM6IFtcbiAgICAgIHsgbmFtZTogJ2NvcmUnLCBleHRlbnNpb246IG5ldyBDb3JlRXh0ZW5zaW9uKGZvcm1seUNvbmZpZykgfSxcbiAgICAgIHsgbmFtZTogJ2ZpZWxkLXZhbGlkYXRpb24nLCBleHRlbnNpb246IG5ldyBGaWVsZFZhbGlkYXRpb25FeHRlbnNpb24oZm9ybWx5Q29uZmlnKSB9LFxuICAgICAgeyBuYW1lOiAnZmllbGQtZm9ybScsIGV4dGVuc2lvbjogbmV3IEZpZWxkRm9ybUV4dGVuc2lvbigpIH0sXG4gICAgICB7IG5hbWU6ICdmaWVsZC1leHByZXNzaW9uJywgZXh0ZW5zaW9uOiBuZXcgRmllbGRFeHByZXNzaW9uRXh0ZW5zaW9uKCkgfSxcbiAgICBdLFxuICB9O1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtbHlGb3JtLFxuICAgIEZvcm1seUZpZWxkLFxuICAgIEZvcm1seUF0dHJpYnV0ZXMsXG4gICAgRm9ybWx5R3JvdXAsXG4gICAgRm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgRm9ybWx5VGVtcGxhdGVUeXBlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtGb3JtbHlHcm91cCwgRm9ybWx5VGVtcGxhdGVUeXBlXSxcbiAgZXhwb3J0czogW0Zvcm1seUZvcm0sIEZvcm1seUZpZWxkLCBGb3JtbHlBdHRyaWJ1dGVzLCBGb3JtbHlHcm91cCwgRm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWx5TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWdPcHRpb24gPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRm9ybWx5TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogRk9STUxZX0NPTkZJRywgbXVsdGk6IHRydWUsIHVzZUZhY3Rvcnk6IGRlZmF1bHRGb3JtbHlDb25maWcsIGRlcHM6IFtGb3JtbHlDb25maWddIH0sXG4gICAgICAgIHsgcHJvdmlkZTogRk9STUxZX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfSxcbiAgICAgICAgeyBwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29uZmlnLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICBGb3JtbHlDb25maWcsXG4gICAgICAgIEZvcm1seUZvcm1CdWlsZGVyLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKGNvbmZpZzogQ29uZmlnT3B0aW9uID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZvcm1seU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEZPUk1MWV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfSxcbiAgICAgICAgRm9ybWx5Rm9ybUJ1aWxkZXIsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb25maWdTZXJ2aWNlOiBGb3JtbHlDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChGT1JNTFlfQ09ORklHKSBjb25maWdzOiBDb25maWdPcHRpb25bXSA9IFtdLFxuICApIHtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdzLmZvckVhY2goY29uZmlnID0+IGNvbmZpZ1NlcnZpY2UuYWRkQ29uZmlnKGNvbmZpZykpO1xuICB9XG59XG4iXX0=