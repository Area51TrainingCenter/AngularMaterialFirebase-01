import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListadoSistemaComponent } from './listado-sistema/listado-sistema.component';
import { ListadoPortalComponent } from './listado-portal/listado-portal.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

@NgModule({
  declarations: [ListadoSistemaComponent, ListadoPortalComponent, FormularioUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
