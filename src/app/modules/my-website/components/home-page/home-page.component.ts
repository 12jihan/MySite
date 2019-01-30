import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    let typed = new Typed('#typed', {
      strings: ["I am ^1000 a Designer", "I am ^1000 a Developer", "I am ^1000 a Programmer", "I am ^1000 a Creator" ],
      smartBackspace: true,
      loop: true,
      cursorChar: '|',
      typeSpeed: 50,
      backSpeed: 80,

    });

  }

}
