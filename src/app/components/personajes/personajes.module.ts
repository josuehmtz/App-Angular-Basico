import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { PersonajesService } from './services/personajes.service';




@NgModule({
  declarations: [
    MainPageComponent,
    ListadoPersonajesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    PersonajesService
  ]
})
export class PersonajesModule { }
