import { Router } from '@angular/router';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import deniedconnection from 'src/app/models/DeniedConnection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  connection: connection = new connection()
  deniedconnection: deniedconnection = new deniedconnection()
  constructor(private connectionsService: ConnectionsService,private router: Router) {
  }

  ngOnInit(): void {
    this.connectionsService.getConnectionById(sessionStorage.getItem('connection_id')).subscribe((connection: connection) => this.connection = connection);
    //sessionStorage.removeItem('connection_id');
  }

  chackbox_selected(event) {
    var verify_button = <HTMLInputElement>document.getElementById("approve_button");
    var deny_button = <HTMLInputElement>document.getElementById("deny_button");
    if (event.target.checked) {
      verify_button.disabled = false;
      deny_button.disabled = false;
    } else {
      verify_button.disabled = true;
      deny_button.disabled = true;
    }
  }

  send_request_to_onfield() {
    this.connection.status = "documents verified";
    this.connectionsService.updateConnection(this.connection, this.connection._id).subscribe(
      res => console.log("res " + res),
      err => console.log(err)
    );
    (document.getElementById("message")).innerHTML = "Connection request passed to onfield team";
    (<HTMLInputElement>document.getElementById("approve_button")).disabled = true;
    (<HTMLInputElement>document.getElementById("deny_button")).disabled = true
  }

  deny_button_click() {
    document.getElementById('deny_div').hidden = false
  }

  deny_connection() {
    if (this.deniedconnection.reason != "") {
      this.deniedconnection.connection_id = this.connection._id;
      this.deniedconnection.incharge_id = sessionStorage.getItem('user_id');
      this.connection.status = "denied";
      this.connectionsService.denyConnection(this.deniedconnection).subscribe(
        res => console.log("deny connection reason res " + res.toString()),
        err => console.log(err)
      );
      this.connectionsService.updateConnection(this.connection, this.connection._id).subscribe(
        res => console.log("res " + res.toString()),
        err => console.log(err)
      );
      (document.getElementById("message")).innerHTML = "Connection denied successfully";
      this.router.navigate(['']);
      (<HTMLInputElement>document.getElementById("approve_button")).disabled = true;
      (<HTMLInputElement>document.getElementById("deny_button")).disabled = true
    }
  }



}
