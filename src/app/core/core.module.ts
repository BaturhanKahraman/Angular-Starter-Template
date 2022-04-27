import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
  ],
  providers:[{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi:true}]
})
export class CoreModule { }
