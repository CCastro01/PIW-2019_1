import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Usuario } from './../models/Usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private usuarioLogadoSubject:BehaviorSubject<Usuario>;
  public usuarioLogadoObservavel: Observable<Usuario>;

  constructor(private usuarioService:UsuarioService) {
    this.usuarioLogadoSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem("usuarioLogado")));
    this.usuarioLogadoObservavel = this.usuarioLogadoSubject.asObservable();
  }

  autenticar(login:string,senha:string):Usuario{
    let u:Usuario = this.usuarioService.getByLogin(login);
    if(u!=null){
      if(u.senha == senha){
        localStorage.setItem("usuarioLogado",JSON.stringify(u));
        this.usuarioLogadoSubject.next(u);
        return JSON.parse(localStorage.getItem("usuarioLogado"));
      }
    }
    return null;
  }

  getUsuarioLogadoValue():Usuario{
    return this.usuarioLogadoSubject.value;
  }

  logout(){
    localStorage.removeItem("usuarioLogado");
    this.usuarioLogadoSubject.next(null);
  }
}
