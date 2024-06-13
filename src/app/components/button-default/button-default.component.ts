import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-button-default",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button-default.component.html",
  styleUrl: "./button-default.component.scss",
})
export class ButtonDefaultComponent {
  @Input() buttonText: string = "";
  @Input() buttonTextAlt: string = "";
  @Input() buttonIconPath: string = "";
}
