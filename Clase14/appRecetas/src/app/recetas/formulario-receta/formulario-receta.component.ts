import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Receta } from 'src/app/interfaces/receta';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioRecetaComponent implements OnInit {

  titulo: string = "Nuevo"
  grupo: FormGroup
  id: any

  archivo: any

  imagenCambiada: boolean = false

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<FormularioRecetaComponent>, private formBuilder: FormBuilder, private storage: AngularFireStorage) { }

  ngOnInit() {
    const datos = this.data ? this.data.receta : {}
    this.id = this.data ? this.data.id : ""
    this.titulo = this.data ? "Edición" : "Nuevo"
    this.grupo = this.crearForm(datos)

    //this.grupo.get("imagenes").value
    if (this.data.receta.imagenes) {
      const ref = this.storage.ref(this.data.receta.imagenes)
      ref.getDownloadURL()
        .subscribe(
          ruta => this.archivo = ruta
        )
    }
  }

  crearForm(data: Receta): FormGroup {
    return this.formBuilder.group({
      tituloEspanol: [data.tituloEspanol, Validators.required],
      tituloIngles: [data.tituloIngles, Validators.required],
      imagenes: [data.imagenes]
    })
  }

  guardar() {
    if (this.id == "") {
      this.dialogRef.close({
        receta: this.grupo.getRawValue(),
        id: this.id
      })
    } else {
      const datos = this.grupo.getRawValue()
      if (!this.imagenCambiada) {
        delete datos.imagenes
      }

      this.dialogRef.close({
        receta: datos,
        id: this.id
      })
    }

  }

  nuevaImagen(evt) {
    const file: File = evt.target.files[0]
    this.imagenCambiada = true

    this.grupo.patchValue({ imagenes: file })

    const fr = new FileReader()

    fr.onloadend = (resultado) => {
      console.log(resultado)
      //this.archivo = (resultado.target as FileReader).result
      this.archivo = (<FileReader>resultado.target).result
    }

    fr.readAsDataURL(file)


    console.log(evt.target.files[0])
  }

}
