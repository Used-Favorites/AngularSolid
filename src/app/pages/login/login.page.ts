import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonFooter,
  IonItem,
  IonGrid,
  IonImg,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonIcon,
} from '@ionic/angular/standalone';
import { ButtonDefaultComponent } from 'src/app/components/button-default/button-default.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonCard,
    IonFooter,
    IonCardTitle,
    IonCardHeader,
    IonImg,
    IonGrid,
    IonItem,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ButtonDefaultComponent,
  ],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
