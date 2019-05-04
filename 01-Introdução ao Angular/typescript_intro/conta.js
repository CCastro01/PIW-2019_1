var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(id, saldo) {
        this.id = id;
        this.saldo = saldo;
    }
    Conta.prototype.depositar = function (quantia) {
        this.saldo += quantia;
    };
    Conta.prototype.sacar = function (quantia) {
        if (quantia > this.saldo) {
            console.log("SALDO INSUFICIENTE.");
            return false;
        }
        else
            this.saldo -= quantia;
        return true;
    };
    return Conta;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.sacar = function (quantia) {
        var quantiaTx = quantia + 2;
        return _super.prototype.sacar.call(this, quantiaTx);
    };
    ContaCorrente.prototype.valorizar = function () {
        this.saldo += this.saldo * 0;
        //não faz nada;
    };
    return ContaCorrente;
}(Conta));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.sacar = function (quantia) {
        var quantiaTx = quantia + 0.02 * quantia;
        return _super.prototype.sacar.call(this, quantiaTx);
    };
    ContaPoupanca.prototype.valorizar = function () {
        this.saldo += this.saldo * 0.02;
    };
    ContaPoupanca.prototype.gerarRelatorio = function () {
        console.log("POUPANÇA");
        console.log("Numero: " + this.id);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo * 1.02);
    };
    return ContaPoupanca;
}(Conta));
var ContaInvestimento = /** @class */ (function (_super) {
    __extends(ContaInvestimento, _super);
    function ContaInvestimento() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taxaSelic = 2.5;
        return _this;
    }
    ContaInvestimento.prototype.sacar = function (quantia) {
        var quantiaTx = quantia + 0.05 * quantia + 10;
        return _super.prototype.sacar.call(this, quantiaTx);
    };
    ContaInvestimento.prototype.valorizar = function () {
        this.saldo += this.saldo * this.taxaSelic;
    };
    ContaInvestimento.prototype.gerarRelatorio = function () {
        console.log("INVESTIMENTO");
        console.log("Numero: " + this.id);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo * (1 + this.taxaSelic));
    };
    return ContaInvestimento;
}(Conta));
var cc = new ContaCorrente(1, 0);
var cp = new ContaPoupanca(2, 100);
var ci = new ContaInvestimento(3, 50);
cc.depositar(100);
cc.sacar(50);
cp.valorizar();
cp.gerarRelatorio();
