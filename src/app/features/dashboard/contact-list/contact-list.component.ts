import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/core/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactListService: ContactListService) {}

  ngOnInit() {
    this.contactListService.getContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

    this.contactListService.onContactsChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    )
  }
}
