import { Component, OnInit, inject } from '@angular/core';
import { Ipokemon } from '../../interfaces/ipokemon';
import { PokemonService } from '../../service/pokemon.service';
import { DisplayPokemonComponent } from '../display-pokemon/display-pokemon.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [DisplayPokemonComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemonData: Ipokemon | null = null;

  pokemonName = 'wobbuffet';

  hint = '';

  loadPokemon() {
    this.pokemonService.getPokemon(this.pokemonName).subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemonData = pokemon;
    })
  }

  ngOnInit() {
    this.loadPokemon();
  }

  setName(userInput: string){
    this.pokemonName = userInput;
    this.loadPokemon();
  }
}
