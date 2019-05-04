import { AlunoService } from '../../servicos/aluno.service';
import { Component, OnInit } from '@angular/core';
import { IAluno } from 'src/app/models/aluno.interface';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunos: IAluno[] = []
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.alunoService.consultar()
        .subscribe(
          (res: IAluno[]) => {
            this.alunos = res;
          });
  }

  adicionar(nome: string) {
    this.alunoService.adicionar({ nome: nome })
        .subscribe(
          (res: IAluno) => {
            console.log(`Adicionado aluno ${res.nome} com id ${res.id}.`);
            this.consultar();
          });
  }

  excluir(id: number) {
    this.alunoService.excluir(id)
        .subscribe(
          (res: IAluno) => {
            this.consultar();
          });
  }

  atualizar(aluno: any) {
    this.alunoService.atualizar(aluno)
        .subscribe(
          (res: IAluno) => {
            console.log(`Atualizando id ${res.id}.`);
            this.consultar();
          },
          (error: any) => {
            console.log('ERRO: ', error)
          },
          ()=>console.log("completed"));
  }

}
