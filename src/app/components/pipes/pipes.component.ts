import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DoublePipe } from '../../pipes/double.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DecimalPipe, PercentPipe, CurrencyPipe, DatePipe, DoublePipe ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  public title: string = "Hello world";

  public movie = {
    title: "Mamma Mia! Here We Go Again",
    genre: "Musical/Comedy",
    released: 2018,
    budged: 75000000
  };

  public num: number = 3.439;
  public percNum: number = 0.349;

  public currVal: number = 0.25;

  // Date(year, month, day, hour, minute, second)
  public date: Date = new Date(2013, 4, 5, 12, 34, 56);

}
