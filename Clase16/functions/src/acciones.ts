import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

export const onAgregar = functions.firestore.document("/mensajes/{mensajeId}").onCreate(
	async (snap, ctx) => {
		const value: any = snap.data()

		const payload: admin.messaging.MessagingPayload = {
			data: {
				title: value.titulo,
				body: value.descripcion
			}
		}

		return admin.database().ref("tokens").once("value").then(
			responseToken => {
				const token = Object.keys(responseToken.val())

				return admin.messaging().sendToDevice(token, payload)
			}
		)


	}
)