import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactListService } from 'src/app/core/contact-list.service';
import { ConfirmDialogService } from 'src/app/core/confirm-dialog.service';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  contactId: string = '';
  contact: Contact = <Contact>{};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactListService: ContactListService,
              private confirmDialogService: ConfirmDialogService) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get("id");

    this.contactListService.getContact(this.contactId).subscribe(
      (contact: Contact) => {
        this.contact = contact;
      }
    );
  }

  onReturn() {
    this.router.navigate(['/']);
  }

  onDelete(id: string) {
    this.confirmDialogService.initConfirmDialog(
      this.deleteContact.bind(this, id),
      () => {
        console.log("Contact not deleted");
      })
  }

  deleteContact() {
    this.contactListService.deleteContact(this.contactId).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/createContact', { id: this.contactId }]);
  }
}
