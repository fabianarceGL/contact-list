import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ContactListService = TestBed.get(ContactListService);
    expect(service).toBeTruthy();
  });
});
