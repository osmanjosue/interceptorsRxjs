import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuariosService: UsuariosService) {

    this.usuariosService.obtenerUsuarios()
      .subscribe(console.log);

  }

}
