import { Routes } from '@angular/router';
import { PhoneListComponent } from './components/phone-list/phone-list.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';

export const routes: Routes = [
    { path: '', component: PhoneListComponent },
    { path: 'add', component: PhoneFormComponent },
];
