import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcial';

  altura = 0;
  gravedad = 0;
  tiempo = 0;
  velocidad = 0;

  resultado(){
    let  convertir = this.tiempo * 60;
    this.altura = Math.round(this.gravedad * (convertir * convertir)/2);
    this.velocidad = this.gravedad * this.tiempo;
  }
}
