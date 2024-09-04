import { Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SeriesComponent} from "./pages/series/series.component";
import {LibraryComponent} from "./pages/library/library.component";

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'library', component: LibraryComponent},
];
