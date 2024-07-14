import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'frontend_test';

  personalDataVisible = false;
  showPersonalData() { this.personalDataVisible = true; }
  hidePersonalData() { this.personalDataVisible = false; }
}
