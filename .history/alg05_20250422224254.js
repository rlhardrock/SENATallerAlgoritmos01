let a = 55;
let b = 100;

console.log("Antes del intercambio, constantes A y B definidas:");
console.log("a = ", a);
console.log("b = ", b);

if (a > b) {
     let temp = a;
     a = b;
     b = temp;
}

console.log("Después del primer intercambio, siendo A menor que B:");
console.log("a = ", a);
console.log("b = ", b);

if (a < b) {
     let temp = a;
     a = b;
     b = temp;
}


console.log("Después del segundo intercambio, siendo A menor que A:");
console.log("a = ", a);
console.log("b = ", b);