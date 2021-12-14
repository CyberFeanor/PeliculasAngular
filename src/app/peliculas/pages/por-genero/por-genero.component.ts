import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-por-genero',
  templateUrl: './por-genero.component.html',
  styles: [
  ]
})
export class PorGeneroComponent implements OnInit {

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

  genero:String="";

  peliculasGenero:Pelicula[]=[];

  buscarGenero():void{
    this.peliculasGenero=[];
    for(let p of this.peliculaService.peliculas){
      if(p.genero == this.genero){
        this.peliculasGenero.push(p);
      }
    }
  }


}
