import { ChargesService } from './../../services/charges.service';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import { Component, OnInit } from '@angular/core';
import charges from 'src/app/models/charges';

@Component({
  selector: 'app-view-pending-connections',
  templateUrl: './view-pending-connections.component.html',
  styleUrls: ['./view-pending-connections.component.css']
})
export class ViewPendingConnectionsComponent implements OnInit {

  connection: connection = null
  charges: charges[] = []
  constructor(private connectionsService: ConnectionsService,private chargesService: ChargesService) { }

  ngOnInit(): void {
    this.connectionsService.getConnectionById(sessionStorage.getItem('connection_id')).subscribe((connection: connection) => this.connection = connection);
    this.chargesService.getCharges().subscribe((charges: charges[]) => this.charges = charges);
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

  establish_connection(){
    this.connection.status = "running";
    for(let i=0;i<this.charges.length;i++){
      if(this.charges[i].connection_type == this.connection.connection_type){
        this.connection.current_reading = 0
        this.connection.balance = 0 - this.charges[i].connection_charge
        break;
      }
    }
    this.connection.connection_date = new Date().toLocaleDateString();
    this.connectionsService.updateConnection(this.connection,this.connection._id).subscribe(
      res => console.log("res "+res),
      err => console.log(err)
    );
    (document.getElementById("message")).innerHTML = "Connection established successfully";
    (<HTMLInputElement>document.getElementById("approve_button")).disabled = true;
  }

}
