import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string= 'jose';
  valor: number = 1000;
  naice: string= 'fredy bbcita'

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.naice);
  }
}
