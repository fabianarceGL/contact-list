import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactDetailsComponent } from './contact-details.component';
import { ContactListService } from 'src/app/core/contact-list.service';
import { HeaderComponent } from '../header/header.component';
import { FirstUpperCaseLetterPipe } from 'src/app/core/first-upper-case-letter.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RouterLinkDirective } from 'src/app/core/router-link.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { contacts } from 'src/app/api/contacts';
import { ActivatedRoute } from '@angular/router';

describe('ContactDetailsComponent', () => {
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let component: ContactDetailsComponent;
  let contactId = 1;
  let mockContactListService;
  let mockActivatedRoute = { snapshot: { paramMap: {get:(id:number)=>{id:contactId}}}}

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
        { provide: ContactListService, useValue: mockContactListService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should render correctly from the contact object', () => {
    mockContactListService.getContact.and.returnValue(of(contacts[0]));
    fixture.detectChanges();

    expect(component.contact).toBe(contacts[0])
  });
});
