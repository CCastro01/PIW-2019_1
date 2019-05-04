abstract class Conta{

    protected id:number;
    protected saldo:number;

    constructor(id:number,saldo:number){
        this.id = id;
        this.saldo = saldo;
    }

    depositar(quantia:number){
        this.saldo += quantia;
    }

    sacar(quantia:number):boolean{
        if(quantia>this.saldo){
            console.log("SALDO INSUFICIENTE.");
            return false;
        }else
            this.saldo -=quantia;
        return true;           
    }

    abstract valorizar()
}

interface IContaRende{
    gerarRelatorio();
}

class ContaCorrente extends Conta{
    sacar(quantia:number):boolean{
        let quantiaTx:number = quantia+2;
        return super.sacar(quantiaTx);
    }

    valorizar(){
        this.saldo += this.saldo*0;
        //não faz nada;
    }
}

class ContaPoupanca extends Conta 
                    implements IContaRende{
    sacar(quantia:number):boolean{
        let quantiaTx:number = quantia + 0.02*quantia;
        return super.sacar(quantiaTx);
    }

    valorizar(){
        this.saldo+=this.saldo*0.02;
    }

    gerarRelatorio(){
        console.log("POUPANÇA");
        console.log("Numero: " + this.id);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo*1.02);

    }
}

class ContaInvestimento extends Conta 
                        implements IContaRende{
    private taxaSelic:number = 2.5;
    sacar(quantia:number):boolean{
        let quantiaTx:number = 
            quantia + 0.05*quantia + 10;
        return super.sacar(quantiaTx);
    }

    valorizar(){
        this.saldo+=this.saldo*this.taxaSelic;
    }

    gerarRelatorio(){
        console.log("INVESTIMENTO");
        console.log("Numero: " + this.id);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo*(1+this.taxaSelic));
    }
}

let cc:Conta = new ContaCorrente(1,0);
let cp:Conta = new ContaPoupanca(2,100);
let ci:Conta = new ContaInvestimento(3,50);

cc.depositar(100);
cc.sacar(50);

cp.valorizar();
(<ContaPoupanca>cp).gerarRelatorio()

