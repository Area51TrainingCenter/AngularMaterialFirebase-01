import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { LoginComponent } from './login/login.component';
import { OlvidoComponent } from './olvido/olvido.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, OlvidoComponent, DashboardComponent, CabeceraComponent],
  imports: [
    CommonModule,
    NucleoRoutingModule,
    CompartidoModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    CabeceraComponent,
    NucleoRoutingModule
  ]
})
export class NucleoModule { }
