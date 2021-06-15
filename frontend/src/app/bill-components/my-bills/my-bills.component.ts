import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ChargesService } from 'src/app/services/charges.service';
import { ConnectionsService } from 'src/app/services/connections.service';
import { BillsService } from 'src/app/services/bills.service';
import { UsersService } from 'src/app/services/users.service';
import bills from 'src/app/models/bills';

@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent implements OnInit {

  bills: bills[] = []
  connection_id = ""
  constructor(private router: Router, private route: ActivatedRoute, private chargesService: ChargesService, private connectionsService: ConnectionsService, private billsService: BillsService, private usersService: UsersService) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['id']) {
      this.route.queryParams
      .subscribe((params) => {
        this.connection_id = params['id'];
        this.billsService.getBillsByConnection(this.connection_id)
          .subscribe((bills: bills[]) => {
            this.bills = bills
          })
      })
    }
    else {
      this.billsService.getBillsByUser(sessionStorage.getItem('user_id'))
        .subscribe((bills: bills[]) => {
          console.log(bills)
          this.bills = bills
        })
    }
  }

  view_bill(id: string) {
    this.router.navigate(['view_my_bill'], { queryParams: { 'id': id } })
  }

}
