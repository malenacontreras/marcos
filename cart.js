// cart.js
(function() {
    // Inicializa el carrito a partir de localStorage o como arreglo vacío
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    function saveCart() {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }

    function updateCartUI() {
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartCount = document.getElementById("cart-count");
  
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = "";
            let total = 0;
            cart.forEach((item, index) => {
                total += item.price;
                const li = document.createElement("li");
                li.classList.add("cart-item");
                li.innerHTML = `
                    <span class="cart-item-name">${item.name} - $${item.price}</span>
                    <button class="button delete-btn" onclick="removeFromCart(${index})">
                        <svg viewBox="0 0 448 512" class="svgIcon">
                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                        </svg>
                    </button>
                `;
                cartItemsContainer.appendChild(li);
            });
  
            if (cartTotal) {
                cartTotal.innerText = total.toFixed(2);
            }
  
            if (cartCount) {
                cartCount.innerText = cart.length;
            }
        }
        saveCart();
    }
  
    // Exponer funciones globales para agregar y eliminar
    window.addToCart = function(name, price) {
        cart.push({ name, price });
        updateCartUI();
    };
  
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCartUI();
    };
  
    // Exponer una función para obtener el carrito (para usar en checkout, por ejemplo)
    window.getCart = function() {
        return cart;
    };
  
    // Al cargar el DOM, actualizamos la UI del carrito
    document.addEventListener("DOMContentLoaded", updateCartUI);
  
    // También se expone updateCartUI globalmente por si es necesario
    window.updateCartUI = updateCartUI;
})();
