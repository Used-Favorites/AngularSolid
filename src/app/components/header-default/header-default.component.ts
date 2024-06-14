import { Component } from '@angular/core';
import {
  IonHeader,
  IonImg,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonImg, IonHeader],
})
export class HeaderDefaultComponent {
  constructor() {}
}
