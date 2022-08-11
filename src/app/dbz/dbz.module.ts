import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonasComponent } from './personas/personas.component';
import { AgregarComponent } from './agregar/agregar.component';


import { DbzService } from './services/dbz.services';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonasComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})

export class DbzModule { }
