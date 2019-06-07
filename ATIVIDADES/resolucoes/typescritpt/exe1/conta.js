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
    function Conta(saldo, numero) {
        this.saldo = saldo;
        this.numero = numero;
    }
    Conta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.getNumero = function () {
        return this.numero;
    };
    Conta.prototype.depositar = function (quantidade) {
        this.saldo += quantidade;
    };
    return Conta;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.retirar = function (quantidade) {
        if (quantidade + 2 <= this.saldo) {
            this.saldo = this.saldo - (quantidade + 2);
            console.log("Saque realizado com sucesso!");
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    return ContaCorrente;
}(Conta));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.retirar = function (quantidade) {
        if (quantidade * 1.02 <= this.saldo) {
            this.saldo = this.saldo - (quantidade * 1.02);
            console.log("Saque realizado com sucesso!");
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    ContaPoupanca.prototype.valorizar = function () {
        this.saldo = this.saldo * 1.02;
    };
    ContaPoupanca.prototype.gerarRelatorio = function () {
        console.log("POUPANÇA");
        console.log("Numero: " + this.numero);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo * 1.02);
    };
    return ContaPoupanca;
}(Conta));
var ContaInvestimento = /** @class */ (function (_super) {
    __extends(ContaInvestimento, _super);
    function ContaInvestimento() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SELIC = 0.04;
        return _this;
    }
    ContaInvestimento.prototype.retirar = function (quantidade) {
        if (quantidade * 1.05 + 10 <= this.saldo) {
            this.saldo = this.saldo - (quantidade * 1.05 + 10);
            console.log("Saque realizado com sucesso!");
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    ContaInvestimento.prototype.valorizar = function () {
        this.saldo = this.saldo * (1 + this.SELIC);
    };
    ContaInvestimento.prototype.gerarRelatorio = function () {
        console.log("POUPANÇA");
        console.log("Numero: " + this.numero);
        console.log("Saldo: " + this.saldo);
        console.log("Rendimento: " + this.saldo * (1 + this.SELIC));
    };
    return ContaInvestimento;
}(Conta));
function daysBetween(date1, date2) {
    //Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
    // Convert back to days and return
    return Math.round(difference_ms / one_day);
}
var myBirth = new Date("1982-3-2");
var today = new Date();
console.log(daysBetween(myBirth, today) / 365);
