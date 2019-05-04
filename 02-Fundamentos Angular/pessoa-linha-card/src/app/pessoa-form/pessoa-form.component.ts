import { Post } from './../../models/post';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent{

  nome = "Jefferson de Carvalho";
  clicou = false;
  contador = 0;
  cor = 'red';
  p:Post;

  @Output() pessoaSalva = new EventEmitter();

  constructor(){
    this.p = new Post();
  }

  salvar(nomeInput:string){
    
    this.p.aumentaPost();
    console.log(this.p.qtdPosts);
    this.nome = nomeInput;
    this.contador++;
    this.clicou = true;
    let pTemp = {nome:this.nome,
                 id:this.contador,
                 idade: 27,
                 sexo:'M'};
    this.pessoaSalva.emit(pTemp);
    /*this.pessoas.push({nome:this.nome,
                       id:this.contador});*/
  }

}
