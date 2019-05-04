import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent {

   posts = [];
   postId = 0;

   addPost(nomeIn:string, textoIn:string){
     let postTemp = {id:this.postId,nome:nomeIn,texto:textoIn,likes:0};
     this.posts.push(postTemp);
     this.postId++;
   }

   contabilizarLike(id:any){
    let p = this.findPost(id);
    p.likes++;
   }

   findPost(id:number):any{
    for(let post of this.posts){
      if(post.id==id) return post;
    }
     return null;
   }

}
