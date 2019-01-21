import { Component, Input } from '@angular/core';
import { ContactListService } from 'src/app/core/contact-list.service';
import { ConfirmDialogService } from 'src/app/core/confirm-dialog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  @Input() contact;
  showDialog: boolean = false;

  constructor(private contactListService: ContactListService,
              private confirmDialogService: ConfirmDialogService) { }

  onDeleteContact(id: string) {
    this.confirmDialogService.initConfirmDialog(
      this.deleteContact.bind(this, id),
      () => {
        console.log("Contact not deleted");
      })
  }

  deleteContact(id: string) {
    this.contactListService.deleteContact(id).subscribe(
      (contacts: Contact[]) => {
        this.contactListService.onContactsChanged.next(contacts);
      }
    );
  }
}
