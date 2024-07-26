import { Injectable } from '@angular/core';
import { Phone } from '../models/phone.model';
import { PHONE } from '../data/phones.stub';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phones: Phone[] = [];

  constructor() {
    const storedphones = localStorage.getItem('phones');
    
    if (storedphones) {
      this.phones = JSON.parse(storedphones);
    } else {
      this.phones = [];
    }
  }

  getAll(): Phone[]{
    return this.phones;
  }

  addPhone(phone: Phone): void {
    this.phones.push(phone);

    localStorage.setItem('phones', JSON.stringify(this.phones));
  }

  deletePhone(imei: number): void {
    this.phones = this.phones.filter(phone => phone.imei !== imei);

    localStorage.setItem('phones', JSON.stringify(this.phones));
  }
}
