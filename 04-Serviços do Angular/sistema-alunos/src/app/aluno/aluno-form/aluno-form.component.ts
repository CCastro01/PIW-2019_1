import { Component } from '@angular/core';
import { IAluno } from 'src/app/model/IAluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html', 
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent  {

  private alunos:IAluno[] = [{id:0,nome:"Jefferson de Carvalho"}];
  private contador:number = 1;

  adicionar(nome:string){
    this.alunos.push({id:this.contador++,nome:nome});
  }

  listar():IAluno[]{
    return this.alunos;
  }

  atualizar(aluno:IAluno){
    let a:any = this.consultar(aluno.id);
    if(a!=null){
      a.nome = aluno.nome;
      console.log(a.nome);
    }
  }

  excluir(id:number){
    let index = 0;
    for(let a of this.alunos){
      if (a.id == id) break;
      index++;
    }
    this.alunos.splice(index,1);
  }

  consultar(id:number):IAluno{
    for(let a of this.alunos){
      if (a.id == id) return a
    }
    return null;
  }

}
