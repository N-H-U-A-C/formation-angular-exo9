import { Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SeriesComponent} from "./pages/series/series.component";
import {LibraryComponent} from "./pages/library/library.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";
import {PokedexComponent} from "./pages/pokedex/pokedex.component";

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokedex', component: PokedexComponent},
];
