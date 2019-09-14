//import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormlyCustomModule } from 'src/common/formlycustom.module';

@NgModule({
  imports: [
    FormsModule,
    AdminRoutingModule,
    FormlyCustomModule,
   // BrowserModule
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    AdminComponent
  ],

})
export class AdminModule {
  constructor() {
  }
}
