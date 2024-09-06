import { Injectable } from '@angular/core';
import {Pokemon} from "../types/pokemon.type";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokedex: Pokemon[] = [];

  constructor() {
    if (this.retrievePokemon()) {
      this.pokedex = JSON.parse(<string>this.retrievePokemon());
    }
  }

  retrievePokemon() {
    return localStorage.getItem('pokedex');
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokedex.push(pokemon);
    localStorage.setItem("pokedex", JSON.stringify(pokemon));
  }

  removePokemon(pokemon: Pokemon): void {
    this.pokedex.splice(this.pokedex.indexOf(pokemon), 1);
    localStorage.setItem("pokedex", JSON.stringify(pokemon));
  }
}
