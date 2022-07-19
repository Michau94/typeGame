import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText: string = lorem.sentence();
  inputText: string = '';
  solved = false;

  compare(letter: string, input: string) {
    if (!input) {
      return 'pending';
    }
    return letter === input ? 'active' : 'negative';
  }
}
