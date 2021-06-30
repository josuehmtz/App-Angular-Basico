import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Black Panther', 'Hulk', 'Thor', 'Captain America'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
