function asignarEquipo(nombre, cedula, edad) {
  let equipo;

  if (edad >= 25 && edad <= 40) {
    equipo = "Profesionales";
  } else if (edad >= 18 && edad <= 24) {
    equipo = "Aficionados";
  } else if (edad >= 12 && edad <= 17) {
    equipo = "Novatos";
  } else {
    equipo = "No asignado a ningún equipo";
  }

  return `Jugador: ${nombre}\nCédula: ${cedula}\nEdad: ${edad}\nEquipo asignado: ${equipo}`;
}

// Ejemplo de uso:
const resultado = asignarEquipo("Luis Pérez", "12345678", 22);
console.log(resultado);
