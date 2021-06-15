import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import user  from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: user = new user()
  constructor(private usersService :UsersService,private router : Router) { }

  ngOnInit(): void {
    this.usersService.getUserById(sessionStorage.getItem('user_id'))
      .subscribe((user: user) => {
        this.user = user
      })
  }

  updateProfile(){
    this.usersService.updateUser(this.user,this.user._id)
      .subscribe((user: user) => {
        alert("Profile Updated")
        this.router.navigate(['profile'])
      })
  }

}
