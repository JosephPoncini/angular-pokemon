import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ipokemon } from '../../interfaces/ipokemon';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-display-pokemon',
  standalone: true,
  imports: [UpperCasePipe, NgFor],
  templateUrl: './display-pokemon.component.html',
  styleUrl: './display-pokemon.component.css'
})
export class DisplayPokemonComponent {
  @Input() pokemonDisplay: Ipokemon | null = null;
  @Input() hint = '';
  @Output() hintChange = new EventEmitter<string>();

  giveHint(){
    this.hint = `this pokemon has ${this.pokemonDisplay?.abilities.length} abilities`
    this.hintChange.emit(this.hint);
  }
}
