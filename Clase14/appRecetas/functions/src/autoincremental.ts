import * as functions from "firebase-functions"
import { db } from "./init";
import { Transaction } from "@google-cloud/firestore";

export const onAgregar = functions.firestore.document("categorias/datos/listado/{itemId}").onCreate(
  async (snap, contexto) => {

    return db.runTransaction(async transaction => {
      const refCategoria: any = snap.ref.parent.parent
      const datos: any = await transaction.get(refCategoria)
      const categoriaDatos = datos.data()

      const cambios = { contador: categoriaDatos + 1 }

      transaction.update(datos, cambios)
    })

  }
)
