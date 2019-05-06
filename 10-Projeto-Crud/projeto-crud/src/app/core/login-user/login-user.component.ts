import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService,
              private router:Router) {
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.retrieveByLogin(this.user.login).subscribe(
      (res:User[])=>{
        this.user = res[0];
        sessionStorage.setItem("logged_user",JSON.stringify(this.user));
        this.router.navigate(['users/list']);
      }
    );
  }

}
