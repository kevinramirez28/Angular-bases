import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ["spiderman", "iroman", "batmen", "thor"];
  public DeleteHero?: string; // esta funcion lo que genera con el this del metodo de abajo es que cada vez que se borre el ultimo elemento con el pop, pues esta funcion se encargue de mostrar esos elemento borrados


  removelastHero(): void{
    this.DeleteHero = this.heroNames.pop();
  }
}
