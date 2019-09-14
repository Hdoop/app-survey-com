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
export class FormlyModule {
    /**
     * @param {?} configService
     * @param {?=} configs
     */
    constructor(configService, configs = []) {
        if (!configs) {
            return;
        }
        configs.forEach((/**
         * @param {?} config
         * @return {?}
         */
        config => configService.addConfig(config)));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
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
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forChild(config = {}) {
        return {
            ngModule: FormlyModule,
            providers: [
                { provide: FORMLY_CONFIG, useValue: config, multi: true },
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
                FormlyFormBuilder,
            ],
        };
    }
}
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
FormlyModule.ctorParameters = () => [
    { type: FormlyConfig },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [FORMLY_CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWZvcm1seS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1Qiw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQWdCLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBRXZELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxZQUEwQjtJQUM1RCxPQUFPO1FBQ0wsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFO1NBQzNEO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUM1RCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsSUFBSSx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNuRixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksa0JBQWtCLEVBQUUsRUFBRTtZQUMzRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsSUFBSSx3QkFBd0IsRUFBRSxFQUFFO1NBQ3hFO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFlRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUF5QnZCLFlBQ0UsYUFBMkIsRUFDUSxVQUEwQixFQUFFO1FBRS9ELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBakNELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBdUIsRUFBRTtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDOUYsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDekQsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUN4RSxZQUFZO2dCQUNaLGlCQUFpQjthQUNsQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBdUIsRUFBRTtRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ3pELEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDeEUsaUJBQWlCO2FBQ2xCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsdUJBQXVCO29CQUN2QixrQkFBa0I7aUJBQ25CO2dCQUNELGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztnQkFDbEQsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLENBQUM7Z0JBQzFGLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4Qjs7OztZQXRDUSxZQUFZO3dDQWtFaEIsUUFBUSxZQUFJLE1BQU0sU0FBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtbHlGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS5mb3JtJztcbmltcG9ydCB7IEZvcm1seUZpZWxkIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS5maWVsZCc7XG5pbXBvcnQgeyBGb3JtbHlBdHRyaWJ1dGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm1seS5hdHRyaWJ1dGVzJztcbmltcG9ydCB7IEZvcm1seUNvbmZpZywgQ29uZmlnT3B0aW9uLCBGT1JNTFlfQ09ORklHIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtbHkuY29uZmlnJztcbmltcG9ydCB7IEZvcm1seUZvcm1CdWlsZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtbHkuZm9ybS5idWlsZGVyJztcbmltcG9ydCB7IEZvcm1seUdyb3VwIH0gZnJvbSAnLi90ZW1wbGF0ZXMvZm9ybWx5Lmdyb3VwJztcbmltcG9ydCB7IEZvcm1seVZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi90ZW1wbGF0ZXMvZm9ybWx5LnZhbGlkYXRpb24tbWVzc2FnZSc7XG5pbXBvcnQgeyBGb3JtbHlUZW1wbGF0ZVR5cGUgfSBmcm9tICcuL3RlbXBsYXRlcy9maWVsZC10ZW1wbGF0ZS50eXBlJztcblxuaW1wb3J0IHsgRmllbGRFeHByZXNzaW9uRXh0ZW5zaW9uIH0gZnJvbSAnLi9leHRlbnNpb25zL2ZpZWxkLWV4cHJlc3Npb24vZmllbGQtZXhwcmVzc2lvbic7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb25FeHRlbnNpb24gfSBmcm9tICcuL2V4dGVuc2lvbnMvZmllbGQtdmFsaWRhdGlvbi9maWVsZC12YWxpZGF0aW9uJztcbmltcG9ydCB7IEZpZWxkRm9ybUV4dGVuc2lvbiB9IGZyb20gJy4vZXh0ZW5zaW9ucy9maWVsZC1mb3JtL2ZpZWxkLWZvcm0nO1xuaW1wb3J0IHsgQ29yZUV4dGVuc2lvbiB9IGZyb20gJy4vZXh0ZW5zaW9ucy9jb3JlL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZvcm1seUNvbmZpZyhmb3JtbHlDb25maWc6IEZvcm1seUNvbmZpZyk6IENvbmZpZ09wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZXM6IFtcbiAgICAgIHsgbmFtZTogJ2Zvcm1seS1ncm91cCcsIGNvbXBvbmVudDogRm9ybWx5R3JvdXAgfSxcbiAgICAgIHsgbmFtZTogJ2Zvcm1seS10ZW1wbGF0ZScsIGNvbXBvbmVudDogRm9ybWx5VGVtcGxhdGVUeXBlIH0sXG4gICAgXSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICB7IG5hbWU6ICdjb3JlJywgZXh0ZW5zaW9uOiBuZXcgQ29yZUV4dGVuc2lvbihmb3JtbHlDb25maWcpIH0sXG4gICAgICB7IG5hbWU6ICdmaWVsZC12YWxpZGF0aW9uJywgZXh0ZW5zaW9uOiBuZXcgRmllbGRWYWxpZGF0aW9uRXh0ZW5zaW9uKGZvcm1seUNvbmZpZykgfSxcbiAgICAgIHsgbmFtZTogJ2ZpZWxkLWZvcm0nLCBleHRlbnNpb246IG5ldyBGaWVsZEZvcm1FeHRlbnNpb24oKSB9LFxuICAgICAgeyBuYW1lOiAnZmllbGQtZXhwcmVzc2lvbicsIGV4dGVuc2lvbjogbmV3IEZpZWxkRXhwcmVzc2lvbkV4dGVuc2lvbigpIH0sXG4gICAgXSxcbiAgfTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybWx5Rm9ybSxcbiAgICBGb3JtbHlGaWVsZCxcbiAgICBGb3JtbHlBdHRyaWJ1dGVzLFxuICAgIEZvcm1seUdyb3VwLFxuICAgIEZvcm1seVZhbGlkYXRpb25NZXNzYWdlLFxuICAgIEZvcm1seVRlbXBsYXRlVHlwZSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRm9ybWx5R3JvdXAsIEZvcm1seVRlbXBsYXRlVHlwZV0sXG4gIGV4cG9ydHM6IFtGb3JtbHlGb3JtLCBGb3JtbHlGaWVsZCwgRm9ybWx5QXR0cmlidXRlcywgRm9ybWx5R3JvdXAsIEZvcm1seVZhbGlkYXRpb25NZXNzYWdlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1seU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29uZmlnT3B0aW9uID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZvcm1seU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEZPUk1MWV9DT05GSUcsIG11bHRpOiB0cnVlLCB1c2VGYWN0b3J5OiBkZWZhdWx0Rm9ybWx5Q29uZmlnLCBkZXBzOiBbRm9ybWx5Q29uZmlnXSB9LFxuICAgICAgICB7IHByb3ZpZGU6IEZPUk1MWV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfSxcbiAgICAgICAgRm9ybWx5Q29uZmlnLFxuICAgICAgICBGb3JtbHlGb3JtQnVpbGRlcixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChjb25maWc6IENvbmZpZ09wdGlvbiA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGb3JtbHlNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBGT1JNTFlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgIEZvcm1seUZvcm1CdWlsZGVyLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29uZmlnU2VydmljZTogRm9ybWx5Q29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRk9STUxZX0NPTkZJRykgY29uZmlnczogQ29uZmlnT3B0aW9uW10gPSBbXSxcbiAgKSB7XG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uZmlncy5mb3JFYWNoKGNvbmZpZyA9PiBjb25maWdTZXJ2aWNlLmFkZENvbmZpZyhjb25maWcpKTtcbiAgfVxufVxuIl19