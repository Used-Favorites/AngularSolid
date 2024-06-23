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
  signUp() {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  ngOnInit() {}
}
