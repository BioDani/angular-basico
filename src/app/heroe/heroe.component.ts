import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  nombre: string = 'Ironman';
  edad: number = 45;

  constructor() { }

  // Es un método
  getDatos(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  // Getter
  get nombreCapitalizado() : string {
    return this.nombre.toUpperCase(); 
  }
  
  ngOnInit(): void {
  }
}
