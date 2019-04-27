import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

import * as admin from "firebase-admin"
export const helloWorld = functions.https.onRequest((request, response) => {
	admin.database().ref("tokens").once("value").then(
		responseToken => {
			const token = Object.keys(responseToken.val())

			response.write(token)
		}
	)
	setTimeout(() => { response.end("Hello from Firebase!"); }, 5000)

});

export { onAgregar } from "./acciones"
