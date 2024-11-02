import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component"

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [ // este exports es la forma de decirle al mundo esterior que puede utlizar este modulo
    CounterComponent
  ]
})

export class CounterModule {}
