import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  template: `<h1>Aula services</h1><app-card></app-card><router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'services';


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
