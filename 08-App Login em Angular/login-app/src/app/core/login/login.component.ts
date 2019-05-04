import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Usuario } from './../../models/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService,
              private roteador: Router,
              private toasty: ToastrService) {
     if (this.autenticacaoService.getUsuarioLogadoValue()) {
       this.roteador.navigate(["/home"]);
    }
  }
 

  onSubmit(loginForm:NgForm) {
    
    if(loginForm.invalid){
      this.toasty.error("Todos os campos devem ser preenchidos.");
      this.roteador.navigate(["/login"]);
      return;
    }
    if (this.autenticacaoService.autenticar(this.usuario.login, this.usuario.senha) != null) {
       this.toasty.success("Login efetuado com sucesso.")
       this.roteador.navigate(["/home"]);
    } else {
      this.toasty.error("Login ou Senha inválidos.")
    }
  }

}
