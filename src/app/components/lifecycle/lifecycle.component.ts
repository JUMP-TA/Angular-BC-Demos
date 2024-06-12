import { Component } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [ LifecycleChildComponent, NgIf ],
  template: `
    <button class="btn btn-warning" 
            (click)="showChild = !showChild"
            >
      {{ showChild ? 'Remove' : 'Add' }} Child Component
    </button>

    <app-lifecycle-child *ngIf="showChild"></app-lifecycle-child>
  `,
  styles: ``
})
export class LifecycleComponent {

  showChild: boolean = false;
}
