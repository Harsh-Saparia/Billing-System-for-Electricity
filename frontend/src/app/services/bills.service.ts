import { Injectable } from '@angular/core';
import bills from '../models/bills';
import { WebService } from '../web.service';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private webService: WebService) { }

  getBills(){
    return this.webService.get(`bills`);
  }

  getBillById(id: string){
    return this.webService.get(`bills/${id}`)
  }

  createBill(bill: bills){
    return this.webService.post(`bills`, bill);
  }

  getBillsByUser(id: string){
    return this.webService.get(`getBillsByUser/${id}`)
  }

  getBillsByConnection(id: string){
    return this.webService.get(`getBillsByConnection/${id}`)
  }

  payBill(id: string, bill: bills){
    return this.webService.patch(`payBill/${id}`,bill)
  }
}
