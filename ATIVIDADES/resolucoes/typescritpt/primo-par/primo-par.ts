function ehPrimo(x:number):boolean{

    for (let index:number = 2; index < x; index++) {
        if((x%index) == 0.0) return false;
    }
    return true;

}

function ehPar(x:number):boolean{
    if(x%2==0) return true;
    return false;
}

console.log(ehPrimo(10)); // false
console.log(ehPrimo(2)); // true

console.log(ehPar(10)); //true
console.log(ehPar(15)); //false