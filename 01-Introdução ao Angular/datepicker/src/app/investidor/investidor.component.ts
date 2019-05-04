import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.component.html',
  styleUrls: ['./investidor.component.css']
})
export class InvestidorComponent {

  alerta = 'primary';
  escondido = false;

  ehPrimo(x: number): boolean {

    for (let index: number = 2; index < x; index++) {
      if ((x % index) == 0.0) return false;
    }
    return true;

  }

  ehPar(x: number): boolean {
    
    if (x % 2 == 0) return true;
    return false;
  }

}

function teste(){
  console.log("teste");
}
