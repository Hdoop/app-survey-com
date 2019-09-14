import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-horizontal-wrapper',
  template: `
    <div class="form-group row "  [ngClass]="showError?'has-error':''" >
      <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label">
        {{ to.label }}
        <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>
      </label>
      <div class="col-sm-7">
        <ng-template #fieldComponent></ng-template>
        <span *ngIf="showError" class="help-block font-size-12">
            <formly-validation-message  [field]="field"></formly-validation-message>
        </span>
      </div>

      
    </div>
  `,
})
export class FormlyHorizontalWrapper extends FieldWrapper {
}