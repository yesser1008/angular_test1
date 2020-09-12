import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
name="Yesser";

booklist=['yesser','jihen','samiha','hobi'];
myCondition=true;
  constructor() { }

  ngOnInit(): void {
  }
  hello(n){
alert(n);
  }

}
