import { Component } from '@angular/core';
import { Phone } from '../../models/phone.model';
import { PhoneService } from '../../services/phone.service';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list'; 

@Component({
  selector: 'app-phone-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatListModule
  ],
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.css'
})
export class PhoneListComponent {
  phones: Phone[] = [];

  constructor(private phoneService: PhoneService) {
    this.phones = this.phoneService.getAll();
  }
}
