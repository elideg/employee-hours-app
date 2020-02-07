import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {


  isAuthenticated = new BehaviorSubject(false);

  constructor() { }

  ngOnInit() {
    localStorage.setItem('user', '')
  }

  setToken(token) {
    localStorage.setItem('user', token);
    this.isAuthenticated.next(token);
  }

  getToken() {
    localStorage.getItem('user');
  }
}
