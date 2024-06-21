import { Component, OnInit } from '@angular/core';
import { IonFooter, IonButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, 
  imports: [IonTitle, IonButton, IonFooter]
})
export class FooterComponent  implements OnInit {
username: any;

  constructor() { }

  ngOnInit() {}

}
