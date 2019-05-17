import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService,
              private toasty:ToastrService) {
    this.user = new User();
   }

  ngOnInit() {
  }

  onSubmit(registerForm:NgForm){
    if(registerForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }

    console.log(JSON.stringify(this.user));
    if(this.user!=null) this.add();
  }

  add(){
    this.userService.add(this.user).subscribe(
      (res:User)=>{
        console.log(`User id:${res._id} added!`);
        console.log(`User id:${res.id} added!`);
        this.toasty.success("User added.")
      }
    );
  }

 

}

