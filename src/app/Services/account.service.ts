import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../components/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpclient:HttpClient) { }

  baseUrl :string = environment.apiUrl;

  register(data:any){
    return this.httpclient.post(this.baseUrl + '/Account/register', data);
  }

  login(data:any){
    return this.httpclient.post(this.baseUrl + '/Account/login', data);
  }
}
