import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginError: string | undefined;
  domains: string[] = EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  loginHandler(form: NgForm) {
    if (form.invalid) return;

    const { email, password } = form.value;

    // TODO show error message if email or password is incorrect
    this.userService.login$(email, password).subscribe({
      next: () => {
        this.router.navigate(['/my-journal']);
      },
      error: (error) => {
        this.loginError = error.error.message;
        throw new Error(error.error.message);
      },
    });
  }
}
