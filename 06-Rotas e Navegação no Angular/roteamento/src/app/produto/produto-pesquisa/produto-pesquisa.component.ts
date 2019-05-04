import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent {

  produtos:any[] = [
    {id:1,nome:"CD"},
    {id:2,nome:"Livro"},
    {id:3,nome:"Sapato"},
    {id:4,nome:"Vestido"},
    {id:5,nome:"Sabonete"},
  ];

}
