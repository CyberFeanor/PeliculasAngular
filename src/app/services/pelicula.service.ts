import { Injectable} from "@angular/core";
import { Pelicula } from "../peliculas/interfaces/pelicula.interface";


@Injectable()
export class PeliculaService{
  private _peliculas:Pelicula[]=[
    {
      id:1,
      titulo: "El Señor de los Anillos: La Comunidad del Anillo",
      director:"Peter Jackson",
      anio:2001,
      genero:"Fantasia",
      duracion:180
    },
    {
      id:2,
      titulo: "Star Wars: Una Nueva Esperanza",
      director:"George Lucas",
      anio:1977,
      genero:"Ciencia-Ficcion",
      duracion:121
    },
    {
      id:3,
      titulo: "El Padrino",
      director:"Francis Ford Coppola",
      anio:1972,
      genero:"Drama",
      duracion:175
    },
    {
      id:4,
      titulo: "Matrix",
      director:"Hermanas Wachowski",
      anio:1999,
      genero:"Ciencia-Ficcion",
      duracion:131
    },
    {
      id:5,
      titulo: "Los Vengadores",
      director:"Joss Whedon",
      anio:2012,
      genero:"Ciencia-Ficcion",
      duracion:135
    },
    {
      id:6,
      titulo: "BraveHeart",
      director:"Mel Gibson",
      anio:1995,
      genero:"Historica",
      duracion:177
    },
    {
      id:7,
      titulo: "La lista de Schindler",
      director:"Steven Spielberg",
      anio:1993,
      genero:"Drama",
      duracion:195
    },
    {
      id:8,
      titulo: "La vida es bella",
      director:"Roberto Benigni",
      anio:1997,
      genero:"Drama",
      duracion:117
    },
    {
      id:9,
      titulo: "Pulp Fiction",
      director:"Quentin Tarantino",
      anio:1994,
      genero:"Thriller",
      duracion:154
    },
    {
      id:10,
      titulo: "Agarralo como puedas",
      director:"David Zucker",
      anio:1988,
      genero:"Comedia",
      duracion:85
    }
  ];

  get peliculas():Pelicula[]{
    return [...this._peliculas];
  }
}
