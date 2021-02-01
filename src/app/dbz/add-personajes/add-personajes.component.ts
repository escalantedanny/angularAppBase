import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-personajes',
  templateUrl: './add-personajes.component.html'
})
export class AddPersonajesComponent  {

  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  }

  constructor( private dbzService: DbzService){ }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 && this.nuevo.poder === 0){
      return;
    }

    // this.onNuevoPersonaje.emit( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
  
}
