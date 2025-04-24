const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question('Introduce un número: ', (input) => {
     const numero = parseInt(input);

     if (isNaN(numero)) {
     console.log('⚠️ Eso no es un número válido.');
     } else {
          if (numero > 0) {
               console.log('✅ El número es mayor que 0.');
          } else {
               console.log('❌ El número NO es mayor que 0.');
          }

          if (numero % 2 === 0) {
               console.log('🔢 El número es PAR.');
          } else {
               console.log('🔢 El número es IMPAR.');
          }
     }

  rl.close();
});
