import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image: string = "https://lh3.googleusercontent.com/p/AF1QipMmAtF0MeKOI8KvXAg07_4CJ_qdHP6lcAo6FMyz=s1600-w400";
  public Titulo:string = "Curso de Angular con Interpolacion with fjmurillov3743";

  constructor() { }

  ngOnInit(): void {
  }

}
