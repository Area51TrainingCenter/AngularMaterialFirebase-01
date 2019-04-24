import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/categoria';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioCategoriaComponent implements OnInit {

  titulo: string = "Nuevo"
  grupo: FormGroup
  id: string

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<FormularioCategoriaComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const datos = this.data ? this.data.categoria : {}
    this.id = this.data ? this.data.id : ""
    this.titulo = this.data ? "Edición" : "Nuevo"
    this.grupo = this.crearForm(datos)
  }

  crearForm(data: Categoria): FormGroup {
    return this.formBuilder.group({
      nombreEspanol: [data.nombreEspanol, Validators.required],
      nombreIngles: [data.nombreIngles, Validators.required]
    })
  }

  guardar() {
    this.dialogRef.close({
      categoria: this.grupo.getRawValue(),
      id: this.id
    })
  }

}
