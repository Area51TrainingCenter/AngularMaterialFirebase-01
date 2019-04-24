import * as functions from 'firebase-functions';
import * as admin from "firebase-admin"

import cors = require("cors")

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/* export const login = functions.https.onRequest((req, res) => {
  res.status(200).json({
    usuario: "sergiohidalgocaceres@gmail.com",
    accessToken: "xxxxxx",
    refreshToken: "kdkdkd"
  })
}) */

import express = require("express")
import { db } from './init';
const app = express()

app.use(cors())

app.get("/listado", (req, res) => {
  res
    .status(200)
    .json([
      "categoría 1",
      "categoría 2",
      "categoría 3",
      "categoría 4"
    ])
})

app.get("/todos", async (req, res) => {
  const categorias: any = []
  const snaps = await db.collection("categorias").get()

  snaps.forEach(snap => categorias.push(snap.data()))

  res.send(categorias)
})
app.get("/registrados", (req, res) => {
  admin.auth().listUsers(1000, "algo")
    .then((usuariosResultados: any) => {
      const usuarios = []
      usuariosResultados.users.forEach(
        (usuario: any) => usuarios.push(usuario.toJSON())
      )
      res.status(200).json(usuariosResultados)
    })
})



export const usuario = functions.https.onRequest(app)



