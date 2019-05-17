import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:3000/users";
   }

  add(user:User):Observable<User>{
    //return this.httpClient.post(this.url,user); //json-server
    return this.httpClient.post<User>(`${this.url}/register`,user); //express
  }

  retrieve(id:number):Observable<User>{
    //return this.httpClient.get(`${this.url}/${id}`); //json-server
    return this.httpClient.get<User>(`${this.url}/retrieve/${id}`); //express
  }

  list():Observable<User[]>{
    //return this.httpClient.get(this.url); //json-server
    return this.httpClient.get<User[]>(`${this.url}/list`); //express
  }

  update(user:User):Observable<User>{
    //return this.httpClient.put(`${this.url}/${user.id}`,user); //json-server
    //return this.httpClient.put<User>(`${this.url}/update/${user.id}`,user); // express
    return this.httpClient.put<User>(`${this.url}/update/${user._id}`,user); // mongo
  }

  delete(id:number){
    //return this.httpClient.delete(`${this.url}/${id}`); //json-server
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveByLogin(login:string):Observable<User[]>{
    //return this.httpClient.get(`${this.url}/?login=${login}`); //json-server
    return this.httpClient.get<User[]>(`${this.url}/retrieve/login/${login}`); //express
  }

}
