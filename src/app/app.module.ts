import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonlistComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
