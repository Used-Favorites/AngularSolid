import { Component,  NgModule,  OnInit } from '@angular/core';
import {
  IonImg, IonHeader } from '@ionic/angular/standalone';


@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
  imports: [IonHeader,  IonImg],
  standalone: true,
})
export class HeaderHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
