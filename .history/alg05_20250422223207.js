let a = 10;
let b = 5;

console.log("Antes del intercambio:");
console.log("a =", a, ", b =", b);

if (a > b) {
     let temp = a;
     a = b;
     b = temp;
}

console.log("Después del intercambio:");
console.log("a =", a);
console.log(", b =", b);
