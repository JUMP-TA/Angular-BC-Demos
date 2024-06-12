import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interactions-child',
  standalone: true,
  imports: [],
  template: `
    <div class="child">
      <h3>Child Component</h3>
      <p style="color: red;">
        Parent Value: {{ parentData }}
      </p>

      <p>Child Value: {{childValue}}</p>

      <button class="btn btn-primary"
              (click)="increment()">
        Increment
      </button>
    </div>
  `,
  styles: `
    .child {
      border: 2px solid blue;
      padding: 10px;
      margin: 20px;
      color: blue;
    }
  `
})
export class InteractionsChildComponent {

  @Input() public parentData:any;

  childValue: number = 0;

  @Output() public childEvent = new EventEmitter();

  // when increment button is clicked, this function is called and sends the childValue to the parent component
  increment() {
    this.childValue = this.childValue + 1;
    this.childEvent.emit(this.childValue);
  }

}
