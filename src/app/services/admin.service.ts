import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router : Router) { }

  public createUser(loginData: any){
    return this.http.post("http://localhost:8880/admin",loginData);
  }
  
  public validatelogin(signinData: any){
    return this.http.get<any>("http://localhost:8880/admin/"+signinData.email +"/"+signinData.password);
  }

  public setAdmin(admin){
    localStorage.setItem('admin',JSON.stringify(admin));
  }

  public getAdmin(){
    let adminStr=localStorage.getItem("admin");
    if(adminStr!=null){  
      return JSON.parse(adminStr);

    }
    else{
      return null;
    }
  }
}