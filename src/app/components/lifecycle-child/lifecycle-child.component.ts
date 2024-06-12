import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [],
  template: `
    <div class="child">
      <h3>Child Component</h3>
      <p>Count: {{ count }}</p>
      <button class="btn btn-primary" 
              (click)="count = count + 1"
              >
        Increment
      </button>
    </div>
  `,
  styles: `
    .child {
      border: 2px solid blue;
      padding: 20px;
      margin: 20px;
      width: 300px;
      color: blue;
    }
  `
})
export class LifecycleChildComponent {

  count: number = 0;

  order: number = 1;


  // --- CREATION --- //

  constructor() {
    console.log(`%cCONSTRUCTOR: Runs when component is created ::: Order = ${this.order}`, "color: red");

    this.order++;
  }


  // --- CHANGE DETECTION --- //

  ngOnInit() {
    console.log(`%cngOnInit(): Runs once after Angular has initialized all the component's inputs ::: Order = ${this.order}`, "color: orange");

    this.order++;
  }

  // may not print because we aren't receiving any inputs from our parent that change
  ngOnChanges() {
    console.log(`%cngOnChanges(): Runs every time the component's inputs have changed ::: Order = ${this.order}`, "color: gold");

    this.order++;
  }

  ngDoCheck() {
    console.log(`%cngDoCheck(): Runs every time this component is checked for changes ::: Order = ${this.order}`, "color: yellow");

    this.order++;
  }

  ngAfterViewInit() {
    console.log(`%cngAfterViewInit(): Runs once after the component's view has been initialized ::: Order = ${this.order}`, "color: chartreuse");

    this.order++;
  }

  ngAfterContentInit() {
    console.log(`%cngAfterContentInit(): Runs once after the component's content has been initialized ::: Order = ${this.order}`, "color: lightgreen");

    this.order++;
  }

  ngAfterViewChecked() {
    console.log(`%cngAfterViewChecked(): Runs every time the component's view has been checked for changes ::: Order = ${this.order}`, "color: aquamarine");

    this.order++;
  }

  ngAfterContentChecked() {
    console.log(`%cngAfterContentChecked(): 	Runs every time this component content has been checked for changes ::: Order = ${this.order}`, "color: aqua");

    this.order++;
  }


  // --- DESTRUCTION --- //

  ngOnDestroy() {
    console.log(`%cngOnDestroy(): Runs once before the component is destroyed ::: Order = ${this.order}`, "color: white");

    this.order++;
  }

}
