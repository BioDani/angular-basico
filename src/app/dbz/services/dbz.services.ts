import { Injectable } from "@angular/core";
import { Persona } from '../interfaces/dbz.interface';

import { DbzModule } from '../dbz.module';

@Injectable()

export class DbzService {

    private _personas: Persona[] = [
        {
          nombre: 'Daniel',
          cantidad: 100,
        },
        {
          nombre: 'Maleja',
          cantidad: 200,
        },
        {
          nombre: 'Laura',
          cantidad: 300,
        },
        {
          nombre: 'Pablo',
          cantidad: 400,
        },
      ];

    
      get personas(): Persona[] {
        return [...this._personas];
      };

      constructor(){}

      agregarNuevaPersona( persona: Persona){
        this._personas.push(persona);
      }

}