import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { HeaderComponent } from '../header/header.component';
import { FirstUpperCaseLetterPipe } from 'src/app/core/first-upper-case-letter.pipe';
import { RouterLinkDirective } from 'src/app/core/router-link.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, Subject } from 'rxjs';
import { contacts } from 'src/app/api/contacts';
import { ContactListService } from 'src/app/core/contact-list.service';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let mockContactListService;
  let contactId = 0;

  @Component({
    selector: 'app-contact',
    templateUrl: './contact/contact.component.html',
    styleUrls: ['./contact/contact.component.sass']
  })
  class FakeContactComponent {
  
    @Input() contact;
    
    onDeleteContact(id: string) {
      contacts.splice(contactId, 1);
    }
  }

  beforeEach(async(() => {
    mockContactListService = jasmine.createSpyObj(['getContacts', 'onContactsChanged']);
    mockContactListService.onContactsChanged = new Subject<any>();

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ContactListComponent,
        HeaderComponent,
        FakeContactComponent,
        RouterLinkDirective,
        FirstUpperCaseLetterPipe
      ],
      providers: [
        { provide: ContactListService, useValue: mockContactListService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
  });

  it('should set the contacts from the service', () => {
    mockContactListService.getContacts.and.returnValue(of(contacts));
    fixture.detectChanges();

    expect(fixture.componentInstance.contacts.length).toBe(contacts.length);
  })

  it('should delete contact from contact list component on button click', () => {
    const originalContactsNumber = contacts.length;
    mockContactListService.getContacts.and.returnValue(of(contacts));
    fixture.detectChanges();

    let deleteButtons = fixture.debugElement.queryAll(By.css('.contactDelete'));
    deleteButtons[contactId].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.contacts.length).toBe(originalContactsNumber - 1);
  })
});
