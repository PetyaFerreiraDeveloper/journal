import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginHandler(event: Event) {
    event.preventDefault();

    this.userService.login$().subscribe((data: AuthUser) => {
      localStorage.setItem('[user]', JSON.stringify(data));
      console.log(data);
    });

    // this.userService.register$().subscribe((data: any) => {
    //   // localStorage.setItem('[user]', JSON.stringify(data));
    //   console.log(data);
    // });

    this.router.navigate(['/my-journal']);
  }
}
