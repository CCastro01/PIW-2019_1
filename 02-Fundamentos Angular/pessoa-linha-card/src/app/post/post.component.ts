import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

   @Input() postIn:any;
   @Output() recebeuLike = new EventEmitter();

   clicouLike(id:number){
    this.recebeuLike.emit(id);
   }

}
