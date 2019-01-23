import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactListService } from 'src/app/core/contact-list.service';
import { HeaderComponent } from '../header/header.component';
import { FirstUpperCaseLetterPipe } from 'src/app/core/first-upper-case-letter.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { Contact } from 'src/app/core/models/contact';
import { of } from 'rxjs';
import { RouterLinkDirective } from 'src/app/core/router-link.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { contacts } from 'src/app/api/contacts';

describe('ContactDetailsComponent', () => {
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let mockContactListService;

  beforeEach(async(() => {
    mockContactListService = jasmine.createSpyObj(['getContact', 'deleteContact'])
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        ContactDetailsComponent,
        HeaderComponent,
        FirstUpperCaseLetterPipe,
        RouterLinkDirective
      ],
      providers: [
        { provide: ContactListService, useValue: mockContactListService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
  });

  it('should create', () => {
    mockContactListService.getContact.and.returnValue(of(contacts));
    fixture.detectChanges();


  });
});
