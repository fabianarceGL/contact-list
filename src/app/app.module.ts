import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './features/dashboard/contact-list/contact-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeaderComponent } from './features/dashboard/header/header.component';
import { ContactComponent } from './features/dashboard/contact-list/contact/contact.component';
import { FirstUpperCaseLetterPipe } from './core/first-upper-case-letter.pipe';
import { CreateContactComponent } from './features/dashboard/create-contact/create-contact.component';
import { ContactDetailsComponent } from './features/dashboard/contact-details/contact-details.component';
import { ConfirmDialogComponent } from './core/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DashboardComponent,
    HeaderComponent,
    ContactComponent,
    FirstUpperCaseLetterPipe,
    CreateContactComponent,
    ContactDetailsComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
