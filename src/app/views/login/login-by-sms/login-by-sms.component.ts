import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-login-by-sms',
  templateUrl: './login-by-sms.component.html',
  styleUrls: ['./login-by-sms.component.css'],
})
export class LoginBySmsComponent {
  loginMessage = 'Logged In Successfully';

  loginFormPhoneNumber = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}


  /* Get errors */
  public handleErrorLogin = (phoneNumber: string, errorName: string) => {
    return (
      this.loginFormPhoneNumber.get(phoneNumber).touched &&
      this.loginFormPhoneNumber.get(phoneNumber).errors &&
      this.loginFormPhoneNumber.get(phoneNumber).hasError(errorName)
    );
  };


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
    }
  }

