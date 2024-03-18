import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');

    /* const headers = new HttpHeaders({
      'token-usuario': 'ABC12312314fasdfiweru'
    }) */

    return this.http.get(`https://reqres6.in/api/user`, {
      params,/*
      headers */
    }).pipe(
      map((resp: any) => resp['data']),
    );
  }

}
