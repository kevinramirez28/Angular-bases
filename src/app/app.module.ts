import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/counter/heroes.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule // ahora como se exporto, pues ahora hay que importarlo para que se cree el enlace
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
