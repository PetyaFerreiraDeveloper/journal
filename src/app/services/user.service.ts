import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthUser, LoginUser, User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  authUrl = environment.authUrl;

  USER_KEY = '[user]';
  user: AuthUser | undefined;

  loginUser = {
    email: 'peter@abv.bg',
    password: '123456',
  };

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private httpClient: HttpClient) {
    try {
      // get user from local storage if there is one
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  logout(): void {
    this.user = undefined;
    // delete the user from local storage
    localStorage.removeItem(this.USER_KEY);
  }

  login$(): Observable<any> {
    // this.user = this.loginUser;

    // save the user in local storage
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

    return this.httpClient.post<LoginUser>(`${this.authUrl}/login`, {
      email: this.loginUser.email,
      password: this.loginUser.password,
    });
  }

  register$(): Observable<any> {
    // this.user = this.loginUser;

    // save the user in local storage
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));

    return this.httpClient.post<LoginUser>(`${this.authUrl}/register`, {
      email: 'test24@gmail.com',
      password: '123456',
    });
  }
}
