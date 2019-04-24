import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/interfaces/receta';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmarComponent } from 'src/app/compartido/confirmar/confirmar.component';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { FormularioRecetaComponent } from '../formulario-receta/formulario-receta.component';
import { Subject, merge, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado-recetas',
  templateUrl: './listado-recetas.component.html',
  styleUrls: ['./listado-recetas.component.css']
})
export class ListadoRecetasComponent implements OnInit {
  observador: Subject<any> = new Subject<any>()

  recetas: Receta[] = []
  columnasAMostrar: string[] = ["tituloEspanol", "tituloIngles", "acciones"]

  suscripcion: Subscription

  constructor(private recetasService: RecetasService, private dialog: MatDialog, private fs: AngularFirestore) { }

  ngOnInit() {
    this.suscripcion = this.recetasService.listar()
      .subscribe(
        (resultado: Receta[]) => {
          this.recetas = resultado
        }
      )
  }

  nuevo() {
    this.formulario()
  }

  editar(receta: Receta) {
    this.formulario({ receta, id: receta.id })
  }

  formulario(data = null) {
    const ref = this.dialog.open(FormularioRecetaComponent, {
      panelClass: "miClase",
      data
    })

    ref.afterClosed()
      .subscribe(
        (respuesta: any) => {
          if (!respuesta) return false

          if (respuesta.id != "") {
            this.recetasService.actualizar(respuesta.receta, respuesta.id)
          } else {
            this.recetasService.insertar(respuesta.receta)
          }
        }
      )
  }

  eliminar(id: string) {
    const ref: MatDialogRef<ConfirmarComponent> = this.dialog.open(ConfirmarComponent, {
      panelClass: "confirmacion",
      disableClose: true
    })

    ref.componentInstance.mensaje = "¿Quieres borrar?"

    ref.afterClosed().subscribe(
      respuesta => {
        if (!respuesta) return false

        this.recetasService.eliminar(id)
      }
    )
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }

}
