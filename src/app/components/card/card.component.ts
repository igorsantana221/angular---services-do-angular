import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'] // Corrigido aqui
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id:0,
    name:'',
    sprites: {
      front_default:''
    },
    types:[]
  }; //propiedade declarada no html


  constructor(
    private service: PokemonService
  ) {}




  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(seachName:string){
    this.service.getPokemon(seachName).subscribe(
      {
        next: (res) => {
          this.pokemon = {id: res.id,
                          name: res.name,
                          sprites:{front_default: res.sprites.front_default},
                          types: res.types};
          console.log(this.pokemon)
        },
        error: (err) => console.log(err)
      }
    );
  }

}
