import { Router } from '@angular/router';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import { Component, OnInit } from '@angular/core';
import { WebService } from '../../web.service';

@Component({
  selector: 'app-new-connection',
  templateUrl: './new-connection.component.html',
  styleUrls: ['./new-connection.component.css']
})
export class NewConnectionComponent implements OnInit {

  new_connection: connection = new connection;
  selected_file: File = null;
  selected_file2: File = null;
  constructor(private connectionsService: ConnectionsService,private webService: WebService, private router: Router) { }

  ngOnInit(): void {

  }
  request_connection(){
    this.new_connection.user_id = sessionStorage.getItem('user_id');
    this.new_connection.status = "requested";
    this.new_connection.request_date = new Date().toLocaleDateString();
    this.new_connection.current_reading = 0;
    this.connectionsService.createConnection(this.new_connection)
      .subscribe(
        res => {
          alert('connection request registered successfully :)')
          this.router.navigate([''])
          console.log(res)
        },
        err => console.log(err)
      )
  }

  address_proof_selected(event){
    this.selected_file = <File>event.target.files[0];
    const fd = new FormData();
    var d = new Date()
    var name = ""+d.getTime()+this.selected_file.name;
    this.new_connection.address_proof = name;
    fd.append('address', this.selected_file, name);
    this.webService.post(`document`,fd).subscribe(res => {
      console.log(res.toString());
    })
  }

  userid_proof_selected(event){
    this.selected_file2 = <File>event.target.files[0];
    var d = new Date();
    const fd = new FormData();
    var name = ""+d.getTime()+this.selected_file2.name;
    this.new_connection.user_id_proof = name;
    fd.append('userid', this.selected_file2, name);
    this.webService.post(`document`,fd).subscribe(res => {
      console.log(res);
    })
  }
}
