import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  IonIcon, IonLoading } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonLoading, 
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

  constructor(private router: Router) {}

  login() {
    console.log('Login');
    console.log(this.userEmailAddress);
    console.log(this.userPassword);
    this.router.navigate(['/home'])
  }

   register() {
    console.log('Register');
    this.router.navigate(['/sign-up']);


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
