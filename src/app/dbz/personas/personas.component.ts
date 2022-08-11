import { Component, Input} from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})


export class PersonasComponent  {
  //@Input() personas: Persona[] = [];

  get personas(){
    return this.dbzService.personas;
  }
  
  constructor( private dbzService: DbzService){}

}
