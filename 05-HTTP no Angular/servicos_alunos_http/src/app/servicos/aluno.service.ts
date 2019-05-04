import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAluno } from '../models/aluno.interface';

@Injectable({
  providedIn: "root"
})
export class AlunoService {
 
  private  url:string = "http://localhost:3000/alunos/";

  constructor(private http:HttpClient, @Inject('tratamento') private trat:string) {}

  consultar(){
    return this.http.get(this.url);
  }

  adicionar(aluno:IAluno){
    aluno.nome = this.trat+" " +aluno.nome;
    return this.http.post(this.url,aluno);
  }

  excluir(id:number){
    return this.http.delete(`${this.url}${id}`);
  }

  atualizar(aluno:IAluno){
    return this.http.put(`${this.url}${aluno.id}`,aluno);
  }
  
  
}
