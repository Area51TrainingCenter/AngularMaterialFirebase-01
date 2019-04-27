import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { mergeMapTo, mergeMap } from "rxjs/operators"
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	grupo: FormGroup
	grupoLogin: FormGroup

	usuarioLogueado: boolean = false

	registro: boolean = false

	constructor(private auth: AngularFireAuth, private messaging: AngularFireMessaging, private firestore: AngularFirestore) { }

	ngOnInit() {



		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})

		this.grupoLogin = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})

		this.auth.authState
			.subscribe(
				user => {
					console.log(user)
					if (user) this.usuarioLogueado = true
					else this.usuarioLogueado = false
				}
			)
	}

	registrar() {
		const datosUsuario = this.grupo.getRawValue()
		this.auth.auth.createUserWithEmailAndPassword(datosUsuario.correo, datosUsuario.contrasena)
			.then(
				() => console.log("Usuario registrado"),
				(err) => console.log(err)
			)
	}

	loguear() {
		const datosUsuario = this.grupoLogin.getRawValue()
		this.auth.auth.signInWithEmailAndPassword(datosUsuario.correo, datosUsuario.contrasena).then(() => console.log("logueado"))
	}

	logout() {
		this.auth.auth.signOut()
	}

	suscribir() {
		this.messaging.requestPermission
			.pipe(
				mergeMapTo(this.messaging.tokenChanges)
			)
			.subscribe(
				(token) => {
					const ref = this.firestore.collection("tokens")
					ref.add({ token })
					console.log("token almacenado")
				},
				(err) => console.log(err)
			)
	}

	desuscribir() {
		this.messaging.getToken
			.pipe(
				mergeMap(token => this.messaging.deleteToken(token))
			)
			.subscribe(
				() => console.log("Usuario desuscrito")
			)
	}

	escuchar() {
		this.messaging.messages
			.subscribe(
				message => console.log(message)
			)
	}


}
