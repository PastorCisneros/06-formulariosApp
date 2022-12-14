import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'template',
    loadChildren:()=>import('./template/template.module').then(m=>m.TemplateModule)
  },
  {
    path:'reactive',
    loadChildren:()=>import('./reactive/reative.module').then(m=>m.ReativeModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'**',
    redirectTo:'template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
