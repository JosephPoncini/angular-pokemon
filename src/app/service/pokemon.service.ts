import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Ipokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  http = inject(HttpClient);

  getPokemon(userInput = 'bulbasaur') {
    return this.http.get<Ipokemon>(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
  }
}
