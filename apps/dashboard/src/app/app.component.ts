import { Component } from '@angular/core';

@Component({
  selector: 'employee-hour-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/employees', icon: 'person', title: 'employees' }
  ]
}
