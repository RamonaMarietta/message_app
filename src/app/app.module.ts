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
import { WelcomeComponent } from './views/welcome/welcome.component';
import { CreateMessageComponent} from './views/welcome/create-message/create-message.component';
import { ReceivedMessageComponent } from './views/welcome/received-message/received-message.component';
import { SentMessageComponent } from './views/welcome/sent-message/sent-message.component';

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
    WelcomeComponent,
    CreateMessageComponent, ReceivedMessageComponent, SentMessageComponent
  ],
  declarations: [AppComponent, WelcomeComponent, CreateMessageComponent, ReceivedMessageComponent, SentMessageComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
