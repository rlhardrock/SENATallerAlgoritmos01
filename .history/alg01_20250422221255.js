function saldoMegabus(saldo) {
     const valorPasaje = 1700;
     const pasajesDisponibles = Math.floor(saldo / valorPasaje);

     console.log(`Tienes ${pasajesDisponibles} pasaje(s) disponibles.`);

     if (pasajesDisponibles < 2) {
          console.warn("Atención: Debes recargar tu tarjeta. Tienes menos de 2 pasajes.");
     }
}

saldoMegabus(1000);



