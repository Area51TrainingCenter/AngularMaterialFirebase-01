import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  onCambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  login(usuario: Usuario) {
    this.afAuth.auth.signInWithEmailAndPassword(usuario.correo, usuario.contrasena)
  }

  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut()
  }

  estaAutenticado(): boolean {
    if (sessionStorage.getItem("usuario")) return true
    return false
  }
}
