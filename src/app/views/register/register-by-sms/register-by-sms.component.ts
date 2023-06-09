import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Validation from '../../../Validations';

@Component({
  selector: 'app-register-by-sms',
  templateUrl: './register-by-sms.component.html',
  styleUrls: ['./register-by-sms.component.css'],
})
export class RegisterBySmsComponent {
  registerMessage = 'Registered Successfully';
  //passwordHide = true;
  //confirmPasswordHide = true;

  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      //password: ['', [Validators.required, Validators.minLength(6)]],
      //confirmPassword: ['', Validators.required],
    },
    {
      //validators: Validation.match('password', 'confirmPassword'),
    }
  );

  constructor(
    private fb: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  /* Get errors */
  public handleErrorRegister = (controlName: string, errorName: string) => {
    return (
      this.registerForm.get(controlName).touched &&
      this.registerForm.get(controlName).errors &&
      this.registerForm.get(controlName).hasError(errorName)
    );
  };

  

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
