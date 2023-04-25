import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  poke_number : number = 1;
  poke_number_str : string = "001";
  poke_name : string = "Bulbasaur";

  poke_str_prev : string = "1008";
  poke_str_next : string = "002";

  poke_name_prev : string = "Miraidon";
  poke_name_next : string = "Ivysaur";

  poke_img : string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png";

  pokeNumberToString(){
    if(this.poke_number >= 10 && this.poke_number < 100){
      this.poke_number_str = "0" + this.poke_number;
    }
    else if(this.poke_number >= 100){
      this.poke_number_str = this.poke_number.toString();
    }
    else{
      this.poke_number_str = "00" + this.poke_number;
    }

    if(parseInt(this.poke_str_next) >= 10 && parseInt(this.poke_str_next) < 100){
      this.poke_str_next = "0" + this.poke_str_next;
    }
    else if(parseInt(this.poke_str_next) < 10){
      this.poke_str_next = "00" + this.poke_str_next;
    }

    if(parseInt(this.poke_str_prev) >= 10 && parseInt(this.poke_str_prev) < 100){
      this.poke_str_prev = "0" + this.poke_str_prev;
    }
    else if(parseInt(this.poke_str_prev) < 10){
      this.poke_str_prev = "00" + this.poke_str_prev;
    }
  }

  nextPoke(){
    let reset : number = 0;
    this.poke_number = this.poke_number + 1;
    if(this.poke_number >= 1009){
      this.poke_number = 1;
      reset = 1;
    }

    this.poke_str_next = (this.poke_number + 1).toString();
    this.poke_str_prev = (this.poke_number - 1).toString();

    if(reset == 1){
      this.poke_str_prev = "1008";
    }

    if(parseInt(this.poke_str_next) >= 1009){
      this.poke_str_next = "1";
    }

    this.pokeNumberToString();
    this.poke_img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png";
  }

  previousPoke(){
    let reset : number = 0;
    this.poke_number = this.poke_number - 1;
    if(this.poke_number <= 0){
      this.poke_number = 1008;
      reset = 1;
    }

    this.poke_str_next = (this.poke_number + 1).toString();
    this.poke_str_prev = (this.poke_number - 1).toString();

    if(reset == 1){
      this.poke_str_next = "1";
    }

    if(parseInt(this.poke_str_prev) <= 0){
      this.poke_str_prev = "1008";
    }

    this.pokeNumberToString();
    this.poke_img = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + this.poke_number_str + ".png";
  }
}
