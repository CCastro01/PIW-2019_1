import { User } from './../models/User';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{


  constructor(private http:HttpClient) { 
  }

  setUser(user:User){
    //localStorage.setItem("user",JSON.stringify(user));
    return this.http.post("http://localhost:3000/angular/express/users/register",user);
  }

  getUser(){
    /*let userJson:string = localStorage.getItem("user");
    if(userJson==null) return null;
    return JSON.parse(userJson)*/
    return this.http.get("http://localhost:3000/angular/express/users/show ");
  }

  ngOnDestroy(){
    //localStorage.clear();
  }

}
