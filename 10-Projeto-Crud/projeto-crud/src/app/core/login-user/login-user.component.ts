import { AuthenticationService } from './../../services/authentication.service';
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

  constructor(private  authenticationService:AuthenticationService,
              private router:Router) {
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.authenticationService.login(this.user.login, this.user.password)
      .then(
        (res:number)=>{
          if(res==2){
            this.router.navigate(['users/list']);
          }
        }
      );
    
    /*if(this.authenticationService.login(this.user.login, this.user.password)!=null){
      this.router.navigate(['users/list']);
    }*/
  }

}
