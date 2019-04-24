import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';
import { ListadoCategoriasComponent } from './listado-categorias/listado-categorias.component';
import { ListadoComentariosComponent } from './listado-comentarios/listado-comentarios.component';

const routes: Routes = [
  { path: "", component: ListadoRecetasComponent },
  { path: "categorias", component: ListadoCategoriasComponent },
  { path: "comentarios", component: ListadoComentariosComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
