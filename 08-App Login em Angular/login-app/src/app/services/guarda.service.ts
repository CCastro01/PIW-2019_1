import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaService implements CanActivate {

  constructor(private autenticador: AutenticacaoService,
              private roteador: Router) {             
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (this.autenticador.getUsuarioLogadoValue()) {
      return true;
    }

    
    this.roteador.navigate(["/login"]);
    return false;
  }

}
