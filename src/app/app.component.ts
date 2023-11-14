import { Component, OnInit } from '@angular/core';
import { Calculator } from 'src/app/calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-testing-services';

  ngOnInit(): void {
      const calculator = new Calculator();
      const rta = calculator.divide(1,5);
      console.log(rta);
      const rta2 = calculator.multiply(3,3);
      console.log(rta2 === 9);
  }
}
