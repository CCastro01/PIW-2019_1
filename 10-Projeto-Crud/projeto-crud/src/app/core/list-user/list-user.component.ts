import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService,
              private router:Router,
              private toasty:ToastrService) { 
    this.users = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.userService.list().subscribe(
      (res:User[])=>{
        this.users = res;
      }
    );
  }

  delete(id:number){

    if(!confirm("Are you sure?")){
      return;
    }

    this.userService.delete(id).subscribe(
      (res:any)=>{
        console.log(`User id ${id} deleted!`);
        this.list();
        this.toasty.success(`User id ${id} deleted!` )
      },
      (err:any)=>{
        console.log("ERROR",err);
      }
    );
  }

  edit(id:number){
    this.router.navigate(['users/edit',id])
  }

}
