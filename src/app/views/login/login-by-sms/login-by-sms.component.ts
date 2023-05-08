import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-by-sms',
  templateUrl: './login-by-sms.component.html',
  styleUrls: ['./login-by-sms.component.css'],
})
export class LoginBySmsComponent {
  loginMessage = 'Logged In Successfully';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  /* Get errors */
  public handleErrorLogin = (email: string, errorName: string) => {
    return (
      this.loginForm.get(email).touched &&
      this.loginForm.get(email).errors &&
      this.loginForm.get(email).hasError(errorName)
    );
  };

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
