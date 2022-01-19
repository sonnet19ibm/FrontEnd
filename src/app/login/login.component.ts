import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginData={
    emailId:'',
    firstName:'',
    lastName:'',
    mobileNo:0,
    password:'',
  };
  signinData={
    email:'',
    password:''
  };

  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  ngOnInit(): void {}

  formSubmit(){
    console.log('Register btn clicked');
    this.router.navigate(['home'])
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
    this.login.createUser(this.loginData).subscribe((data: any)=>{
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
  
  this.login.validatelogin(this.signinData).subscribe((data: any)=>{
    this.router.navigate(['home']);
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





