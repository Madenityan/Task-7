import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatDialogComponent} from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'geek-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public messages: Array<object> = [
    {
      avatar: '../assets/image/user.jpg',
      from: 'Juli Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet',
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
      content: 'In dapibus, turpis ',
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
      content: 'In dapibus, turpis',
      likes: 78
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Juli Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet.',
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
      from: 'Juli Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit amet.',
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
      content: 'In dapibus, turpis',
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
      content: 'In dapibus, turpis',
      likes: 78
    },
    {
      avatar: '../assets/image/user.jpg',
      from: 'Juli Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor sit.',
      likes: 20
    },
    {
      avatar: '../assets/image/user-2.png',
      from: 'Mark Otto',
      subject: 'Lorem ipsum',
      content: 'Lorem ipsum dolor',
      likes: 24
    }
  ];
  public show: boolean = false;
  public tasks: Array<string> = [];

  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  constructor(public dialog: MatDialog) { }

  submit(): void {
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  deleteTask(index: number):void {
    let dialog: MatDialogRef<MatDialogComponent>;
    dialog = this.dialog.open(MatDialogComponent, {
      height: '200px',
      width: '250px',
      data: {name: 'Delete'}
    });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.tasks.splice(index, 1);
      }
    });
  }

  ngOnInit() {}
  toggle(event): void {
    this.show = !this.show;
  }
}

