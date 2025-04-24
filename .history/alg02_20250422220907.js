const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
     });

     rl.question("Ingrese un número: ", function(input) {
     let numero = parseFloat(input);

     if (numero > 0) {
          console.log("El número es mayor que 0.");
     } else {
          console.log("El número NO es mayor que 0.");
     }

     rl.close();
});