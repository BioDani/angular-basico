import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ["Spiderman","Ironman",
  "Hulk","Batman","Capitan America"];
  
  heroesBorrados: string[] = [];
  heroeBorrado: string = "";

  constructor() { }

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
    this.heroesBorrados.push(this.heroeBorrado);
  }

  ngOnInit(): void {
  }


}
