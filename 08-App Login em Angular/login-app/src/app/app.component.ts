import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { AutenticacaoService } from './services/autenticacao.service';
import { Usuario } from './models/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuarioLogado:Usuario;

  constructor(private autenticacaoService:AutenticacaoService,
              private roteador:Router){
    this.autenticacaoService.usuarioLogadoObservavel
          .subscribe(u => this.usuarioLogado = u, //next
                     err=> console.log(err), //error
                     ()=>console.log("completed")); //complete
  }

  logout(){
    this.autenticacaoService.logout();
    this.roteador.navigate(["/login"]);
  }

}
