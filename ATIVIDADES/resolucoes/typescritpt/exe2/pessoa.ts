class Pessoa{
    private nome:String;
    private nascimento:Date;
    private altura:number;

    constructor(nome:String,nascimento:Date,altura:number){
        this.nome = nome;
        this.nascimento = nascimento;
        this.altura = altura;
    }

    idade():number{
        //const hoje:Date = new Date();
        //return hoje.getFullYear() - this.nascimento.getFullYear(); 
        return new Date().getFullYear() - this.nascimento.getFullYear(); 
    }

    imprimir(){
       console.log("Nome: " + this.nome); 
       console.log("Nascimento: " + this.nascimento);
       console.log("Altura: " + this.altura);
       console.log("Idade: " + this.idade())
    }

}


//FORMA 1
//let euNascimento:Date = new Date("1982-3-23");
//let eu:Pessoa = new Pessoa("Jefferson",euNascimento,1.83);

//FORMA 2
let eu:Pessoa = new Pessoa("Jefferson",new Date("1982-3-23"),1.83);

//FORMA 3
//let eu:Pessoa = new Pessoa("Jefferson",new Date(1982,2,23),1.83);

eu.imprimir();