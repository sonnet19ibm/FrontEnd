import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Adminorders } from '../model/adminorders';

@Injectable({
  providedIn: 'root'
})
export class ListAdminOrdersService {

  constructor(private http: HttpClient, private router : Router) { }

  getOrderItemList(){
    return this.http.get<Adminorders[]>("http://localhost:8880/list");
  }

  deleteOrderItemList(id:number){
    return this.http.delete("http://localhost:8880/order/"+id);
  }

  
}
