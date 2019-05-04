import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-card',
  templateUrl: './pessoa-card.component.html',
  styleUrls: ['./pessoa-card.component.css']
})
export class PessoaCardComponent {

  @Input('objPessoa') pessoa:any;
  getEstilosCard(){
    return {
      'border-width.px':this.pessoa.id,
      'backgroundColor':this.pessoa.id%2==0?'lightblue':'lightgreen'
    };
  }
}
