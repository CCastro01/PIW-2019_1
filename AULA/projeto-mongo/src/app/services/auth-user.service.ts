import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private userBehaviorSubject: BehaviorSubject<User>;
  public userObservable: Observable<User>;

  constructor(private router:Router,
              private userService:UserService,
              private toasty:ToastrService) { 
              
    this.userBehaviorSubject = new BehaviorSubject<User>(JSON.parse(
      sessionStorage.getItem("user_login")
    ));
    this.userObservable = this.userBehaviorSubject.asObservable();
  }

  login(login:string, password:string){
    this.userService.login(login,password)
    .subscribe(
      (res:User)=>{
        if(res!=null){
          sessionStorage.setItem("user_login",JSON.stringify(res));
          localStorage.setItem("access_token",res.token);
          this.userBehaviorSubject.next(res);
          this.router.navigate(["user/list"]);
        }else{
          this.toasty.error("Invalid user or/and password!") 
        }
      }
    );
  }

  logout(error?:any){
    if(error.error){
      this.toasty.error(error.error.message); 
    }
    sessionStorage.removeItem("user_login");
    localStorage.removeItem("access_token");
    this.userBehaviorSubject.next(null);
    this.router.navigate([""]);
  }

  getLoggedUser():User{
    let lu = JSON.parse(sessionStorage.getItem("user_login"));
    return lu;
  }
}
