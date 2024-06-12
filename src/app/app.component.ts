import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './components/comp/comp.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { InteractionsParentComponent } from './components/interactions-parent/interactions-parent.component';
import { RFormComponent } from './components/r-form/r-form.component';
import { TFormComponent } from './components/t-form/t-form.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CompComponent, BindingComponent, DirectivesComponent, PipesComponent, InteractionsParentComponent, RFormComponent, TFormComponent, LifecycleComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
