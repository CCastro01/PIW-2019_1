import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


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
}
