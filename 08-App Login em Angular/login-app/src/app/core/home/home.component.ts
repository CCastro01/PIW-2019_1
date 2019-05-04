import { Component } from '@angular/core';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Usuario } from './../../models/Usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  usuarioLogado:Usuario;

  constructor(private autenticacaoService:AutenticacaoService) {
    //this.autenticacaoService.usuarioLogado.subscribe(u => this.usuarioLogado = u);
    this.usuarioLogado = this.autenticacaoService.getUsuarioLogadoValue();
  }

}
