import { Injectable } from '@angular/core';
import { WebService } from '../web.service';
import charges from '../models/charges'

@Injectable({
  providedIn: 'root'
})
export class ChargesService {

  constructor(private webService: WebService) { }
  getCharges(){
    return this.webService.get(`charges`);
  }

  getChargesById(id: string){
    return this.webService.get(`charges/${id}`);
  }

  getChargesByType(type: string){
    return this.webService.get(`chargesByType/${type}`);
  }

  createCharges(charges: charges){
    return this.webService.post(`charges`, charges);
  }

  updateCharges(charges: charges,id: string){
    return this.webService.patch(`charges/${id}`, charges);
  }
}
