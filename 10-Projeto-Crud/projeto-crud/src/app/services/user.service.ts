import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:3000/users";
   }

  add(user:User){
    return this.httpClient.post(this.url,user);
  }

  retrieve(id:number){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  list(){
    return this.httpClient.get(this.url);
  }

  update(user:User){
    return this.httpClient.put(`${this.url}/${user.id}`,user);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  retrieveByLogin(login:string){
    return this.httpClient.get(`${this.url}/?login=${login}`);
  }

}
