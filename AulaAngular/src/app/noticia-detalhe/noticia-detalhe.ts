import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detalhe',
  standalone: false,
  templateUrl: './noticia-detalhe.html',
  styleUrl: './noticia-detalhe.css'
})
export class NoticiaDetalhe implements OnInit {
  id : number = 0 ;
  caminhoImage: string = 'https://facens.br/wp-content/uploads/2021/03/logo-f.png';
  x : string = '';
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'] ?? 0;

  }
  exibirMensagem():void {
    alert('Olá Mundo!');
  }


}
