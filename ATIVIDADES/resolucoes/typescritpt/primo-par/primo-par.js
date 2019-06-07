function ehPrimo(x) {
    for (var index = 2; index < x; index++) {
        if ((x % index) == 0.0)
            return false;
    }
    return true;
}
function ehPar(x) {
    if (x % 2 == 0)
        return true;
    return false;
}
console.log(ehPrimo(10)); // false
console.log(ehPrimo(2)); // true
console.log(ehPar(10)); //true
console.log(ehPar(15)); //false
