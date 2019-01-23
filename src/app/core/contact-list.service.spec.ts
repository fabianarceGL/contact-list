import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { contacts } from '../api/contacts';

describe('ContactListService', () => {

  let httpTestingController: HttpTestingController;
  let service: ContactListService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ContactListService
      ]
    })

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ContactListService);
  });

  it('should call get contacts correctly', () => {

    service.getContacts().subscribe((data => {
      expect(data).toEqual(contacts)
    }));

    const req = httpTestingController.expectOne(service.url);

    expect(req.request.method).toEqual('GET');

    req.flush(contacts);

    httpTestingController.verify();
  });

  it('should call get contact correctly', () => {
    const contactId = '1';
    const contactIndex = 0;

    service.getContact(contactId).subscribe((data => {
      expect(data).toEqual(contacts[contactIndex])
    }));

    const req = httpTestingController.expectOne(`${service.url}/${contactId}`);

    expect(req.request.method).toEqual('GET');

    req.flush(contacts[contactIndex]);

    httpTestingController.verify();
  });

  it('should call delete contact correctly', () => {
    const contactId = '1';

    service.deleteContact(contactId).subscribe();

    const req = httpTestingController.expectOne(`${service.url}/${contactId}`);

    expect(req.request.method).toEqual('DELETE');

    httpTestingController.verify();
  });

  it('should call create contact correctly', () => {
    const contactIndex = 0;

    service.createContact(contacts[contactIndex]).subscribe();

    const req = httpTestingController.expectOne(service.url);

    expect(req.request.method).toEqual('POST');

    httpTestingController.verify();
  });

  it('should call update contact correctly', () => {
    const contactId = '1';
    const contactIndex = 1;

    service.updateContact(contactId, contacts[contactIndex]).subscribe();

    const req = httpTestingController.expectOne(`${service.url}/${contactId}`);

    expect(req.request.method).toEqual('PUT');

    httpTestingController.verify();
  });
});
