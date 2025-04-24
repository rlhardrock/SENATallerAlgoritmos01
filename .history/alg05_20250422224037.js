let a = 55;
let b = 100;

console.log("Antes del intercambio, con A menor que B:");
console.log("a = ", a);
console.log("b = ", b);

if (a > b) {
     let temp = a;
     a = b;
     b = temp;
}

console.log("Después del primer intercambio:");
console.log("a = ", a);
console.log("b = ", b);

if (a > b) {
     let temp = a;
     a = b;
     b = temp;
}


console.log("Después del segundo intercambio:");
console.log("a = ", a);
console.log("b = ", b);