import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactListService } from 'src/app/core/contact-list.service';

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
              private contactListService: ContactListService) { }

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

  onDelete() {
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
