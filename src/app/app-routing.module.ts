import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
   // {path: 'app/login' , component: LoginComponent},
    //{path: 'admin/about' , component: AboutComponent},
    //{path: 'admin/contact' , component: ContactComponent},
   // { path: '', redirectTo: '/app/login', pathMatch: 'full' },
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule', //Lazy load account module
      data: { preload: true }
    },
     {path: '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
