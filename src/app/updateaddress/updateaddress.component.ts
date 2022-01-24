import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UpdateserviceService } from '../services/updateservice.service';


@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.component.html',
  styleUrls: ['./updateaddress.component.css']
})
export class UpdateaddressComponent implements OnInit {

  addressData={
    aid:'',
    sonnetRegisteredId:0,
    street:'',
    city:'',
    state:'',
    country:'',
    pinCode:'',
    
  };

  constructor(private snack:MatSnackBar, private updateaddress:UpdateserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  updateSubmit(){
    console.log('update address btn clicked');
    this.router.navigate(['payment'])

    this.updateaddress.updateAddress(this.addressData).subscribe((data: any)=>{
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
