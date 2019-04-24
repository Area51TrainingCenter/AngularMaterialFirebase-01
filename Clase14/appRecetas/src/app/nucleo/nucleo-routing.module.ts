import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OlvidoComponent } from './olvido/olvido.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolveService } from '../servicios/dashboard-resolve.service';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "olvido", component: OlvidoComponent },
	{ path: "dashboard", component: DashboardComponent },
	/* 	{ path: "dashboard", component: DashboardComponent, resolve: { data: DashboardResolveService } }, */
	{ path: "recetas", loadChildren: "../recetas/recetas.module#RecetasModule" },
	{ path: "usuarios", loadChildren: "../usuarios/usuarios.module#UsuariosModule" },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class NucleoRoutingModule { }
