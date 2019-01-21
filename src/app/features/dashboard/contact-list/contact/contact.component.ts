import { Component, Input } from '@angular/core';
import { ContactListService } from 'src/app/core/contact-list.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  @Input() contact;

  constructor(private contactListService: ContactListService) { }

  deleteContact(id: string) {
    this.contactListService.deleteContact(id).subscribe(
      (contacts: Contact[]) => {
        this.contactListService.onContactsChanged.next(contacts);
      }
    );
  }
}
