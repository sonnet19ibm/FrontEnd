import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../model/deleteaddress';

@Injectable({
  providedIn: 'root'
})
export class DeleteserviceService {

  constructor(private http: HttpClient, private router : Router) { }

  getAddressList(){
    return this.http.get<Address[]>("http://localhost:8881/addresslist");
  }

  deleteAddress(aid:number){
    return this.http.delete("http://localhost:8881/address/"+aid);
  }
}