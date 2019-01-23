import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactComponent } from './create-contact.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkDirective } from 'src/app/core/router-link.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateContactComponent', () => {
  let component: CreateContactComponent;
  let fixture: ComponentFixture<CreateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        CreateContactComponent,
        HeaderComponent,
        RouterLinkDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
