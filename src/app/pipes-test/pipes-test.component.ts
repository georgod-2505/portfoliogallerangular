import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html'
  // OR <div>uppercase: {{str | uppercase}}</div>
  // <div>lowercase: {{str | lowercase}}</div>
  // <div>number: {{num | number}}</div>
  // <div>percent: {{num | percent}}</div>
  // <div>currency: {{num | currency}}</div> 
  // but then i can't use url on template
  ,
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent {
  title = "Hello!";
  str = 'Hello World!';
  num = 0.14;
  sentence = "It's time to stop!"
}
