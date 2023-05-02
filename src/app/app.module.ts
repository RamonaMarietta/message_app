import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterBySmsComponent } from './views/register-by-sms/register-by-sms.component';
import {RegisterByEmailComponent} from './views/register-by-email/register-by-email.component';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    CodeInputModule
  ],
  declarations: [
    AppComponent,
    RegisterByEmailComponent,
    RegisterBySmsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
