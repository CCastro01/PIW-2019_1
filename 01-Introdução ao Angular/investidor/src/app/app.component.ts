import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  nome = "Jefferson de Carvalho";

  salvar(nomeInput:string){
    this.nome = nomeInput;
  }

  mudar(event:any){
    this.nome = event.target.value;
  }
  
}
