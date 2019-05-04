import { BotaoSimplesComponent } from './../botao/botao-simples/botao-simples.component';
import { BotaoModule } from './../botao/botao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSimplesComponent } from './menu-simples/menu-simples.component';
import { LinhaSimplesComponent } from './linha-simples/linha-simples.component';

@NgModule({
  declarations: [MenuSimplesComponent, LinhaSimplesComponent],
  exports: [MenuSimplesComponent,BotaoSimplesComponent],
  imports: [
    CommonModule,
    BotaoModule
  ]
})
export class BarraMenuModule { }
 