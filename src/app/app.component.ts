import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: number = 0;
  x: string = 'Calculator App';

  recieveEvent(e:any){
    this.result = e;
  }

}
