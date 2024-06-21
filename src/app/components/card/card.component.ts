import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports:[IonCard, IonImg, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle]
})
export class CardComponent  implements OnInit {
nameProduct: any;
custProduct: any;

  constructor() { }

  ngOnInit() {}

}
