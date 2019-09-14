//import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { FormlyCustomModule} from '../../common/formlycustom.module'


@NgModule({
  imports: [
  //  BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    FormlyCustomModule
  ],
  declarations: [
    LoginComponent,
  
  ],
 
})
export class AccountModule {
  constructor() {
  }
}
