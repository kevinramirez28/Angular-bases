import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent { // hay que tener en cuenta que esto no es lugar para los datos pero aun no tenemos otra forma para resguardalos

constructor (public dbzService: DbzService) { // esto me va a habilitar toda la informacion que este en el servicio

}

}
