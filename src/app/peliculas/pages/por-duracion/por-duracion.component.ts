import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-por-duracion',
  templateUrl: './por-duracion.component.html',
  styles: [
  ]
})
export class PorDuracionComponent implements OnInit {

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

  minDuracion:number = this.peliculaService.menorDuracion();
  maxDuracion:number = this.peliculaService.mayorDuracion();

  valor:number = 0;

  peliculasDuracion:Pelicula[] = [];

  buscarDuracion():void{
    this.peliculasDuracion=[];
    for(let p of this.peliculaService.peliculas){
      if(this.valor <= p.duracion){
        this.peliculasDuracion.push(p);
      }
    }

  }

}
