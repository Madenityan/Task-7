import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public messages = [
    {
      avatar: '../assets/image/user.jpg',
      from: 'Juli Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'Mark Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor'
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Jane Octin',
      subject: 'Lorem ipsum',
      content: 'Consectetur adipiscing elit'
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'John Peter',
      subject: 'Lorem ipsum',
      content: 'In dapibus, turpis ut auctor interdum'
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Jane Octin',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet'
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'John Peter',
      subject: 'Lorem ipsum',
      content: 'In dapibus, turpis ut auctor interdum'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
