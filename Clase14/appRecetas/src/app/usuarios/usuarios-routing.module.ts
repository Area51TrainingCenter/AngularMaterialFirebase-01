import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoSistemaComponent } from './listado-sistema/listado-sistema.component';

const routes: Routes = [
  { path: "sistema", component: ListadoSistemaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
