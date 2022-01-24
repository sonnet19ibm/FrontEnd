import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router : Router) { }

  public createUser(loginData: any){
    return this.http.post("http://localhost:8881/customer",loginData);
  }
  
  public validatelogin(signinData: any){
    return this.http.get<any>("http://localhost:8881/login/"+signinData.email +"/"+signinData.password);
  }

  /**public loginUser(customer){
    localStorage.setItem('customer',customer);
    return true;
  }
  //isLogin : user is logged in or not
  public isLoggedIn(){
    let customerStr=localStorage.getItem("customer")
    if(customerStr==undefined || customerStr=='' || customerStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('customer');
    return true;
  }

  public getCustomer(){
    return localStorage.getItem('customer');
  }**/

  public setCustomer(customer){
    localStorage.setItem('customer',JSON.stringify(customer));
  }

  public getCustomer(){
    let customerStr=localStorage.getItem("customer");
    if(customerStr!=null){  
      return JSON.parse(customerStr);

    }
    else{
      return null;
    }
  }

    }
  
  





