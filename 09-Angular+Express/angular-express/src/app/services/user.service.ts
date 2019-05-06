import { User } from './../models/User';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{


  constructor() { 
  }

  setUser(user:User){
    localStorage.setItem("user",JSON.stringify(user));
  }

  getUser():User{
    let userJson:string = localStorage.getItem("user");
    if(userJson==null) return null;
    return JSON.parse(userJson)
  }

  ngOnDestroy(){
    localStorage.clear();
  }

}
