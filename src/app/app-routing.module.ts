import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorAnioComponent } from './peliculas/pages/por-anio/por-anio.component';
import { PorDirectorComponent } from './peliculas/pages/por-director/por-director.component';
import { PorDuracionComponent } from './peliculas/pages/por-duracion/por-duracion.component';
import { PorGeneroComponent } from './peliculas/pages/por-genero/por-genero.component';
import { PorTituloComponent } from './peliculas/pages/por-titulo/por-titulo.component';
import { VerPeliculaComponent } from './peliculas/pages/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {
    path:'',
    component:PorTituloComponent,

    children: [
      {
        path:'verPelicula/:id' ,component: VerPeliculaComponent
      }
    ]

  },
  {
    path:'genero',
    component:PorGeneroComponent,
    children: [
      {
        path:'verPelicula/:id', component: VerPeliculaComponent
      }
    ]
  },
  {
    path:'duracion',
    component:PorDuracionComponent,
    children: [
      {
        path:'verPelicula/:id', component: VerPeliculaComponent
      }
    ]
  },
  {
    path:'director',
    component:PorDirectorComponent,
    children: [
      {
        path:'verPelicula/:id', component: VerPeliculaComponent
      }
    ]
  },
  {
    path:'anio',
    component:PorAnioComponent,
    children: [
      {
        path:'verPelicula/:id', component: VerPeliculaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
