import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorAnioComponent } from './pages/por-anio/por-anio.component';
import { PorDirectorComponent } from './pages/por-director/por-director.component';
import { PorDuracionComponent } from './pages/por-duracion/por-duracion.component';
import { PorGeneroComponent } from './pages/por-genero/por-genero.component';
import { VerPeliculaComponent } from './pages/ver-pelicula/ver-pelicula.component';
import { PorTituloComponent } from './pages/por-titulo/por-titulo.component';
import { FormsModule } from '@angular/forms';
import { PeliculaService } from '../services/pelicula.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PorAnioComponent,PorDirectorComponent,PorDirectorComponent,PorDuracionComponent,PorGeneroComponent,VerPeliculaComponent,PorTituloComponent],
  imports: [
    CommonModule,FormsModule,RouterModule
  ],exports:[PorAnioComponent,PorDirectorComponent,PorDirectorComponent,PorDuracionComponent,PorGeneroComponent,VerPeliculaComponent,PorTituloComponent],
  providers:[PeliculaService]
})
export class PeliculasModule { }
