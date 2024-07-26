import { Injectable } from '@angular/core';
import { Phone } from '../models/phone.model';
import { PHONE } from '../data/phones.stub';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phones: Phone[] = [];

  constructor() {
    this.phones = PHONE;
  }

  getAll(): Phone[]{
    return this.phones;
  }

  addPhone(phone: Phone): void {
    this.phones.push(phone);
  }
}
