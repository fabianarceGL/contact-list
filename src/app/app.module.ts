import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './features/dashboard/contact-list/contact-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeaderComponent } from './features/dashboard/header/header.component';
import { ContactComponent } from './features/dashboard/contact-list/contact/contact.component';
import { FirstUpperCaseLetterPipe } from './core/first-upper-case-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DashboardComponent,
    HeaderComponent,
    ContactComponent,
    FirstUpperCaseLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
