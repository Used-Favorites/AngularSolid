import { Component, OnInit } from '@angular/core';
import { IonFooter, IonButton, IonTitle } from '@ionic/angular/standalone';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonTitle, IonButton, IonFooter],
})
export class FooterComponent implements OnInit {
  username: string = '';

  constructor(private userSerivce: UserService) {
    this.username = this.userSerivce.getUsername();
  }

  ngOnInit() {}
}
