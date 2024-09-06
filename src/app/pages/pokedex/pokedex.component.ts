import {Component, OnInit} from '@angular/core';
import {PokedexService} from "../../utils/services/pokedex.service";
import {Pokemon} from "../../utils/types/pokemon.type";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  pokedex: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) {
  }

  ngOnInit() {
    this.pokedex = this.pokedexService.pokedex;
    console.log(this.pokedex);
  }

}
