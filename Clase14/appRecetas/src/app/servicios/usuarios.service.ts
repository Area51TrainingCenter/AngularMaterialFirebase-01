import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listado(): Observable<any> {
    return this.http.get("https://us-central1-recetas-b63df.cloudfunctions.net/usuario/registrados")
      .pipe(
        pluck("users")
      )
  }
}
