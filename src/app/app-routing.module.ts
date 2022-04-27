import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PrimaryLayoutComponent } from './layout/primary-layout/primary-layout.component';

const routes: Routes = [
  {path:'',component:PrimaryLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./features/home/home.module').then(x=>x.HomeModule)}
  ]},
  {path:'auth',component:AuthLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./features/auth/auth.module').then(x=>x.AuthModule)}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
