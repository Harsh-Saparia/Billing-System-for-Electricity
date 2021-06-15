import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electrify';
  role = '';
  constructor(private _router:Router) { }
  ngOnInit(): void {
    this.update_nav()
  }

  isAdmin(){
    if(this.role == "admin"){
      return true;
    }
    return false;
  }

  isOnfield_team(){
    if(this.role == "onfield_team"){
      return true;
    }
    return false;
  }

  isRequest_verifier(){
    if(this.role == "request_verifier"){
      return true;
    }
    return false;
  }

  isCustomer(){
    if(this.role == "customer"){
      return true;
    }
    return false;
  }


  logout(){
    sessionStorage.clear();
    this.update_nav();
    this._router.navigate(['/login'])
  }

  isLoggedIn(){
    if(sessionStorage.getItem('logged_in') == 'logged_in'){
      this.role = sessionStorage.getItem('user_role');
      return true;
    }
    return false;
  }

  update_nav(){
    console.log(sessionStorage.getItem('logged_in'))
    if(sessionStorage.getItem('logged_in')){

      this.role = sessionStorage.getItem('user_role');
      var admin_navs = document.getElementsByClassName("admin")
      var customer_navs = document.getElementsByClassName("customer")
      var request_verifier_navs = document.getElementsByClassName("request_verifier")
      var onfield_team_navs = document.getElementsByClassName("onfield_team")
      for(let i=0;i<admin_navs.length;i++){
        if(this.isAdmin()){
          (<HTMLUListElement>admin_navs[i]).hidden = false;
        }
        else{
          (<HTMLUListElement>admin_navs[i]).hidden = true;
        }
      }

      for(let i=0;i<customer_navs.length;i++){
        if(this.isCustomer()){
          (<HTMLUListElement>customer_navs[i]).hidden = false;
        }
        else{
          (<HTMLUListElement>customer_navs[i]).hidden = true;
        }
      }

      for(let i=0;i<request_verifier_navs.length;i++){
        if(this.isRequest_verifier()){
          (<HTMLUListElement>request_verifier_navs[i]).hidden = false;
        }
        else{
          (<HTMLUListElement>request_verifier_navs[i]).hidden = true;
        }
      }

      for(let i=0;i<onfield_team_navs.length;i++){
        if(this.isOnfield_team()){
          (<HTMLUListElement>onfield_team_navs[i]).hidden = false;
        }
        else{
          (<HTMLUListElement>onfield_team_navs[i]).hidden = true;
        }
      }

      document.getElementById('loggedInNav').hidden = false;
      document.getElementById('loggedOutNav').hidden = true;
    }
    else{
      document.getElementById('loggedInNav').hidden = true;
      document.getElementById('loggedOutNav').hidden = false;
    }
  }

}
