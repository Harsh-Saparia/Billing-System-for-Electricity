import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import bills from 'src/app/models/bills';
import { BillsService } from 'src/app/services/bills.service';
import { ChargesService } from 'src/app/services/charges.service';
import { ConnectionsService } from 'src/app/services/connections.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private chargesService: ChargesService, private connectionsService: ConnectionsService, private billsService: BillsService, private usersService: UsersService) { }
  bill_id: string = ""
  bill: bills = new bills()
  units_consumed = 0
  pay_amount = 0

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        this.bill_id = params['id'];
        this.billsService.getBillById(this.bill_id)
          .subscribe((bill: bills) => {
            this.bill = bill
            this.units_consumed = this.bill.current_reading - this.bill.last_reading
          })
      })
  }

  isUnpaid(){
    if(this.bill.status == "unpaid"){
      return true
    }
    return false
  }

  pay_bill_btn_clicked(){
    document.getElementById("bill_div").hidden = true
    document.getElementById("pay_header").hidden = false
    document.getElementById("pay_body").hidden = false
  }

  payBill(){
    this.bill.status = "paid"
    this.billsService.payBill(this.bill._id, this.bill)
      .subscribe((bill: bills) => {
        alert("Payment recorded successfully")
        this.router.navigate(['/'])
      })
  }

}
