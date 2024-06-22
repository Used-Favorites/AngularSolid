import { Component, OnInit } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonContent, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonImg, IonContent, FormComponent, HeaderComponent]
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
