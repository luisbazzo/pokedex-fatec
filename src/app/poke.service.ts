import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Poke } from './poke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http : HttpClient) { }

  getPokeStats(id : number) : Observable<Poke>{
    return this.http.get<Poke>("https://pokeapi.co/api/v2/pokemon/"+id);
  }
}
