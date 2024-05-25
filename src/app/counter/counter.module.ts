import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
  declarations: [
    CounterComponent, // este modulo puede usar estos componentes
  ],
  exports: [
    CounterComponent, // otros modulos y el mundo exterior pueden usar estos componentes
  ]
})
export class CounterModule { }
