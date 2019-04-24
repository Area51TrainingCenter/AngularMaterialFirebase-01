import { UsuariosService } from '../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-sistema',
  templateUrl: './listado-sistema.component.html',
  styleUrls: ['./listado-sistema.component.css']
})
export class ListadoSistemaComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.listado()
      .subscribe(resultado => console.log(resultado))
  }

}
