import { AuthUserService } from '../../services/auth-user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User = new User();

  constructor(private router:Router,
              private authUser:AuthUserService,
              private toasty:ToastrService) { }

  ngOnInit() {
    if(this.authUser.getLoggedUser()){
      this.user = this.authUser.getLoggedUser();
      this.router.navigate(["list/user"]);
    }
  }

  onSubmit(registerForm:NgForm){
    if(registerForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }

    this.authUser.login(this.user.login,this.user.password);
  }

}
