import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http:HttpClient,private router:Router) { }

  public createOrder(orderitem :any){
    return this.http.post("http://localhost:8881/orderitem",orderitem);
  }

  public setOrder(orderitem){
    localStorage.setItem('orderitem',JSON.stringify(orderitem));
  }

  public getOrder(){
    let orderStr=localStorage.getItem('orderitem');
    if(orderStr!=null){  
      return JSON.parse(orderStr);

    }
    else{
      return null;
    }
  }
}