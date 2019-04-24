import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Categoria } from 'src/app/interfaces/categoria';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmarComponent } from 'src/app/compartido/confirmar/confirmar.component';
import { FormularioCategoriaComponent } from '../formulario-categoria/formulario-categoria.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  categorias: Categoria[] = []
  columnasAMostrar: string[] = ["nombreEspanol", "nombreIngles", "acciones"]

  suscripcion: Subscription

  constructor(private categoriasService: CategoriasService, private dialog: MatDialog, private fs: AngularFirestore) { }

  ngOnInit() {
    /*     this.fs.collection("categorias").valueChanges()
          .subscribe(
            resultado => console.log(resultado)
          ) */
    /* this.categoriasService.onCambioCategorias
      .subscribe(
        (resultado: Categoria[]) => this.categorias = resultado
      ) */

    this.suscripcion = this.categoriasService.listar()
      .subscribe(
        (resultado: Categoria[]) => {
          this.categorias = resultado
          //this.lista = resultado
          //this.categoriasService.onCambioCategorias.next(resultado)
        }
      )
  }


  nuevo() {
    this.formulario()
  }

  editar(categoria: Categoria) {
    this.formulario({ categoria, id: categoria.id })
  }

  formulario(data = null) {
    const ref = this.dialog.open(FormularioCategoriaComponent, {
      panelClass: "miClase",
      data
    })

    ref.afterClosed()
      .subscribe(
        (respuesta: any) => {
          if (!respuesta) return false

          if (respuesta.id != "") {
            this.categoriasService.actualizar(respuesta.categoria, respuesta.id)
          } else {
            this.categoriasService.insertar(respuesta.categoria)
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

        this.categoriasService.eliminar(id)
      }
    )
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe()
  }
}
