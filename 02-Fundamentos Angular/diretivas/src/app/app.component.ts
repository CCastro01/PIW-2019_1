import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles: [`.teste{background-color:beige;}`]
})
export class AppComponent {
  title = 'diretivas';
  cor = 'yellow';
  flag = false;

  pessoas: any[] = [
    {
      nome: 'Jefferson',
      pais: 'BR'
    },
    {
      nome: 'Jefferson',
      pais: 'US'
    },
    {
      nome: 'Chavez',
      pais: 'CH'
    },
    {
      nome: 'James',
      pais: 'UK'
    },
    {
      nome: 'Igor',
      pais: 'US'
    }

  ];

  alunos: any[] = [
    {
      nome: 'Fulano',
      nota: 7.5
    },
    {
      nome: 'Sicrano',
      nota: 5.8
    },
    {
      nome: 'Beltrano',
      nota: 4
    },
    {
      nome: 'Tompson',
      nota: 3.8
    },
    {
      nome: 'Tiririca',
      nota: 9.8
    }
    
  ];

  getEstilo(): Object {
    return {
      backgroundColor: this.cor,
    };
  }

  getColor(pais) {
    switch (pais) {
      case 'BR':
        return 'green';
      case 'UK':
        return 'blue';
      case 'US':
        return 'red';
      case 'CH':
        return 'yellow';
    }
  }
}
