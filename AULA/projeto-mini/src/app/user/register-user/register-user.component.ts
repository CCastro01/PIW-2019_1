import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:User;

  constructor(private userService:UserService,
              private toasty:ToastrService,
              private router:Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(registerForm:NgForm){
    if(registerForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }
    this.userService.register(this.user).subscribe(
      (res:User)=>{
        console.log(`User id ${res.id} added!`)
        this.toasty.success(`User ${res.firstName} added!.`);
        this.router.navigate([""]);
      }
    );
  }

}
