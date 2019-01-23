import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { ContactListService } from 'src/app/core/contact-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.sass']
})
export class CreateContactComponent implements OnInit {

  @Input() contactForm: FormGroup
  editMode: boolean = false;
  contactId: string = '';

  constructor(private formBuilder: FormBuilder,
              private contactListService: ContactListService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    this.editMode = this.contactId != null;

    this.contactForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(24)]],
      name: ['', [Validators.required, this.invalidName.call(this, 5, 10)]],
      lastName: ['', [Validators.required, this.invalidName.call(this, 3, 10)]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
    })

    if(this.editMode) {
      this.contactListService.getContact(this.contactId).subscribe(
        (contact: Contact) => {
          this.contactForm.setValue(contact);
        }
      );
    }
  }

  hasOnlyLetters(string: string): boolean {
    return !/[^a-z]/i.test(string);
  }

  invalidName(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      
      if(!this.hasOnlyLetters(value) || value.length < min || value.length > max) {
        return {'invalidName': true};
      }
      return null;
    }
  };

  onSubmit() {
    if(!this.editMode) {
      this.contactListService.createContact(this.contactForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
    }
    else {
      this.contactListService.updateContact(this.contactId, this.contactForm.value).subscribe(
        () => {
          this.router.navigate(['/']);
        }
      );
    }
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
