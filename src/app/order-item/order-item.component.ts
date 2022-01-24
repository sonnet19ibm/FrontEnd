import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderItemService } from '../services/order-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {


  
  orderData={
    unitPrice: Math.floor(Math.random() * (1000 - 3000)) + 100000,
    quantity:0,
    productId:  Math.floor(Math.random() * (20 - 60)) + 100,

    sonnetRegisteredId:0,
  };
  constructor(private snack:MatSnackBar,private orderitem:OrderItemService,private router:Router) { }

  ngOnInit(): void {}

 
  
  formSubmit(){
    console.log('orderitem btn clicked');
    this.router.navigate(['address']);
    if(
      this.orderData.quantity==0||
      this.orderData.quantity==null
    ){
      this.snack.open('quantity is required!!','',{
        duration:3000,
      });
      return;
    }

    this.orderitem.createOrder(this.orderData).subscribe((data:any)=>{
      console.log('success');
      console.log(data);
    },
    (error)=>{
      console.log('Error!');
      console.log(error);
   

    });


  }

}