import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  elements: any = [
    {id: 1, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 2, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 3, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 4, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 5, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 6, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 7, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 8, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 9, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 10, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 11, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 12, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 13, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 14, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 15, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 16, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 17, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 18, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 19, first: 'Jacob', last: 'Thornton', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 20, first: 'Larry', last: 'the Bird', email: 'toty@example.com', phone: '555 - 444 - 777'},
    {id: 21, first: 'Mark',  last: 'Otto', email: 'toty@example.com', phone: '555 - 444 - 777'},
  ];

  headElements = ['ID', 'First', 'Last', 'Email', 'Phone'];

  constructor() { }

  ngOnInit() {
  }

}
