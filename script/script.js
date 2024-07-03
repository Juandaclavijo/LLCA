// Detectar el evento de scroll
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  // Obtener el botón flotante por su ID
  var scrollTopButton = document.getElementById("scroll-top-btn");

  // Mostrar el botón cuando el desplazamiento es mayor a 20px desde la parte superior
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

// Función para hacer scroll suave hacia arriba al hacer clic en el botón
document.getElementById("scroll-top-btn").addEventListener("click", function(event) {
  event.preventDefault();
  // Scroll suave hacia arriba
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});