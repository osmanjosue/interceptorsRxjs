import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuariosService: UsuariosService) {

    this.usuariosService.obtenerUsuarios()
      .subscribe({
        next: console.log,
        error: (err: HttpErrorResponse) => {
          console.log('Error en el appComponent ' + err)
        }
      })

  }

}
