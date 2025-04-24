let puntos = prompt("Ingrese la cantidad de puntos:");
puntos = parseInt(puntos);

let clase;
if (puntos > 2000) {
    clase = "Ejecutiva";
} else if (puntos >= 1000) {
    clase = "Normal";
} else {
    clase = "Económica";
}

alert("El viajero tiene acceso a la clase: " + clase);
