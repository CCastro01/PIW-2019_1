import { Injectable } from '@angular/core';

import { Usuario } from './../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios:Usuario[] = [
    {id:0,nome:"Jefferson",login:"jeff",senha:'123'}
  ];
  
  getByLogin(login:string):Usuario{
    for(let u of this.usuarios){
      if(u.login == login) return u;
    }
    return null;
  }
}
