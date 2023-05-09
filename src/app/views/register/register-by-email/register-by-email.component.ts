import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Validation from '../../../Validations';

@Component({
  selector: 'app-register-by-email',
  templateUrl: './register-by-email.component.html',
  styleUrls: ['./register-by-email.component.css'],
})
export class RegisterByEmailComponent {




  
  registerMessage = 'Registered Successfully';
  codeMessage = 'Code sent successfully';

  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      //userName: ['', Validators.required],
      //code: ['', [Validators.required, Validators.minLength(6)]],
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
/*   public handleErrorCode = (controlCode: string, errorCode: string) => {
    return (
      this.registerForm.get(controlCode).touched &&
      this.registerForm.get(controlCode).errors &&
      this.registerForm.get(controlCode).hasError(errorCode)
    );
  };
 */
  public handleErrorRegister = (controlName: string, errorName: string) => {
    return (
      this.registerForm.get(controlName).touched &&
      this.registerForm.get(controlName).errors &&
      this.registerForm.get(controlName).hasError(errorName)
    );
  };
  public handleErrorLogin = (controlName: string, errorName: string) => {
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
