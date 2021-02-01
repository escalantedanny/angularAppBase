import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'goku',
          poder: 14500
        },
        {
          nombre: 'Vegeta',
          poder: 8903
        }
      ];

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('es el servicio');
    }

    agregarPersonaje( personaje:Personaje ){
        this._personajes.push( personaje );
    }
}