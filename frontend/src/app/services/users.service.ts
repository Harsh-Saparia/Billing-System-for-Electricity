import { Injectable } from '@angular/core';
import { WebService } from '../web.service';
import user from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private webService: WebService) { }

  getUsers(){
    return this.webService.get(`users`);
  }

  getUserById(id: string){
    return this.webService.get(`users/${id}`);
  }

  getUserByEmail(email: string){
    return this.webService.get(`user_by_email/${email}`);
  }

  createUser(user: user){
    return this.webService.post(`users`, user);
  }

  loginUser(loginData: any){
    return this.webService.post('login',loginData);
  }

  updateUser(user: any,id: string){
    return this.webService.patch(`users/${id}`,user)
  }

  sendOTP(Data: any){
    return this.webService.post(`sendOTP`,Data)
  }
}
