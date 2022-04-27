import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url=environment.url;
  constructor(private http:HttpClient) {
    this.url+="auth/";
   }

  Login(model:LoginModel){
    return this.http.post(this.url+"login",model)
  }
}
