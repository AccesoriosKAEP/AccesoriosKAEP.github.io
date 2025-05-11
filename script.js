// Manejo del carrito de compras
const cartIcon = document.getElementById('cart-icon');
const cart = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

let cartItems = [];

// Mostrar/ocultar carrito
cartIcon.addEventListener('click', () => {
    cart.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.remove('active');
});

// Función para actualizar el carrito en la UI
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;
    cartItems.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        count += item.quantity;
        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <p>${item.name} x ${item.quantity} - $${itemTotal.toFixed(2)}</p>
            <button class="remove-item" data-index="${index}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemEl);
    });
    cartTotal.textContent = 'Total: $' + total.toFixed(2);
    cartCount.textContent = count;
    // Manejar eliminación de artículos
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index');
            cartItems.splice(index, 1);
            updateCartUI();
        });
    });
    // Si el carrito está vacío
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Carrito vacío</p>';
    }
}

// Función para agregar al carrito
function addToCart(name, price) {
    // Verificar si el artículo ya está en el carrito
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name: name, price: parseFloat(price), quantity: 1 });
    }
    updateCartUI();
}

// Asignar evento a botones "Agregar al carrito"
document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});

// Habilitar scroll suave
document.documentElement.style.scrollBehavior = 'smooth';
