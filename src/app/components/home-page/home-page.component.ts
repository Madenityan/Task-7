import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

 items: Array<any> = [];
  constructor() {
    this.items = [
      { name: 'assets/image/karpaty.jpg'},
      { name: 'assets/image/karpaty-2.jpg'},
      { name: 'assets/image/karpaty-osin.jpg'},
      { name: 'assets/image/mountains.jpg'},
      { name: 'assets/image/mountain-2.jpg'},
      { name: 'assets/image/karpaty.jpg'},
      { name: 'assets/image/karpaty-2.jpg'},
      { name: 'assets/image/karpaty-osin.jpg'},
      { name: 'assets/image/mountains.jpg'},
      { name: 'assets/image/mountain-2.jpg'},
    ];
  }

  ngOnInit() {}
}
