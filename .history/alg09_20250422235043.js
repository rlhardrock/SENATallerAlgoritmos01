let nota = parseFloat(prompt("Ingresa la nota del estudiante (0.0 a 5.0):"));

if (nota >= 0 && nota <= 5) {
  let estado = "";

  if (nota === 5.0) {
    estado = "EXCELENTE";
  } else if (nota >= 4.0) {
    estado = "BUENO";
  } else if (nota >= 3.0) {
    estado = "REGULAR";
  } else {
    estado = "DEFICIENTE";
  }

  console.log(`La nota es ${nota} y el estado del estudiante es: ${estado}`);
} else {
  console.log("Nota inválida. Por favor ingrese un número entre 0.0 y 5.0");
}

