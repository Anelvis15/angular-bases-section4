import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string { //actua como una propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {  //hace alguna accion y devuelve algo
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {    //metodos void que no devuelven algun valor sin embargo si pueden cambiar los valores dentro de la clase o hacer algun sin necesidad de devolver un valor
    this.name = 'Batman';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }



}
