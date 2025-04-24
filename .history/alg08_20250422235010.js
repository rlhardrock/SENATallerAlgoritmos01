const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirTresNumeros(callback) {
  let numeros = [];
  function pedir(i) {
    readline.question(`Introduce el número ${i + 1}: `, (num) => {
      numeros[i] = parseFloat(num);
      if (i < 2) {
        pedir(i + 1);
      } else {
        callback(numeros);
      }
    });
  }
  pedir(0);
}

function calcularMaximo(numeros) {
  const max = Math.max(...numeros);
  console.log(`👉 El número máximo es: ${max}`);
}

function calcularMinimo(numeros) {
  const min = Math.min(...numeros);
  console.log(`👉 El número mínimo es: ${min}`);
}

function calcularPromedio(numeros) {
  const suma = numeros.reduce((acc, val) => acc + val, 0);
  const promedio = suma / numeros.length;
  console.log(`👉 El promedio es: ${promedio.toFixed(2)}`);
}

function detectarMayusMinus(caracter) {
  if (caracter >= 'A' && caracter <= 'Z') {
    console.log(`La letra '${caracter}' es MAYÚSCULA.`);
  } else if (caracter >= 'a' && caracter <= 'z') {
    console.log(`La letra '${caracter}' es minúscula.`);
  } else {
    console.log(`'${caracter}' no es una letra.`);
  }
}

function detectarDigito(caracter) {
  if (caracter >= '0' && caracter <= '9') {
    console.log(`🔢 '${caracter}' es un dígito numérico.`);
  } else {
    console.log(`🚫 '${caracter}' no es un dígito numérico.`);
  }
}

pedirTresNumeros((numeros) => {
  calcularMaximo(numeros);
  calcularMinimo(numeros);
  calcularPromedio(numeros);

  readline.question('\nIntroduce una letra: ', (letra) => {
    detectarMayusMinus(letra);

    readline.question('\nIntroduce un carácter para verificar si es un dígito: ', (caracter) => {
      detectarDigito(caracter);
      readline.close();
    });
  });
});
