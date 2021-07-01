import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personajes.interface";

@Injectable()
export class PersonajesService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Rambo',
      poder: 15000
    },
    {
      nombre: 'Rocky Balboa',
      poder: 2300
    }
  ];

  get presonajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje( personaje: Personaje ){
    this._personajes.push(personaje);
  }
}
