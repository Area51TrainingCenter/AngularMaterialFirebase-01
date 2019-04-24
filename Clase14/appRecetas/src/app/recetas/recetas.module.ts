import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';
import { FormularioRecetaComponent } from './formulario-receta/formulario-receta.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { FormularioCategoriaComponent } from './formulario-categoria/formulario-categoria.component';
import { ListadoComentariosComponent } from './listado-comentarios/listado-comentarios.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ListadoRecetasComponent, FormularioRecetaComponent, ListadoCategoriasComponent, FormularioCategoriaComponent, ListadoComentariosComponent],
	imports: [
		CommonModule,
		RecetasRoutingModule,
		CompartidoModule,
		ReactiveFormsModule
	],
	entryComponents: [
		FormularioCategoriaComponent, FormularioRecetaComponent
	]
})
export class RecetasModule { }
