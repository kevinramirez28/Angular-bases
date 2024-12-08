import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //ls idea es emitir donde estan los demas objetos "main-pages.component"

  @Output() //este decorador es el que va a permititr la emision
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


public character: Character = {
  name: '',
  power: 0,

};

emitCharacter(): void {
  console.log(this.character);
  // pequeña validacion
  if( this.character.name.length === 0) return; //si no tiene nombre no se va a ejecutar nada

  this.onNewCharacter.emit(this.character); // de lo contrario se va a ejecutar

  // this.character.name = '';
  // this.character.power = 0;

  this.character = {name:'', power:0};
}
}
