import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-simples',
  templateUrl: './botao-simples.component.html',
  styleUrls: ['./botao-simples.component.css']
})
export class BotaoSimplesComponent {

  @Input() label: string;
  
}
