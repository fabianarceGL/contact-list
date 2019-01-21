import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { ContactListService } from 'src/app/core/contact-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.sass']
})
export class CreateContactComponent implements OnInit {

  @Input() contactForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private contactListService: ContactListService,
              private router: Router) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(24)]],
      name: ['', [Validators.required, this.invalidName.call(this, 5, 10)]],
      lastName: ['', [Validators.required, this.invalidName.call(this, 3, 10)]],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
    })
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
    this.contactListService.createContact(this.contactForm.value).subscribe(
      (contacts: Contact[]) => {
        this.contactListService.onContactsChanged.next(contacts);
        this.router.navigate(['/']);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
