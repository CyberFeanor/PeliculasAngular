import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styles: [
  ]
})
export class VerPeliculaComponent implements OnInit {

  constructor(private peliculaService:PeliculaService,  private route: ActivatedRoute) {

  }
  @Input() id!: number| null;

  pelicula?:Pelicula;

  ngOnInit(): void {

   this.id = Number(this.route.snapshot.paramMap.get('id'))!;


    for(let p of this.peliculaService.peliculas){
      if(p.id == this.id){
        this.pelicula=p;
      }
    }
  }

}
