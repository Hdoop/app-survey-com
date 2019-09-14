import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AccountRoutingModule } from './account/account-routing.module';
import { AccountModule } from './account/account.module';
import { FormlyCustomModule } from 'src/common/formlycustom.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AccountRoutingModule,
    AccountModule,
    FormlyCustomModule
  ],
  declarations: [
    AppComponent
  ],
   bootstrap: [AppComponent]
 //bootstrap: [LoginComponent]
})
export class AppModule {
  constructor() {
  }
}
