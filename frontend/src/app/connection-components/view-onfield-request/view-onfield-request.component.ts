import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-onfield-request',
  templateUrl: './view-onfield-request.component.html',
  styleUrls: ['./view-onfield-request.component.css']
})
export class ViewOnfieldRequestComponent implements OnInit {

  connection: connection = new connection()
  constructor(private connectionsService: ConnectionsService) { }

  ngOnInit(): void {
    this.connectionsService.getConnectionById(sessionStorage.getItem('connection_id')).subscribe((connection: connection) => this.connection = connection);
  }

  chackbox_selected(event){
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

  approve_connection(){
    this.connection.status = "approved";
    this.connectionsService.updateConnection(this.connection,this.connection._id).subscribe(
      res => console.log("res "+res),
      err => console.log(err)
    );
    (document.getElementById("message")).innerHTML = "Connection approved successfully";
    (<HTMLInputElement>document.getElementById("approve_button")).disabled = true;
    (<HTMLInputElement>document.getElementById("deny_button")).disabled = true
  }

  deny_connection(){
    this.connection.status = "denied";
    this.connectionsService.updateConnection(this.connection,this.connection._id).subscribe(
      res => console.log("res "+res),
      err => console.log(err)
    );
    (document.getElementById("message")).innerHTML = "Connection denied successfully";
    (<HTMLInputElement>document.getElementById("approve_button")).disabled = true;
    (<HTMLInputElement>document.getElementById("deny_button")).disabled = true
  }
}
