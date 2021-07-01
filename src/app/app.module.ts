import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './components/Heroes/Heroes.module';
import { ContadorModule } from './components/contador/contador.module';
import { PersonajesModule } from './components/personajes/personajes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    PersonajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
