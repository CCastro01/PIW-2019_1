import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedUserBehaviourSubject:BehaviorSubject<User>;
  public loggedUserObservable: Observable<User>;

  constructor(private userService:UserService) {
    this.loggedUserBehaviourSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("logged_user")));
    this.loggedUserObservable = this.loggedUserBehaviourSubject.asObservable();
  }

  async login(login:string,password:string){
    let out:number = 0;
    await this.userService.retrieveByLogin(login)
      .toPromise()
      .then((res:User[])=>{
        if(res.length!=0){
          out = 1;
          let u = res[0];
          if(u.password==password){
            localStorage.setItem("logged_user",JSON.stringify(u));
            this.loggedUserBehaviourSubject.next(u);
            out = 2;
          }
        }
      });

    return out;
    /*this.userService.retrieveByLogin(login).subscribe(
      (res:User[])=>{
        if(res.length!=0){
          let u = res[0];
          if(u.password==password){
            localStorage.setItem("logged_user",JSON.stringify(u));
            this.loggedUserBehaviourSubject.next(u);
          }
        }
      });  */
  }

  logout(){
    localStorage.removeItem("logged_user");
    this.loggedUserBehaviourSubject.next(null);
  }

  getLoogedValue():User{
    return this.loggedUserBehaviourSubject.value;
  }
}
