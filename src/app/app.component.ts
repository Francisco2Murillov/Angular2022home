import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;
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
    {titulo: 'Video1 ', subtitulo:'subtitulo video1',image:"https://lh3.googleusercontent.com/p/AF1QipMx5QFMVIGCn61I6rfx0upb5BvvgTkcP9mqrwoG=s1600-w400"},
    {titulo: 'Video2 ', subtitulo:'subtitulo video2',image:"https://fastly.4sqi.net/img/general/320x240/30229329_42Zz2a-jJzTOuF08UCMkO5wkNqSlODRMeY347tOaBSE.jpg"},
    {titulo: 'Video3 ', subtitulo:'subtitulo video3',image:"https://lh3.googleusercontent.com/p/AF1QipMqBWhYhOBB90X2rOp7VehB0JYE9fxvbwIuMO4=s1600-w400"},
    
  ]
  }
}
