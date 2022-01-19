import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersService {

  constructor(private http:HttpClient,private router:Router) { }

  public createOrder(order :any){
    return this.http.post("http://localhost:8880/order",order);
  }

  public setOrder(order){
    localStorage.setItem('order',JSON.stringify(order));
  }

  public getOrder(){
    let orderStr=localStorage.getItem('order');
    if(orderStr!=null){  
      return JSON.parse(orderStr);

    }
    else{
      return null;
    }
  }

}
