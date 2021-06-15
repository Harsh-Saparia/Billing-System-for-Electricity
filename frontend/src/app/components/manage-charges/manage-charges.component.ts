import { ChargesService } from './../../services/charges.service';
import { Component, OnInit } from '@angular/core';
import charges from '../../models/charges'

@Component({
  selector: 'app-manage-charges',
  templateUrl: './manage-charges.component.html',
  styleUrls: ['./manage-charges.component.css']
})
export class ManageChargesComponent implements OnInit {

  charges: charges[] = []
  new_charges: charges = new charges()

  constructor(private chargesService: ChargesService) { }

  ngOnInit(): void {
    this.chargesService.getCharges()
      .subscribe((charges: charges[]) => this.charges = charges);
  }

  save_new_charges(){
    this.chargesService.createCharges(this.new_charges)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload()
      },
      err => {
        console.log(err);
        document.getElementById("message").innerHTML = err;
      })
  }

  updateCharges(charge: charges){
    this.chargesService.updateCharges(charge,charge._id)
    .subscribe(
      res => {
        console.log(res);
        window.location.reload()
      },
      err => {
        console.log(err);
        document.getElementById("message").innerHTML = err;
      })
  }
}
