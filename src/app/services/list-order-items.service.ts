import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Orderitem } from '../model/orderitemlist';

@Injectable({
  providedIn: 'root'
})
export class ListOrderItemsService {

  constructor(private http: HttpClient, private router : Router) { }

  getOrderItemList(){
    return this.http.get<Orderitem[]>("http://localhost:8880/orderitemlist");
  }
  deleteOrderItemList(id:number){
    return this.http.delete("http://localhost:8880/orderitem/"+id);
  }

}