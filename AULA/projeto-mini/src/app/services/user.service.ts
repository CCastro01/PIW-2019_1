import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  register(user:User){
    console.log(JSON.stringify(user));
  }
}
