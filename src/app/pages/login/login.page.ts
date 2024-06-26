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
  IonIcon,
  IonLoading,
  IonList,
  IonInputPasswordToggle,
  IonItemDivider,
  IonText,
  IonButtons,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle, logoApple } from 'ionicons/icons';

addIcons({
  'logo-facebook': logoFacebook,
  'logo-google': logoGoogle,
  'logo-iphone': logoApple,
});

import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonText,
    IonItemDivider,
    IonList,
    IonLoading,
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
    IonInputPasswordToggle,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private UserService: UserService
  ) {}

  ngOnInit() {}

  onLogin() {
    this.UserService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
