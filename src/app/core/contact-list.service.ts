import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  contacts: Contact[] = [];
  onContactsChanged: Subject<Contact[]> = new Subject();

  private url: string = 'https://workshop-backend.herokuapp.com/contacts';

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>(this.url).pipe(
      map(contacts => {
        this.contacts = contacts
        return this.contacts;
      }),
      catchError(error => { throw error }));
  };

  deleteContact(id: Number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map(() => {
        this.contacts = this.contacts.filter((contact: Contact) => contact.id !== id)
        return this.contacts;
      }),
      catchError(error => { throw error }));
  };

  getContact(id: number) {
    return this.http.get<Contact>(`${this.url}/${id}`).pipe(
      catchError(error => { throw error }));;
  }

  createContact(contact: Contact) {
    return this.http.post(this.url, contact);
  }
}