import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyHorizontalWrapper } from './formlyhorizontalwrapper.component';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
        FormlyModule.forRoot({
            wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],
            validationMessages: [
              { name: 'required', message: 'This field is required' },
            ],
          }),
        FormlyBootstrapModule,
        ReactiveFormsModule,
      //  BrowserModule,
        CommonModule
    ],
    declarations: [
        FormlyHorizontalWrapper 
    ],
    exports: [
        FormlyModule,
        FormlyBootstrapModule,
        ReactiveFormsModule,
     //   BrowserModule,
        FormlyHorizontalWrapper,
        //CommonModule

    ],
})
export class FormlyCustomModule {
}