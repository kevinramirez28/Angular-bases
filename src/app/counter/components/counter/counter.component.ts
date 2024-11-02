// video: contador component
// si quiero utlizar este codigo primero lo tengo que declarar para que pueda ser visible en nuestros componentes, y se declara en "app.module.ts"
// video: funcionalidad del contador
// se trabajo con los snippes que basicamente es aquel que nos tiene ya el molde o la estructura del Component utlizando a-component
import { Component } from "@angular/core";

@Component({     //encapsulamos nuestro sistema de negocio, en vez de tenerlo repartido en el html y el ts
  selector: 'app-counter',
  template: `
  <p> counter: {{counter}} </p>
  <button (click)="this.incraiseBy(+1)" >+1</button>
  <button (click)="this.resetBy()">reset</button>
  <button (click)="this.incraiseBy(-1)">-1</button>

  `
})
export class CounterComponent{
  public counter: number= 10

  incraiseBy(value: number): void {
    this.counter +=value;
  }

  resetBy() {
    this.counter = 10;
  }
}
