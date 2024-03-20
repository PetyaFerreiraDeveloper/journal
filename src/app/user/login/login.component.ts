import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { UserService } from 'src/app/services/user.service';
import { AuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains: string[] = EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  loginHandler(form: NgForm) {
    console.log('form', form);

    if (form.invalid) return;

    // this.userService.login$().subscribe((data: AuthUser) => {
    //   localStorage.setItem('[user]', JSON.stringify(data));
    //   this.user = data
    //   // console.log(data);
    // });

    this.userService.login$();

    // this.userService.register$().subscribe((data: any) => {
    //   // localStorage.setItem('[user]', JSON.stringify(data));
    //   console.log(data);
    // });

    this.router.navigate(['/my-journal']);
  }
}
