import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Password',
        type: 'password',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
  ];

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
   }
   
  submit() {
    alert(JSON.stringify(this.model));
  }
}
