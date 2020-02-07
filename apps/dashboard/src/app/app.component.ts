import { Component } from '@angular/core';
import { AuthService } from '@employee-hour-app/core-data';

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
  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
