import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  booklist=[{
    id:1,
    name:'yesser',
    pre:'kd',
  },
  {
    id:2,
    name:'samiha',
    pre:'mejri',
  },
  {
    id:3,
    name:'momtez',
    pre:'ayadi',
  },
  ];
  delete(person){
    let index=this.booklist.indexOf(person);
    this.booklist.splice(index,1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
