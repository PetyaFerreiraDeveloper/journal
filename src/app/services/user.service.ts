import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginAuthUser, RegisterAuthUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<LoginAuthUser | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  apiUrl = environment.apiUrl;
  authUrl = environment.authUrl;

  USER_KEY = '[user]';
  user: LoginAuthUser | undefined;

  userSubscription: Subscription;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private httpClient: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
    try {
      // get user from local storage if there is one
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  logout$() {
    this.user = undefined;
    // delete the user from local storage
    localStorage.removeItem(this.USER_KEY);
    return this.httpClient
      .post(`${this.authUrl}/logout`, {})
      .pipe(tap((user) => this.user$$.next(undefined)));
  }

  login$(email: string, password: string): Observable<any> {
    return this.httpClient
      .post<LoginAuthUser>(`${this.authUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap((responseUser) => {
          this.user$$.next(responseUser);
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
          this.user$$.next({
            email: response.email,
            accessToken: response.accessToken,
            _id: response._id,
          });
          this.user = {
            email: response.email,
            accessToken: response.accessToken,
            _id: response._id,
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
        })
      );
  }

  getToken(): string {
    return this.user?.accessToken || '';
  }

  getUser():any {
    return this.httpClient.get(`${this.authUrl}/me`)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
