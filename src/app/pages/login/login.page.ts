import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator, FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
    IonCardContent,
    IonCard,
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  userEmailAddress: any;
  userPassword: any;
  hide = true;

  constructor() {}

  login() {
    console.log('Login');
    console.log(this.userEmailAddress);
    console.log(this.userPassword);
  }

  register() {
    throw new Error('Method not implemented.');
  }

  handleKeyDown(event: KeyboardEvent, redirect: string) {
    if (event.key === 'Enter') {
      switch (redirect) {
        case 'login':
          this.login();
          break;
        case 'register':
          this.register();
          break;
        case 'togglePasswordVisibility':
          this.togglePasswordVisibility();
          break;
      }
    }
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  ngOnInit() {}
}
