import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { FirstUpperCaseLetterPipe } from 'src/app/core/first-upper-case-letter.pipe';
import { RouterLinkDirective } from 'src/app/core/router-link.directive';
import { ContactListService } from 'src/app/core/contact-list.service';
import { contacts } from 'src/app/api/contacts';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockContactListService;
  let contactId = 0;

  beforeEach(async(() => {
    mockContactListService = jasmine.createSpyObj(['onDeleteContact'])

    TestBed.configureTestingModule({
      declarations: [ 
        ContactComponent,
        FirstUpperCaseLetterPipe,
        RouterLinkDirective,
      ],
      providers: [
        { provide: ContactListService, useValue: mockContactListService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance; 
  });

  it('should render correctly from contact object', () => {
    component.contact = contacts[contactId];
    expect(component).toBeTruthy();
  });
});
