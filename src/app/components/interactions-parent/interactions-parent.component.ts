import { Component } from '@angular/core';
import { InteractionsChildComponent } from '../interactions-child/interactions-child.component';

@Component({
  selector: 'app-interactions-parent',
  standalone: true,
  imports: [ InteractionsChildComponent ],
  template: `
    <p class="text-secondary">Using <code>&#64;Input</code> and <code>&#64;Output</code>, we can have a parent and child component pass data between each other.</p>


    <div class="parent">
      <h3>Parent Component</h3>
      <p>Parent Value: {{ parentValue }}</p>
      <p style="color: blue;">
        Child Value: {{ childData }}
      </p>

      <button class="btn btn-danger" 
              (click)="parentValue = parentValue + 1">
        Increment
      </button>

      <app-interactions-child 
        [parentData]="parentValue"
        (childEvent)="childData=$event">
      </app-interactions-child>
    </div>


  `,
  styles: `
    .parent {
      border: 2px solid red;
      padding: 10px;
      margin: 20px;
      width: 60%;
      color: red;
    }
  `
})
export class InteractionsParentComponent {

  parentValue: number = 0;
  childData: number = 0;
}
