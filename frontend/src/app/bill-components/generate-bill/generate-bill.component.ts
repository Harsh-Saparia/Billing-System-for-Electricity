import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { BillsService } from './../../services/bills.service';
import { ConnectionsService } from './../../services/connections.service';
import connection from 'src/app/models/connection';
import { ChargesService } from './../../services/charges.service';
import { Component, OnInit } from '@angular/core';
import charges from 'src/app/models/charges';
import bills from 'src/app/models/bills';
import user from 'src/app/models/user';
import * as $ from 'jquery'

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
})
export class GenerateBillComponent implements OnInit {

  charges: charges = new charges()
  connection: connection = new connection()
  bill: bills = new bills()
  user: user = new user()
  flag = false
  connection_id = ""

  constructor(private router: Router,private chargesService: ChargesService, private connectionsService: ConnectionsService, private billsService: BillsService, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  search_button_click() {
    document.getElementById("error_message").innerHTML = ""

    this.connectionsService.getConnectionById(this.connection_id)
      .subscribe(
        (connection: connection) => {
          if (connection != null) {
            if (connection.status == "running") {
              this.connection = connection
              this.chargesService.getChargesByType(this.connection.connection_type)
                .subscribe((charges: charges) => {
                  this.charges = charges,
                  console.log(this.charges.connection_type)
                })
                console.log("user id"+connection.user_id)
              this.usersService.getUserById(this.connection.user_id)
                .subscribe((user: user) => {
                  this.user = user
                  console.log(user.name)
                })
              document.getElementById("bill_table").hidden = false
            }
            else {
              document.getElementById("error_message").innerHTML = "No running connection found with id: " + this.connection_id
            }
          }
          else {
            document.getElementById("error_message").innerHTML = "No Connection found with id: " + this.connection_id
          }
        })
  }

  generate_bill_click() {
    console.log("generate_bill clicked")
    this.bill.user_id = this.user._id
    this.bill.connection_id = this.connection_id
    this.bill.billing_date = new Date()
    this.bill.last_reading = this.connection.current_reading
    this.bill.fixed_charge = this.charges.fixed_charge
    this.bill.fuel_charge = this.charges.fuel_charge
    this.bill.electricity_charge = this.charges.electricity_charge
    let power_usage = this.bill.current_reading - this.bill.last_reading
    this.bill.current_bill = power_usage*(this.charges.fuel_charge + this.charges.electricity_charge) + this.charges.fixed_charge
    this.bill.previous_due = 0 - this.connection.balance
    this.bill.total_bill = this.bill.current_bill + this.bill.previous_due
    this.bill.status = "unpaid"
    this.billsService.createBill(this.bill)
      .subscribe((bill: bills) => {
        console.log("bill generated")
        this.connection.current_reading = this.bill.current_reading
        this.connection.balance = 0 - this.bill.total_bill
        this.connectionsService.updateConnection(this.connection, this.connection_id)
          .subscribe((connection: connection) => {
            console.log("connection updated")
            this.router.navigate([''])
          })
      })
  }

}
