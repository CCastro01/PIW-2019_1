abstract class Conta{
    protected saldo:number;
    protected numero:number;
    constructor(saldo:number,numero:number){
        this.saldo = saldo;
        this.numero = numero;
    }
    getSaldo():number{
        return this.saldo;
    }
    getNumero():number{
        return this.numero;
    }
    depositar(quantidade:number){
        this.saldo+=quantidade;
    }
    abstract retirar(quantidade:number);
}

interface ContaRentavel{
    valorizar();
    gerarRelatorio();
}

class ContaCorrente extends Conta{
    retirar(quantidade:number){
        if(quantidade+2<=this.saldo){
            this.saldo = this.saldo - (quantidade+2) ;
            console.log("Saque realizado com sucesso!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
}

class ContaPoupanca extends Conta implements ContaRentavel{
    retirar(quantidade:number){
        if(quantidade*1.02<=this.saldo){
            this.saldo = this.saldo - (quantidade*1.02) ;
            console.log("Saque realizado com sucesso!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
    valorizar(){
        this.saldo = this.saldo*1.02;
    }
    gerarRelatorio(){
        console.log("POUPANÇA");
        console.log("Numero: " + this.numero);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo*1.02);

    }
}

class ContaInvestimento extends Conta implements ContaRentavel{
    private SELIC:number = 0.04;
    retirar(quantidade:number){
        if(quantidade*1.05+10<=this.saldo){
            this.saldo = this.saldo - (quantidade*1.05+10) ;
            console.log("Saque realizado com sucesso!");
        }
        else{
            console.log("Saldo insuficiente!");
        }
    }
    valorizar(){
        this.saldo = this.saldo*(1+this.SELIC);
    }
    gerarRelatorio(){
        console.log("POUPANÇA");
        console.log("Numero: " + this.numero);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo*(1+this.SELIC));
    }
}

function daysBetween(date1:Date,date2:Date):number{
    //Get 1 day in milliseconds
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
    
  // Convert back to days and return
  return Math.round(difference_ms/one_day);
}

let myBirth:Date = new Date("1982-3-2");
let today:Date = new Date();


console.log(daysBetween(myBirth,today)/365);