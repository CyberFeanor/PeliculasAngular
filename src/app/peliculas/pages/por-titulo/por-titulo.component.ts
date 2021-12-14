import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-por-titulo',
  templateUrl: './por-titulo.component.html',
  styles: [
  ]
})
export class PorTituloComponent  {

  titulo:string = "";

  constructor(private peliculaService:PeliculaService) { }

  peliculasTitulo:Pelicula[] = [];

  buscarTitulo():void{
    this.peliculasTitulo = [];
    for(let p of this.peliculaService.peliculas){
      if(p.titulo == this.titulo){
        this.peliculasTitulo.push(p);
      }
    }
  }


}
