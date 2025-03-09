import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {

  name = signal<string>('Ironman');
  age = signal<number>(45);

  getHeroDescription(){
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(){
    this.age.set(60);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

}
