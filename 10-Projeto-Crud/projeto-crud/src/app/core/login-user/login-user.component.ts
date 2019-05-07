import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User;

  constructor(private  authenticationService:AuthenticationService,
              private router:Router,
              private toasty:ToastrService) {
    this.user = new User();
   }

  ngOnInit() {
    if(this.authenticationService.getLoogedValue()){
      this.router.navigate(['users/list']);
    }
  }

  onSubmit(loginForm:NgForm){

    if(loginForm.invalid){
      this.toasty.error("All fields are required.");
      this.router.navigate([""]);
      return;
    }

    this.authenticationService.login(this.user.login, this.user.password)
      .then(
        (res:number)=>{
          if(res==2){
            this.router.navigate(['users/list']);
          }
        }
      );
  }

}
