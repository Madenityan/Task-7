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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 20
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'Mark Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor',
      likes: 24
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Jane Octin',
      subject: 'Lorem ipsum',
      content: 'Consectetur adipiscing elit',
      likes: 60
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'John Peter',
      subject: 'Lorem ipsum',
      content: 'In dapibus, turpis ut auctor interdum',
      likes: 47
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Jane Octin',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet',
      likes: 34
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'John Peter',
      subject: 'Lorem ipsum',
      content: 'In dapibus, turpis ut auctor interdum',
      likes: 78
    }
  ];

  public show = false;

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }
}

