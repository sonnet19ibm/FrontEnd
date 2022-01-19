import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressData={
    sonnetRegisteredId:0,
      street:'',
      city:'',
      state:'',
      country:'',
      pinCode:'',

  };
  
  
  constructor(private snack:MatSnackBar, private address:AddressService,private router:Router) { }

  ngOnInit(): void {
  }


  addressSubmit(){
    console.log('address btn clicked');
    this.router.navigate(['payment'])

    this.address.createAddress(this.addressData).subscribe((data: any)=>{
      console.log('success');
      console.log(data);
    },
    (error)=>{
      console.log('Error !');
      console.log(error);
    }
  );    
  }

}