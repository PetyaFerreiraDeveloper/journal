import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiUrl;
  loginUrl = 'http://localhost:3030/users/login';
  isLogged: boolean = true;
  constructor(private httpClient: HttpClient) {}

  login(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
  loginValues = {
    email: 'peter@abv.bg',
    password: '123456',
  };
  login$(): Observable<any> {
    return this.httpClient.post<any>(this.loginUrl, this.loginValues);
  }
}
