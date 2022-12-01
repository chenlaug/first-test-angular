import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = 'i am the ditto :^)';

  Azumarill() {
    this.text = 'Azumarill';
  }
  Umbreon() {
    this.text = 'Umbreon';
  }
  Sirfetchd() {
    this.text = "Sirfetch'd";
  }
  Pyrobut() {
    this.text = 'Cinderace';
  }
}
