import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
  declarations: [AlunoFormComponent],
  exports: [AlunoFormComponent],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
