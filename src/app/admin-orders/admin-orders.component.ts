import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminOrdersService } from '../services/admin-orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orderData={
    orderTrackingNumber:'',
    totalQuantity:0,
    totalPrice:0,
    status:'',
    emailId:'',
  };

  constructor(private snack:MatSnackBar,private router:Router,private order:AdminOrdersService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('order btn clicked');
    this.router.navigate(['address']);
    if(
      this.orderData.totalQuantity==0||
      this.orderData.totalQuantity==null
    ){
      this.snack.open('quantity is required!!','',{
        duration:3000,
      });
      return;
    }

    this.order.createOrder(this.orderData).subscribe((data:any)=>{
      console.log('success');
      console.log(data);
    },
    (error)=>{
      console.log('Error!');
      console.log(error);
   

    });


  }
}