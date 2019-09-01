import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
   // {path: 'app/login' , component: LoginComponent},
    //{path: 'admin/about' , component: AboutComponent},
    //{path: 'admin/contact' , component: ContactComponent},
    //{path: '**' , component: AboutComponent}
    {
      path: '',
      component: AdminComponent,
      children: [
        {path: 'about' , component: AboutComponent},
        {path: 'contact' , component: ContactComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
