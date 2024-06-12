import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  // --- Interpolation --- //
  public name: string = 'Dummy Name';

  public greetings(): string {
    return "Welcome " + this.name + "!";
  }


  // --- Property Binding --- //
  public input1: string = "Hello World";
  public input2: string = "Foo Bar";
  public isInputDisabled: boolean = true;


  // --- Class Binding --- //
  public elementStyle: string = "success";
  public hasError: boolean = true;


  // --- Style Binding --- //
  public fontColor: string = "orange";


  // --- Event Binding --- //
  sayHello() {
    console.log("Hello " + this.name + "!");
  }

  changeName(newName:string): void {
    this.name = newName;
  }

  logEvent(event:any): void { // can also set type to Object

    console.log(event);

    // event returned as object, can access its values through the keys like
    // any other JSON object
    console.log("Event Type: " + event.type);
  }


  // --- Template Reference Variables --- //
  public color:string = "blue";

  changeAndLog(input:any): void {
    this.color = input.value;
    console.log("Input Value = " + input.value);
    console.log("Input Type = " + input.type);

    // the template reference is passed as HTML object
    console.log(input);
  }


  // --- Two-Way Binding --- //
  public animal:String = "";

}
