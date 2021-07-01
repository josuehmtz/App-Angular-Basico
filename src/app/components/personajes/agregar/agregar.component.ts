import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/personajes.interface';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private personajeService: PersonajesService){}

  agregar(): void{
    if(this.nuevo.nombre.trim().length === 0){ return; }
    this.personajeService.agregarPersonaje(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
