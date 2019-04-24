import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  /*   private lista: Categoria[] = [
      { nombreEspanol: "Entremeses y Sanguches", nombreIngles: "Appetizers and Sandwiches" },
      { nombreEspanol: "Sopas", nombreIngles: "Soups" },
      { nombreEspanol: "Carnes y Aves", nombreIngles: "Meat and Poultry" }
    ] */
  private lista: Categoria[] = []

  onCambioCategorias: Subject<Categoria[]> = new Subject<Categoria[]>()

  constructor(private fs: AngularFirestore) { }

  listar(): Observable<any> {
    return this.fs.collection("categorias/datos/listado").snapshotChanges()
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

    //return of(this.lista)
  }

  insertar(categoria: Categoria) {
    this.fs.collection("categorias/datos/listado").add(categoria)
    //this.lista.push(categoria)
    //return of(null)
  }

  detallar(id: number): Observable<any> {
    return of(this.lista[id])
  }

  actualizar(categoria: Categoria, id: string) {
    const ref = this.fs.collection("categorias/datos/listado").doc(id)
    ref.update(categoria)
    /* .then(
      respuesta => {
        this.lista.push(categoria)
        this.onCambioCategorias.next(this.lista)
      }
    ) */
  }

  eliminar(id: string) {
    //this.fs.collection("categorias").doc(id)
    this.fs.doc(`categorias/datos/listado/${id}`).delete()
  }
}
