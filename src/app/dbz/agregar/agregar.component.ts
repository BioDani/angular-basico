import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent {
  
  //@Output() onNuevaPersona: EventEmitter<Persona> = new EventEmitter();
  //dbzService: any;

  @Input() nuevaPersona: Persona = {
    nombre: '',
    cantidad: 0
  }

  constructor( private dbzService: DbzService){}

  agregar(){
    // No guarda si no hay datos de nombre o de cantidad 
    if ((this.nuevaPersona.nombre.trim().length === 0) || (this.nuevaPersona.cantidad === null))
    {return;}
    
    this.dbzService.agregarNuevaPersona(this.nuevaPersona);
  
    this.nuevaPersona = {
      nombre: '',
      cantidad: 0
    }

  }

}

