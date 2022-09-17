import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {
  constructor(public pokemonService: PokemonService){}


  ngOnInit(): void {

  }




}
