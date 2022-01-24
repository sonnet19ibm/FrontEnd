import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginData={
    emailId:'',
    password:'',
  };
  signinData={
    email:'',
    password:'',
  };

  constructor(private snack:MatSnackBar, private router:Router,private admin:AdminService) { }

  ngOnInit(): void { }
  formSubmit(){
    console.log('Register btn clicked');
    this.router.navigate(['admin-orders'])
    if(
      this.loginData.emailId.trim()=='' ||
      this.loginData.emailId==null
      ){
        this.snack.open('Email Id is required !! ','',{
          duration: 3000,
    });
    return;
    }
   if(
      this.loginData.password.trim()=='' ||
     this.loginData.password==null
     ){
        this.snack.open('Password is required !! ','',{
          duration: 3000,
    });
   return;
   }
   //window.location.href='/home';
   //this.router.navigate(['home'])
    this.admin.createUser(this.loginData).subscribe((data: any)=>{
      console.log('success');
      console.log(data);
    },
    (error)=>{
      console.log('Error !');
      console.log(error);
    });
  }
 loginSubmit(){
  console.log('Login btn clicked');
  
  this.admin.validatelogin(this.signinData).subscribe((data: any)=>{
    this.router.navigate(['admin-orders']);
    console.log('success');
    console.log(data);
  },
  (error)=>{
    console.log('Error !');
    console.log(error);
    console.log('you are not registered..please register to shop withus...thank you!!!')
  }
);
 }

}
