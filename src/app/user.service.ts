import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogged: boolean = true;
  constructor() {}

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
