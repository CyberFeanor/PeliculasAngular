import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-por-anio',
  templateUrl: './por-anio.component.html',
  styles: [
  ]
})
export class PorAnioComponent implements OnInit {

  constructor(private peliculaService:PeliculaService) { }

  masAntigua:number = this.peliculaService.masAntigua();
  masModerna:number = this.peliculaService.masModerna();

  valor:number = 0;

  peliculasAnio:Pelicula[] = [];

  buscarAnio():void{
    this.peliculasAnio = [];
    for(let p of this.peliculaService.peliculas){
      if(this.valor <= p.anio){
        this.peliculasAnio.push(p);
      }
    }
  }

  ngOnInit(): void {
  }

}
