import { Usuario } from '../../interfaces/usuario';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  login() {
    const usuario: Usuario = this.grupo.getRawValue()

    this.autenticacionService.login(usuario)
  }

  loginGoogle() {
    this.autenticacionService.loginGoogle()
  }

}
