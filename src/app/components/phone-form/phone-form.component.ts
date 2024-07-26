import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Phone } from '../../models/phone.model';
import { PhoneService } from '../../services/phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.css'
})
export class PhoneFormComponent {
  phone: Phone = { imei: 0, brand: '', name: '', color: '', capacity: 0 };

  constructor(private phoneService: PhoneService, private router: Router) {
  }

  phoneForm: FormGroup = new FormGroup({
    imei: new FormControl(this.phone.imei, Validators.required),
    brand: new FormControl(this.phone.brand, Validators.required),
    name: new FormControl(this.phone.name, Validators.required),
    color: new FormControl(this.phone.color, Validators.required),
    capacity: new FormControl(this.phone.capacity, Validators.required),
  });

  addPhone() {
    this.phoneService.addPhone(this.phoneForm.value);

    this.router.navigate(['/']);
  }
}
