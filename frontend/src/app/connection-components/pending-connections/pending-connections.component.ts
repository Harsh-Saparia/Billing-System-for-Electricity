import { Router } from '@angular/router';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-connections',
  templateUrl: './pending-connections.component.html',
  styleUrls: ['./pending-connections.component.css']
})
export class PendingConnectionsComponent implements OnInit {

  connection_requests: connection[] = [];
  constructor(private connectionsService: ConnectionsService,private _router:Router) { }

  ngOnInit(): void {
    this.connectionsService.getpendingConnections()
      .subscribe((connection_requests: connection[]) => this.connection_requests = connection_requests);
  }

  view_connection(id: any){
    sessionStorage.setItem('connection_id',id);
    this._router.navigate(['/connections/view_pending_connection'])
  }

}
