import { Component } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent {

  get personajes(){
    return this.personajesService.presonajes;
  }

  constructor( private personajesService: PersonajesService ){}
  // @Input()
  // personajes:any [] = [ ];


}
