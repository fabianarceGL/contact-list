import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactListService } from 'src/app/core/contact-list.service';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  subscription: Subscription;

  constructor(private contactListService: ContactListService) {}

  ngOnInit() {
    this.contactListService.getContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

    this.subscription = this.contactListService.onContactsChanged.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
