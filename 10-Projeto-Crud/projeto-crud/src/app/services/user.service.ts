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
    //return this.httpClient.post(this.url,user); //json-server
    return this.httpClient.post(`${this.url}/register`,user); //express
  }

  retrieve(id:number){
    //return this.httpClient.get(`${this.url}/${id}`); //json-server
    return this.httpClient.get(`${this.url}/retrieve/${id}`); //express
  }

  list(){
    //return this.httpClient.get(this.url); //json-server
    return this.httpClient.get(`${this.url}/list`); //express
  }

  update(user:User){
    //return this.httpClient.put(`${this.url}/${user.id}`,user); //json-server
    return this.httpClient.put(`${this.url}/update/${user.id}`,user); // express
  }

  delete(id:number){
    //return this.httpClient.delete(`${this.url}/${id}`); //json-server
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveByLogin(login:string){
    //return this.httpClient.get(`${this.url}/?login=${login}`);
    return this.httpClient.get(`${this.url}/retrieve/login/${login}`);
  }

}
