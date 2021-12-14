import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-por-director',
  templateUrl: './por-director.component.html',
  styles: [
  ]
})
export class PorDirectorComponent implements OnInit {


  

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }

}
