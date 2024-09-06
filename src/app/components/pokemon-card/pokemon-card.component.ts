import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../utils/types/pokemon.type";
import {PokedexService} from "../../utils/services/pokedex.service";

@Component({
  selector: 'app-pokemon-card[pokemon]',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Output() pokemonEventDelete = new EventEmitter<Pokemon>();

  constructor(private pokedexService: PokedexService) {
  }

  deletePokemon(): void {
    this.pokemonEventDelete.emit(this.pokemon);
  }

  addPokemonToPokedex(): void {
    this.pokedexService.addPokemon(this.pokemon);
  }
}
