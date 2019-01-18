import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactListService } from 'src/app/core/contact-list.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  contactId: number = 0;
  contact: Contact;

  constructor(private route: ActivatedRoute,
              private contactListService: ContactListService) { }

  ngOnInit() {
    this.contactId = +this.route.snapshot.paramMap.get("id");

    this.contactListService.getContact(this.contactId).subscribe(
      (contact: Contact) => {
        this.contact = contact;
      }
    );
  }
}
