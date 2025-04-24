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


 /* // Requiere el módulo readline para leer la entrada desde la consola
const readline = require('readline');

// Crear una interfaz para leer los datos del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitar los tres números al usuario
rl.question("Ingresa el primer número: ", (num1) => {
  rl.question("Ingresa el segundo número: ", (num2) => {
    rl.question("Ingresa el tercer número: ", (num3) => {

      // Convertir los números ingresados de string a enteros
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      num3 = parseInt(num3);

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

      // Cerrar la interfaz de lectura de la consola
      rl.close();
    });
  });
});
 */