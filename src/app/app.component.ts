import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'geek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('*', style({'opacity': 1})),
      transition('void => *', [
        style({'opacity': 0}),
        animate('800ms linear')
      ])
    ])
  ]
})
export class AppComponent {

  public condition = true;

  toggleButton() {
    this.condition = !this.condition;
  }
}
