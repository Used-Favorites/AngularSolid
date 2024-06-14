import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-button-default',
  standalone: true,
  imports: [IonImg, IonButton, CommonModule],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {
  @Input() buttonText: string = '';
  @Input() buttonTextAlt: string = '';
  @Input() buttonIconPath: string = '';
}
