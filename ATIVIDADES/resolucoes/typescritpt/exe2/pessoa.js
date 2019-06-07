var Pessoa = /** @class */ (function () {
    function Pessoa(nome, nascimento, altura) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.altura = altura;
    }
    Pessoa.prototype.idade = function () {
        return new Date().getFullYear() - this.nascimento.getFullYear();
    };
    Pessoa.prototype.imprimir = function () {
        console.log("Nome: " + this.nome);
        console.log("Nascimento: " + this.nascimento);
        console.log("Altura: " + this.altura);
        console.log("Idade: " + this.idade());
    };
    return Pessoa;
}());
var euNascimento = new Date("1982-3-23");
//let eu:Pessoa = new Pessoa("Jefferson",new Date(1982,2,23),1.83);
var eu = new Pessoa("Jefferson", euNascimento, 1.83);
eu.imprimir();
