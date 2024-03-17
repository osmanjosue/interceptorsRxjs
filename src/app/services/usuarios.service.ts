import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    params=params.append('nombre', 'Fernando Herrera');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC12312314fasdfiweru'
    })

    return this.http.get(`https://reqres.in/api/user`, {params, headers});
  }

}
