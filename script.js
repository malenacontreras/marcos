function animarImagen() {
  // Obtener elementos
  var full = document.getElementById("imagenEntera");
  var parteArriba = document.getElementById("parteArriba");
  var parteAbajo = document.getElementById("parteAbajo");
  var marca = document.getElementById("marca");
  var texto = document.getElementById("texto");

  texto.style.opacity = "0";
  setTimeout(function() {
    // Ocultar la imagen completa
    full.classList.add("hidden");

    // 2. Mostrar las imágenes cortadas
    parteArriba.classList.remove("hidden");
    parteAbajo.classList.remove("hidden");

    // Ubicar ambas imágenes en el centro con opacity 1
    parteArriba.style.left = "50%";
    parteArriba.style.top = "50%";
    parteAbajo.style.left = "50%";
    parteAbajo.style.top = "50%";
    parteArriba.style.opacity = "1";
    parteAbajo.style.opacity = "1";

    // Forzar reflow para asegurar que se tomen los valores iniciales
    void parteArriba.offsetWidth;

    // 3. Animar: mover y desvanecer las imágenes cortadas en 3 segundos
    // Mover parteArriba hacia la esquina superior izquierda y bajar su opacity a 0
    parteArriba.style.left = "5%";   // esquina izquierda
    parteArriba.style.top  = "9%";    // esquina superior
    parteArriba.style.opacity = "0";

    // Mover parteAbajo hacia la esquina inferior derecha y bajar su opacity a 0
    parteAbajo.style.left = "95%";   // esquina derecha
    parteAbajo.style.top  = "95%";    // esquina inferior
    parteAbajo.style.opacity = "0";

    // 4. Tras 3 segundos (duración de la animación de las imágenes cortadas),
    // mostrar el logo de la marca con efecto zoom in y fade in
    setTimeout(function() {
      // Aquí solo cambiamos opacity y transform para activar la transición
      marca.style.opacity = "1";
      marca.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);

  // Después de 5 segundos en total, redirigir a productos.html
  setTimeout(function() {
    window.location.href = "productos.html";
  }, 5000);

}, 500);
}
// Agregar el evento de clic a la imagen completa
document.getElementById("imagenEntera").addEventListener("click", animarImagen);
