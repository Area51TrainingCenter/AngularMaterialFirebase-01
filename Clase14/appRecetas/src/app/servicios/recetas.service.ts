import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { Observable, of, Subject } from 'rxjs';
import { Categoria } from '../interfaces/categoria';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

	/*private lista: Receta[] = [
		{
			tituloEspanol: "Arroz con pollo",
			tituloIngles: "Rice with chicken",
			sumillaEspanol: "Delicioso arroz con pollo",
			sumillaIngles: "The best rice with chicken",
			ingredientesEspanol: ["arroz", "pollo"],
			ingredientesIngles: ["rice", "chicken"],
			instruccionesEspanol: ["cocinar el arroz", "freir el pollo"],
			instruccionesIngles: ["to cook rice", "to fry chicken"],
			estado: true
		},
		{
			tituloEspanol: "Sopa criolla",
			tituloIngles: "Peruvian Soup",
			sumillaEspanol: "Típica sopa peruana",
			sumillaIngles: "Tipical peruvian soup",
			ingredientesEspanol: ["agua", "huevo", "cebolla", "ajos", "carne"],
			ingredientesIngles: ["water", "egg", "onion", "garlic"],
			estado: true
		}
  ]*/

  private lista: Receta[] = []

  onCambioRecetas: Subject<Categoria[]> = new Subject<Categoria[]>()

  constructor(private fs: AngularFirestore, private fstorage: AngularFireStorage, private snackBar: MatSnackBar) { }

  listar(): Observable<any> {
    return this.fs.collection("recetas").snapshotChanges()
      .pipe(
        map(arrDocumentos => {
          return arrDocumentos.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }
          })
        })
      )
  }

  insertar(receta: Receta) {
    const archivo: File = receta.imagenes
    const ruta = `imagenes/${Date.now()}_${archivo.name}`
    const ref = this.fstorage.ref(ruta)
    const tarea: AngularFireUploadTask = this.fstorage.upload(ruta, archivo)

    tarea.percentageChanges()
      .subscribe(
        porcentaje => console.log(porcentaje)
      )

    tarea.snapshotChanges()
      .pipe(
        finalize(() => {
          receta.imagenes = ruta
          this.fs.collection("recetas").add(receta)

          /* ref.getDownloadURL()
            .subscribe(
              ruta => console.log(ruta),
              error => console.log(error)
            ) */
        })
      )
      .subscribe()



    /* tarea.snapshotChanges()
    .pipe(
      finalize(() => {
        return ref.getDownloadURL()
      })
    )
    .subscribe(
      url => console.log(url)
    ) */
    //this.fs.collection("recetas").add(receta)
  }

  detallar(id: number): Observable<any> {
    return of(this.lista[id])
  }

  actualizar(receta: Receta, id: string) {
    if (receta.imagenes) {
      const archivo: File = receta.imagenes
      const ruta = `imagenes/${Date.now()}_${archivo.name}`
      const ref = this.fstorage.ref(ruta)
      const tarea: AngularFireUploadTask = this.fstorage.upload(ruta, archivo)

      tarea.percentageChanges()
        .subscribe(
          porcentaje => console.log(porcentaje)
        )

      tarea.snapshotChanges()
        .pipe(
          finalize(() => {
            receta.imagenes = ruta
            this.fs.collection("recetas").doc(id).update(receta)
              .then(
                () => this.snackBar.open("Registro modificado", null, { duration: 2000 })
              )
          })
        )
        .subscribe()
    } else {
      const ref = this.fs.collection("recetas").doc(id)
      ref.update(receta)
        .then(
          () => this.snackBar.open("Registro modificado", null, { duration: 2000 })
        )
    }
  }

  eliminar(id: string) {
    this.fs.doc(`recetas/${id}`).delete()
  }
}
