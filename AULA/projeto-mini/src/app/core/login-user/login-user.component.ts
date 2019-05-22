import { AuthUserService } from './../../services/auth-user.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User = new User();

  constructor(private userService: UserService,
              private router:Router,
              private toasty:ToastrService,
              private authUser:AuthUserService) { }

  ngOnInit() {
    if(this.authUser.getLoggedUser()){
      this.user = this.authUser.getLoggedUser();
      this.router.navigate(["list/user"]);
    }
  }

  onSubmit(){
    this.authUser.login(this.user.login,this.user.password);
  }

}
