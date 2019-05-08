import { UserService } from './../../services/user.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.register(this.user);
  }

}
