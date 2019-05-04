import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos:any[] = [{id:0,nome:"Jefferson de Carvalho"}];
  contador:number = 1;

  adicionar(nome:string){
    this.alunos.push({id:this.contador++,nome:nome});
  }

  listar():any[]{
    return this.alunos;
  }

  atualizar(aluno:any){
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

  consultar(id:number):any{
    for(let a of this.alunos){
      if (a.id == id) return a
    }
    return null;
  }

}
