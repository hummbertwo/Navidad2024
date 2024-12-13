const bars = document.getElementById("bars")
const audio = document.getElementById("audio")

bars.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false
    bars.classList.remove("muted")
  } else {
    audio.muted = true
    bars.classList.add("muted")
  }
})

// Crear nieve
const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    snowflake.innerHTML = '&#10052;';
    document.body.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  };

  setInterval(createSnowflake, 200);

// Descargar PDF
 function downloadPDF1() {
            // URL del archivo PDF
            const pdfUrl = "descargas/pro1.pdf"; // Cambia esto por la ruta real del archivo PDF

            // Crear un enlace oculto
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "pro1.pdf"; // Nombre sugerido para la descarga

            // Agregar el enlace al documento y disparar la descarga
            document.body.appendChild(link);
            link.click();

            // Eliminar el enlace después de la descarga
            document.body.removeChild(link);
}

function downloadPDF2() {
    // URL del archivo PDF
    const pdfUrl = "descargas/pro2.pdf"; // Cambia esto por la ruta real del archivo PDF

    // Crear un enlace oculto
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pro2.pdf"; // Nombre sugerido para la descarga

    // Agregar el enlace al documento y disparar la descarga
    document.body.appendChild(link);
    link.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(link);
}
