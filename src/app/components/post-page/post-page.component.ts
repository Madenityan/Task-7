import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  public listPosts: Array<any> = [
    {
      id: 'Some info',
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20.05.2018',
      comments: 36,
      likes: 300
    },
    {
      id: 'Lorem Ipsum',
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    },
    {
      id: 'Products sale',
      img: 'http://placehold.it/160x200',
      title: 'Products sale',
      date: '01-08-2017',
      comments: 25,
      likes: 690
    },
    {
      id: 'Best prices',
      img: 'http://placehold.it/160x200',
      title: 'Best prices',
      date: '12-04-2018',
      comments: 15,
      likes: 234
    },
    {
      id: 'New items',
      img: 'http://placehold.it/160x200',
      title: 'New items',
      date: '12-07-2018',
      comments: 65,
      likes: 247
    },
    {
      id: 'Sale',
      img: 'http://placehold.it/160x200',
      title: 'Sale',
      date: '12-07-2018',
      comments: 89,
      likes: 437
    },
    {
      id: 'Some info',
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20-05-2018',
      comments: 36,
      likes: 300
    },
    {
      id: 'Lorem Ipsum',
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    },
    {
      id: 'Some info',
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20.05.2018',
      comments: 36,
      likes: 300
    },
    {
      id: 'Lorem Ipsum',
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    },
    {
      id: 'Products sale',
      img: 'http://placehold.it/160x200',
      title: 'Products sale',
      date: '01-08-2017',
      comments: 25,
      likes: 690
    },
    {
      id: 'Best prices',
      img: 'http://placehold.it/160x200',
      title: 'Best prices',
      date: '12-04-2018',
      comments: 15,
      likes: 234
    },
    {
      id: 'New items',
      img: 'http://placehold.it/160x200',
      title: 'New items',
      date: '12-07-2018',
      comments: 65,
      likes: 247
    },
    {
      id: 'Sale',
      img: 'http://placehold.it/160x200',
      title: 'Sale',
      date: '12-07-2018',
      comments: 89,
      likes: 437
    },
    {
      id: 'Some info',
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20-05-2018',
      comments: 36,
      likes: 300
    },
    {
      id: 'Lorem Ipsum',
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    },
    {
      id: 'Some info',
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20-05-2018',
      comments: 36,
      likes: 300
    },
    {
      id: 'Lorem Ipsum',
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    }
  ];
  titleArticles: string = '';
  constructor() { }

  ngOnInit() {}
  sortAsc(): void {
    this.listPosts.sort((a, b) => {
      if (a.comments < b.comments) {
        return -1;
      }
      if (a.comments > b.comments) {
        return 1;
      }
      return 0;
    });
  }

  sortDesc(): void {
    this.listPosts.sort((a, b) => {
      if (a.comments > b.comments) {
        return -1;
      }
      if (a.comments < b.comments) {
        return 1;
      }
      return 0;
    });
  }
}
