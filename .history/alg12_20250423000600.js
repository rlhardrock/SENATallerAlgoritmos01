// Solicitar tres números al usuario
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Verificar si el segundo número es mayor que el primero y el tercero
if (num2 > num1 && num2 > num3) {
  // Intercambiar los valores
  let temp = num1;
  num1 = num2;
  num2 = num3;
  num3 = temp;

  console.log(`Los números intercambiados son: ${num1}, ${num2}, ${num3}`);
} else {
  console.log("El segundo número no es mayor que el primero y el tercero. No se realiza el intercambio.");
}


 b