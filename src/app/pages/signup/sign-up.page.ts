import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonInput,
  IonTitle,
  IonImg,
  IonInputPasswordToggle,
  IonButton,
  IonLabel,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [
    IonCheckbox,
    IonLabel,
    IonButton,
    IonImg,
    IonTitle,
    IonInput,
    IonItem,
    IonList,
    IonHeader,
    IonContent,
    IonInputPasswordToggle,
    FormsModule,
  ],
})
export class SignUpPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {}

  onSignUp() {
    this.userService.createUser(this.email, this.name, this.password).subscribe(
      (response) => {
        console.log('User created', response);
        this.navCtrl.navigateForward('/login');
      },
      (error) => {
        console.error('Error creating user', error);
      }
    );
  }

  ngOnInit() {}
}
