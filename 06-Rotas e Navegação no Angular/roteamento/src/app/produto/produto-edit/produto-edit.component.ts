import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produtos:any[] = [
    {id:1,nome:"CD"},
    {id:2,nome:"Livro"},
    {id:3,nome:"Sapato"},
    {id:4,nome:"Vestido"},
    {id:5,nome:"Sabonete"},
  ];

  produto = null;

  constructor(private rota:ActivatedRoute,
              private roteador:Router) { }

  ngOnInit() {
    let id = this.rota.snapshot.params["id"];
    console.log(id);

    if(id!=undefined || id!=null){
      for(let p of this.produtos){
        if(p.id==id){
          this.produto = p;
        }
      }
    }

    console.log(this.produto);
  }

  salvar(nome:string){
    let id = this.rota.snapshot.params["id"];
    console.log(`Editando produto de id: ${id}`);
    this.roteador.navigate(['/produtos']);
  }

}
