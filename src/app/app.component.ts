import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  nro?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MiprimerApp with fjmurillov3743';
  public ArregloTarjetas: Tarjeta[] = [];

  ngOnInit(): void {
  this.ArregloTarjetas = [
    {titulo: 'Video1 ', subtitulo:'subtitulo video1'},
    {titulo: 'Video2 ', subtitulo:'subtitulo video2'},
    {titulo: 'Video3 ', subtitulo:'subtitulo video3'},
    
  ]
  }
}
