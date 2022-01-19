import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  constructor(private http: HttpClient, private router : Router) { }

  public updateAddress(address: any){
    return this.http.put("http://localhost:8880/address",address);
  }

  public setAddress(address){
    localStorage.setItem('address',JSON.stringify(address));
  }

  public getAddress(){
    let addressStr=localStorage.getItem("address");
    if(addressStr!=null){  
      return JSON.parse(addressStr);

    }
    else{
      return null;
    }
  }
}