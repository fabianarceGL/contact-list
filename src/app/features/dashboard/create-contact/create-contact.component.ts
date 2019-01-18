import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.sass']
})
export class CreateContactComponent implements OnInit {

  @Input() contactForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      email: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.contactForm);
  }
}
