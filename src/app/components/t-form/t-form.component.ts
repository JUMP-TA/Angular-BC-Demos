import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-t-form',
  standalone: true,
  imports: [ FormsModule, NgIf ],
  templateUrl: './t-form.component.html',
  styleUrl: './t-form.component.css'
})
export class TFormComponent {

  username: string = '';
  password: string = '';

  loggedIn: boolean = false;

  // as long as form is valid, set loggedIn to true
  onSubmit(form:NgForm) {
    if(form.valid) {
      this.loggedIn = true;
    }
  }

}
