import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-por-director',
  templateUrl: './por-director.component.html',
  styles: [
  ]
})
export class PorDirectorComponent implements OnInit {

  constructor(private peliculaService:PeliculaService) { }

  director:string ="";
  peliculasDirector:Pelicula[] = [];

  buscarDirector():void{
    this.peliculasDirector = [];
    for(let p of this.peliculaService.peliculas){
      if(this.director == p.director){
        this.peliculasDirector.push(p);
      }
    }
  }

  ngOnInit(): void {
  }

}
