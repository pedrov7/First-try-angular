import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Input()
  title: string = "";

  @Output()
  sendResult = new EventEmitter();

  num1: number = 0;
  num2: number = 0;
  total: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

  calculate(option: string) {
    switch (option) {
      case 's':
        this.total = this.num1 + this.num2;
        break;

      case 'r':
        this.total = this.num1 - this.num2;
        break;

      case 'm':
        this.total = this.num1 * this.num2;
        break;

      case 'd':
        this.total = this.num1 / this.num2;
        break;

      default:
        break;
    }
    this.sendResult.emit(this.total);
  }

}
