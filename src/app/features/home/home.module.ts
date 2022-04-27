import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,HomeRoutingModule,LayoutModule
  ]
})
export class HomeModule { }
