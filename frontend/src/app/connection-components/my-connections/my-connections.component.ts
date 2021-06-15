import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import connection from 'src/app/models/connection';
import { ConnectionsService } from 'src/app/services/connections.service';

@Component({
  selector: 'app-my-connections',
  templateUrl: './my-connections.component.html',
  styleUrls: ['./my-connections.component.css']
})
export class MyConnectionsComponent implements OnInit {

  connections: connection[] = []

  constructor(private connectionsService: ConnectionsService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.connectionsService.getConnectionsByUser(sessionStorage.getItem('user_id'))
      .subscribe((connections: connection[]) => {
        this.connections = connections
      })
  }

  isRunning(connection: connection){
    if(connection.status == "running"){
      return true
    }
    return false
  }

  viewBillsClicked(connection: connection){
    this.router.navigate(['my_bills'],{queryParams: {'id' : connection._id}})
  }

}
