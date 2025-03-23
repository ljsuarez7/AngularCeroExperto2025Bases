import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [],
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter() {

    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(
      (list) => [...list, newCharacter]
    )

    this.resetFields();

  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
