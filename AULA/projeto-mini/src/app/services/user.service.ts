import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }

  register(user:User){
    return this.httpClient.post(this.url,user); //Observable
  }

  list(){
    return this.httpClient.get(this.url); //Observable
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  retrieveById(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  update(user:User){
    return this.httpClient.put(`${this.url}/${user.id}`,user);
  }

}
