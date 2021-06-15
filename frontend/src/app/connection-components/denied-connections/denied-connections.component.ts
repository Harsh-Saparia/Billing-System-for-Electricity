import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';


@Component({
  selector: 'app-denied-connections',
  templateUrl: './denied-connections.component.html',
  styleUrls: ['./denied-connections.component.css']
})
export class DeniedConnectionsComponent implements OnInit {

  connection_requests: connection[] = [];
  constructor(private connectionsService: ConnectionsService,private _router:Router) { }

  ngOnInit(): void {
    this.connectionsService.getDeniedConnections()
      .subscribe((connection_requests: connection[]) => this.connection_requests = connection_requests);
  }

  view_connection(id: any){
    sessionStorage.setItem('connection_id',id);
    //this._router.navigate(['/connections/view_connection_admin'])
  }

}
