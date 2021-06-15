import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import user from 'src/app/models/user';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  users: user[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe((users: user[]) => this.users = users);
  }

}
