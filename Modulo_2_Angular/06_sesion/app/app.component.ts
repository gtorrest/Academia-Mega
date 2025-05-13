import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase 3';
}
