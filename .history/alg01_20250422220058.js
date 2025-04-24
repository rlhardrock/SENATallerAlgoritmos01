function saldoMegabus(saldo) {
     const valorPasaje = 1700;
     const pasajesDis = Math.floor(saldo / valorPasaje);

     console.log(`Tienes ${pasajesDis} pasaje(s) disponibles.`);

     if (pasajes < 2) {
          console.warn("⚠️ Atención: Debes recargar tu tarjeta. Tienes menos de 2 pasajes.");
     }
}

saldoMegabus(1000);
