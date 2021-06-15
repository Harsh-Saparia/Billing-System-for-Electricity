import  deniedconnection  from 'src/app/models/DeniedConnection';
import { Injectable, Component } from '@angular/core';
import { WebService } from '../web.service';
import user from 'src/app/models/user';
import connection from 'src/app/models/connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private webService: WebService) { }
  getConnections(){
    return this.webService.get(`connections`);
  }

  getNewConnectionRequests(){
    return this.webService.get(`new_connection_requests`);
  }

  getStatus(id: string){
    return this.webService.get(`get_connection_status/${id}`)
  }

  getOnfieldConnectionRequests(){
    return this.webService.get(`onfield_requests`);
  }

  getpendingConnections(){
    return this.webService.get(`pending_connections`);
  }

  denyConnection(deniedconnection: deniedconnection){
    return this.webService.post(`denied_connection`,deniedconnection);
  }

  getDeniedConnections(){
    return this.webService.get(`denied_connections`);
  }

  getRunningConnections(){
    return this.webService.get(`running_connections`);
  }

  getConnectionById(id: string){
    return this.webService.get(`connections/${id}`);
  }

  getConnectionsByUser(id: string){
    return this.webService.get(`connectionsByUser/${id}`);
  }

  createConnection(connection: connection){
    return this.webService.post(`connections`, connection);
  }

  updateConnection(connection: any,id: string){
    return this.webService.patch(`connections/${id}`,connection)
  }
}
