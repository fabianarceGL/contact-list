import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './features/dashboard/contact-list/contact-list.component';
import { ContactDetailsComponent } from './features/dashboard/contact-details/contact-details.component';
import { CreateContactComponent } from './features/dashboard/create-contact/create-contact.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'createContact', component: CreateContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
