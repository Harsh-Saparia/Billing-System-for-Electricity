import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';


@Component({
  selector: 'app-running-connections',
  templateUrl: './running-connections.component.html',
  styleUrls: ['./running-connections.component.css']
})
export class RunningConnectionsComponent implements OnInit {

  connection_requests: connection[] = [];
  constructor(private connectionsService: ConnectionsService,private _router:Router) { }

  ngOnInit(): void {
    this.connectionsService.getRunningConnections()
      .subscribe((connection_requests: connection[]) => this.connection_requests = connection_requests);
  }


}
