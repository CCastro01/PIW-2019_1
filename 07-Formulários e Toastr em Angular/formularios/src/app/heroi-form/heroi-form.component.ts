import { Heroi } from './../models/Heroi';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroi-form',
  templateUrl: './heroi-form.component.html',
  styleUrls: ['./heroi-form.component.css']
})
export class HeroiFormComponent{

  poderes:string[] = ['Inteligência', 'Força', 'Elasticidade', 'Programa em Assembly'];
  heroi:Heroi = new Heroi(0,"Dr. Zé",this.poderes[3]); //modelo a ser usado
  submetido = false;

  constructor(private toasty: ToastrService){

  }
  

  salvar(){
    this.submetido = true;
    console.log(`Herói salvo: ${this.imprimir()}`);
    this.toasty.success("Heroi salvo com sucesso.","Sucesso",{positionClass: 'toast-bottom-left'});
  }

  imprimir():string{
    return JSON.stringify(this.heroi);
  }

  novoHeroi(form:NgForm){
    this.heroi = new Heroi(0,"Dr. Zé",this.poderes[3]); //modelo a ser usado
    form.reset();
  }
}