import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { UserService } from 'src/app/services/user.service';
import { matchPasswordsValidator } from 'src/app/shared/utils/matchPasswordsValidator';
import { validateEmail } from 'src/app/shared/utils/validateEmailUtil';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.formBuilder.group({
    email: ['', [Validators.required, validateEmail(EMAIL_DOMAINS)]],
    passGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPass: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'confirmPass')],
      }
    ),
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  // we get error from the server if the user exists- TODO- show it in the template
  register(): void {
    if (this.form.invalid) return;
    const { email, passGroup: { password, confirmPass } = {} } =
      this.form.value;

    if (password !== confirmPass) {
      return;
    }
    this.userService.register$(email!, password!).subscribe(() => {
      this.router.navigate(['/my-journal']);
    });
  }
}
