import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginAuthUser, RegisterAuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  authUrl = environment.authUrl;

  USER_KEY = '[user]';
  user: LoginAuthUser | undefined;

  loginUser = {
    firstName: 'Peter',
    lastName: 'Petrov',
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

  login$(email: string, password: string): Observable<any> {
    return this.httpClient
      .post<LoginAuthUser>(`${this.authUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap((responseUser) => {
          this.user = responseUser;
          // Store the updated user in local storage
          localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        })
      );
  }

  register$(email: string, password: string): Observable<any> {
    return this.httpClient
      .post<RegisterAuthUser>(`${this.authUrl}/register`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          this.user = {
            email: response.email,
            accessToken: response.accessToken,
            _id: response._id,
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        })
      );
  }
}
