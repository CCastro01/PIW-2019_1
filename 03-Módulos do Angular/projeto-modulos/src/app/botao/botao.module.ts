import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoSimplesComponent } from './botao-simples/botao-simples.component';

@NgModule({
  declarations: [BotaoSimplesComponent],
  exports: [BotaoSimplesComponent],
  imports: [
    CommonModule
  ]
})
export class BotaoModule { }
