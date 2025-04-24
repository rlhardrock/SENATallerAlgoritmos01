function verificarPasajes(saldo) {
     const costoPasaje = 1700;
     const pasajes = Math.floor(saldo / costoPasaje);

     console.log(`Tienes ${pasajes} pasaje(s) disponibles.`);

     if (pasajes < 2) {
          console.warn("⚠️ Atención: Debes recargar tu tarjeta. Tienes menos de 2 pasajes.");
     }
}

verificarPasajes(5000);
