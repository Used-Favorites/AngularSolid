import { Component, OnInit } from '@angular/core';
import { IonImg } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/components/card/card.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderHomeComponent } from 'src/app/components/header-home/header-home.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderHomeComponent,
    FooterComponent,
    CardComponent,
    CarouselComponent,
  ],
})
export class HomePage {
  constructor(private userService: UserService) {}

  private name: string = '';

  ngOnInit() {}
}
