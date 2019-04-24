import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.component.html',
  styleUrls: ['./olvido.component.css']
})
export class OlvidoComponent implements OnInit {

  grupo: FormGroup

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email])
    })
  }

  recuperar() {

  }

}
