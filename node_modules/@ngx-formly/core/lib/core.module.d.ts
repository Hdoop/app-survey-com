import { ModuleWithProviders } from '@angular/core';
import { FormlyConfig, ConfigOption } from './services/formly.config';
export declare function defaultFormlyConfig(formlyConfig: FormlyConfig): ConfigOption;
export declare class FormlyModule {
    static forRoot(config?: ConfigOption): ModuleWithProviders;
    static forChild(config?: ConfigOption): ModuleWithProviders;
    constructor(configService: FormlyConfig, configs?: ConfigOption[]);
}
