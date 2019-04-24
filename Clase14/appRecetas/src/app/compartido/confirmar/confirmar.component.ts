import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-confirmar',
	templateUrl: './confirmar.component.html',
	styleUrls: ['./confirmar.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ConfirmarComponent implements OnInit {

	public mensaje: string = "¿Está seguro de querer eliminar este elemento?"

	constructor() { }

	ngOnInit() {
	}

}
