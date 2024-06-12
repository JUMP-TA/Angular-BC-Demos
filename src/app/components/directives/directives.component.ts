import { Component } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [ NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  // Class Directives
  hasError: boolean = true;
  isImportant: boolean = true;
  
  elementClasses = {
    "success": !this.hasError,
    "danger": this.hasError,
    "important": this.isImportant
  };


  // Style Directives
  fontStyles = {
    color: "purple",
    fontWeight: "bold", // can't use hyphens, use camelcase for style properties
    'font-size': "30px"
  };

  specialStyle = true;
  changingStyles = {
    color: this.specialStyle ? "pink" : "black",
    fontStyle: this.specialStyle ? "italic" : "normal"
  }


  // ngIf
  displayHello: boolean = true;
  displayBlock: boolean = true;

  // ngSwitch
  animal: string = "tiger";

  setAnimal(animal: string) {
    this.animal = animal;
  }

  // ngFor
  furnitureList = [ "chair", "table", "lamp", "desk", "couch", "bed" ];

}
