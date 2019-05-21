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
              private toasty:ToastrService) { }

  ngOnInit() {
    let userSessionStr = sessionStorage.getItem("user_login");
    if(userSessionStr){
      this.user = JSON.parse(userSessionStr);
      this.router.navigate(["list/user"]);
    }
  }

  onSubmit(){
    this.userService.retrieveByLogin(this.user.login)
      .subscribe(
        (res:User[])=>{
          if(res.length>0){
            if(res[0].password==this.user.password){
              sessionStorage.setItem("user_login",JSON.stringify(res[0]));
              this.router.navigate(["list/user"]);
            }else{
              console.log("Invalid password!"); 
              this.toasty.error("Invalid password!") 
            }
          }else{
            console.log("User does not exist!");
            this.toasty.error("User does not exist!") 
          }
        }
      );
  }

}
