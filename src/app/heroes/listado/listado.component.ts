import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['goku', 'gohan', 'krilin', 'yamsha', 'chaos', 'ten-chin-hao'];

  heroeBorrado:string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();
  }

}
