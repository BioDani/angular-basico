import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  titulo: string = "Contador de Aplicación";
  numero: number = 0;
  base: number = 1;

  constructor() { }

  acumular( valor: number){
    this.numero += valor;
  }

  ngOnInit(): void {
  }

}
