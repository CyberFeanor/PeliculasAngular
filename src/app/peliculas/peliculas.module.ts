import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorAnioComponent } from './pages/por-anio/por-anio.component';
import { PorDirectorComponent } from './pages/por-director/por-director.component';
import { PorDuracionComponent } from './pages/por-duracion/por-duracion.component';
import { PorGeneroComponent } from './pages/por-genero/por-genero.component';
import { VerPeliculaComponent } from './pages/ver-pelicula/ver-pelicula.component';
import { PorTituloComponent } from './pages/por-titulo/por-titulo.component';



@NgModule({
  declarations: [PorAnioComponent,PorDirectorComponent,PorDirectorComponent,PorDuracionComponent,PorGeneroComponent,VerPeliculaComponent,PorTituloComponent],
  imports: [
    CommonModule
  ],exports:[PorAnioComponent,PorDirectorComponent,PorDirectorComponent,PorDuracionComponent,PorGeneroComponent,VerPeliculaComponent,PorTituloComponent]
})
export class PeliculasModule { }
