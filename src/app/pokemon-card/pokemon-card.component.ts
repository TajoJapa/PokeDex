import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  pokemon!: any;

  @Input()
  numero!: number;

  buscaImgPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number,size = 3): string{
    let s = String(str);

    while (s.length < ( size || 2 )) {
      s = '0' + s;
    }

    return s;

  }
}
