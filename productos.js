document.addEventListener("DOMContentLoaded", () => {
  updateCartUI();

  document.getElementById("ordenar-btn").addEventListener("click", () => {
    const opciones = document.getElementById("ordenar-opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
  });
});


function toggleSearch() {
  const searchBar = document.getElementById("search-bar");
  searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
}

function searchProducts() {
  const term = document.getElementById("search-input").value.toLowerCase();
  document.querySelectorAll("#product").forEach(prod => {
    const name = prod.getAttribute("data-name").toLowerCase();
    prod.style.display = name.includes(term) ? "block" : "none";
  });
}

function ordenarProductos(tipo) {
  const productos = Array.from(document.querySelectorAll(""));
  productos.sort((a, b) => {
    const precioA = parseFloat(a.getAttribute("data-price"));
    const precioB = parseFloat(b.getAttribute("data-price"));
    return tipo === "asc" ? precioA - precioB : precioB - precioA;
  });
  const contenedor = document.querySelector("#products");
  productos.forEach(p => contenedor.appendChild(p));
}
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function goToProductPage(productName) {
  // Normaliza el nombre del producto para crear una URL válida
  let formattedName = productName.toLowerCase().replace(/\s+/g, '-'); // Convierte espacios en guiones
  window.location.href = `producto-${formattedName}.html`; // Redirige a la página del producto
}


function checkout() {
  // La función checkout usa la variable persistida en cart.js (global functions addToCart, etc.)
  if (getCart().length === 0) {
      alert("Tu carrito está vacío.");
      return;
  }

  let mensaje = "Buenos días, paso a detallarte los productos que quiero encargar:\n\n";
  let total = 0;

  getCart().forEach(item => {
      mensaje += `${item.name} - $${item.price.toFixed(2)}\n`;
      total += item.price;
  });

  mensaje += `\nTotal: $${total.toFixed(2)}`;
  let whatsappURL = `https://wa.me/5493547627139?text=${encodeURIComponent(mensaje)}`;
  window.location.href = whatsappURL;
}
