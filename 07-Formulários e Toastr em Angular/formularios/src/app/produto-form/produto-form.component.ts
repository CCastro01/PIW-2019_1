import { Produto } from './../models/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  produto:Produto;

  constructor() { 
    this.produto = new Produto();
  }

  ngOnInit() {
  }

  salvar(){
    console.log(this.produto.nome);
  }

}
