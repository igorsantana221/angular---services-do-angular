import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(
    private service:PokemonService

  ) {}

  name:string = "BULBASSAUR2";
  attributesTypes: string[] = ['FIRE','ROCK','FLASHLIGHT' ]

  ngOnInit(): void {
  }
}
