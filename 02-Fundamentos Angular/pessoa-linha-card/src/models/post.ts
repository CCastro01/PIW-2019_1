export class Post{
    id:number;
    nomePessoa:string;
    texto:string;
    qtdPosts:number;

    constructor(){
        this.qtdPosts = 0;
    }

    aumentaPost(){
        this.qtdPosts++;
    }

} 