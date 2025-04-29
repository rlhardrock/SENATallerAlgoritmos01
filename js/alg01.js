document.getElementById('enunciado').innerHTML =
    "A través de un algoritmo ayude a un usuario de Megabus a saber cuántos<br>" +
    "pasajes tiene según el cupo de su tarjeta. Cada pasaje cuesta $1.700 pesos.<br>" +
    "Además es importante alertar al usuario cuando su cupo se encuentre con<br>" +
    "menos de 2 pasajes, se le informa que debe recargar su tarjeta.";

let inputSaldo = document.getElementById('saldoInput');
let botonEnviar = document.getElementById('botonEnviar');
let resultado = document.getElementById('resultado');
inputSaldo.focus();
botonEnviar.addEventListener('click', () => {
    const saldo = parseFloat(inputSaldo.value);

    if (!isNaN(saldo)) {
        const valorPasaje = 1700;
        const pasajesDisponibles = Math.floor(saldo / valorPasaje);

        if (pasajesDisponibles < 2) {
            resultado.innerHTML = "Debes recargar tu tarjeta. Tienes menos de 2 pasajes.";
        } else {
            resultado.innerHTML = "Tienes " + pasajesDisponibles + " pasajes disponibles.";
        }
    } else {
        resultado.innerHTML = "Por favor ingresa un número válido.";
    }
});

