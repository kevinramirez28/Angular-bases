import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "krillin",
    power: 1000,
  },{
    id: uuid(),
    name: "goku",
    power: 9500,
  },{
    id: uuid(),
    name: "vegeta",
    power: 9000,
  }];

  onNewCharacter(character: Character):void {
    const newCharacter: Character = {id: uuid(), ...character};

  this.characters.push(newCharacter);
  }

  //onDeleteCharacter (index: number) {
    //this.characters.splice(index, 1);

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  }


//}

// uuid nos ayuda a crear identificadores unicos



