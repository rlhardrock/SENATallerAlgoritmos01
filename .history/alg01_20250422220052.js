function saldoMegabus(saldo) {
     const valorPasaje = 1700;
     const pasajes = Math.floor(saldo / valorPasaje);

     console.log(`Tienes ${pasajes} pasaje(s) disponibles.`);

     if (pasajes < 2) {
          console.warn("⚠️ Atención: Debes recargar tu tarjeta. Tienes menos de 2 pasajes.");
     }
}

saldoMegabus(1000);
