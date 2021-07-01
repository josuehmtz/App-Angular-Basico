import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Lionel Messi',
    poder: 15500
  }

  constructor(  ){

  }

}
