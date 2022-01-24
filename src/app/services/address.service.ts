import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private http: HttpClient, private router : Router) { }


  public createAddress(address: any){
    return this.http.post("http://localhost:8881/address",address);
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

