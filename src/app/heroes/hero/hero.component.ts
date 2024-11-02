import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string= "iroman";
  public age:  number = 45;


  // geter: es un metodo de clase pero se usa como un propiedad

  get capitalizedName():string{
    return this.name.toUpperCase();


  }

  //ahora vamos a crear un metodo para unir el name y el age

  getstreamFighters():string {
    return `${this.name}-${this.age}`;
  }

  // tarea: hay que crear dos metodos, el primero se va a llamar changenHero que va a devolver nada
  //  y el otro metodo changeAge va a regresar nada

  changenHero():void {
    this.name = "Spiderman";
  }

  changenAge(): void {
    this.age = 30;
  }
}
