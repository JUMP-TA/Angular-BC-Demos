import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-r-form',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf ],
  templateUrl: './r-form.component.html',
  styleUrl: './r-form.component.css'
})
export class RFormComponent {

  // going to store the data submitted from the form
  newPersonForm: FormGroup = new FormGroup({});

  // will display the data when set to true
  submitted: boolean = false;
  
  // makes it easier to manage the data passed by our form and typically instantiated in the constructor
  // its an injec table service that provides a way to create a form group and form control
  constructor( private fb: FormBuilder ) { }

  // will set the default values for the form inputs once component is initialized (loaded on the page)
  ngOnInit() {
    // create a form group
    this.newPersonForm = this.fb.group({
      name: ['Foo Bar', Validators.required ],
      img: ['https://www.picture.com/img.jpg', [Validators.required, Validators.pattern('https.*')] ],
      country: ['USA', [Validators.required, Validators.maxLength(10)] ],
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  // returns the object representation of the field in the form group
  getField(field:string) {
    return this.newPersonForm.get(field);
  }

  // checks if a field is valid
  validField(f:string) {
    let field = this.newPersonForm.get(f);
    
    // invalid = true if the field is invalid (based on validators we set) and has been touched or modified
    // errors = true if the field has errors resulting by failing validation
    // dirty = true if user changed the value of the field
    // touched = true if the field has been touched
    return ( field?.invalid && field.errors && (field.dirty || field.touched) );
  }


}
