import { Component } from '@angular/core';
import { Persona } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent {
  

  nuevaPersona: Persona = {
    nombre: '',
    cantidad: 0
  };

  constructor(){}
}
