import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()  // esto es un decorativo queva a permitir poder exportar nuestra property characterlist
  public characterList: Character[] = [{
    name: "trunk",
    power: 5000,
  }];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{

    if( !id ) return;

    this.onDelete.emit(id); // el indice se pone en llaves para mostrar por consola los cambios
  }
}
