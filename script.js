let segundos = 10; // Tiempo inicial en segundos

const intervalId = setInterval(() => {
  console.log(segundos); // Muestra el tiempo en la consola

  if (segundos <= 0) {
    clearInterval(intervalId); // Detiene el intervalo
    console.log("¡Tiempo terminado!");
  } else {
    segundos--; // Decrementa los segundos
  }
}, 1000); // Ejecuta cada 1000 milisegundos (1 segundo)
