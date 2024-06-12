import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [],
  template: `
    <p>This is the comp component! Number = {{ num }}</p>
  `,
  styles: `
    p {
      color: red;
    }
  `
})
export class CompComponent {

  num: number = 5;

}
