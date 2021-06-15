import { UsersService } from './../../services/users.service';
import user from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: user = new user;
  confirm_password = "";

  constructor(private usersService: UsersService,private _router:Router) { }

  ngOnInit(): void {
    this.user.role = "customer";
    this.user.status = "active";
  }

  registerUser(){
    if(this.user.password == this.confirm_password){
      this.usersService.createUser(this.user)
        .subscribe(
          res => {
            console.log(res);
            this._router.navigate([''])
          },
          err => {
            console.log(err);
            document.getElementById("message").innerHTML = err;
          }
      )
    }
    else{
      document.getElementById("message").innerHTML = "please verify your password"
    }
  }

}
