import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavListComponent } from "./sidenav-list/sidenav-list.component";
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { PrimaryLayoutComponent } from './primary-layout/primary-layout.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [NavbarComponent, SidenavListComponent,AuthLayoutComponent, PrimaryLayoutComponent],
  imports: [
    SharedModule,RouterModule
  ],
  exports:[]
})
export class LayoutModule { }
