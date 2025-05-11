document.addEventListener('DOMContentLoaded', () => {
    // Datos de productos por categoría
    const productos = {
        collares: [
            { nombre: "Collar de perlas", precio: 25.00, imagen: "https://via.placeholder.com/300x150?text=Collar+de+perlas" },
            { nombre: "Collar de oro", precio: 35.00, imagen: "https://via.placeholder.com/300x150?text=Collar+de+oro" },
            { nombre: "Collar minimalista", precio: 18.00, imagen: "https://via.placeholder.com/300x150?text=Collar+minimalista" },
            { nombre: "Collar corazón", precio: 22.00, imagen: "https://via.placeholder.com/300x150?text=Collar+corazón" }
        ],
        pulseras: [
            { nombre: "Pulsera de charms", precio: 15.00, imagen: "https://via.placeholder.com/300x150?text=Pulsera+charms" },
            { nombre: "Pulsera de cuentas", precio: 12.00, imagen: "https://via.placeholder.com/300x150?text=Pulsera+de+cuentas" },
            { nombre: "Pulsera de cuero", precio: 20.00, imagen: "https://via.placeholder.com/300x150?text=Pulsera+de+cuero" },
            { nombre: "Pulsera elegante", precio: 30.00, imagen: "https://via.placeholder.com/300x150?text=Pulsera+elegante" }
        ],
        aros: [
            { nombre: "Aros de plata", precio: 18.00, imagen: "https://via.placeholder.com/300x150?text=Aros+de+plata" },
            { nombre: "Aros de colores", precio: 14.00, imagen: "https://via.placeholder.com/300x150?text=Aros+de+colores" },
            { nombre: "Aros minimalistas", precio: 16.00, imagen: "https://via.placeholder.com/300x150?text=Aros+minimalistas" },
            { nombre: "Aros colgantes", precio: 20.00, imagen: "https://via.placeholder.com/300x150?text=Aros+colgantes" }
        ],
        anillos: [
            { nombre: "Anillo de plata", precio: 10.00, imagen: "https://via.placeholder.com/300x150?text=Anillo+de+plata" },
            { nombre: "Anillo de oro", precio: 28.00, imagen: "https://via.placeholder.com/300x150?text=Anillo+de+oro" },
            { nombre: "Anillo con piedra", precio: 22.00, imagen: "https://via.placeholder.com/300x150?text=Anillo+con+piedra" },
            { nombre: "Anillo sencillo", precio: 8.00, imagen: "https://via.placeholder.com/300x150?text=Anillo+sencillo" }
        ]
    };

    const currencyBtn = document.getElementById('currencyBtn');
    const cartIcon = document.getElementById('cartIcon');
    const carritoElem = document.getElementById('carrito');
    const carritoList = document.getElementById('carritoList');
    const carritoTotal = document.getElementById('carritoTotal');
    const closeCartBtn = document.getElementById('closeCart');
    let currentCurrency = 'USD'; // USD o CRC
    let cart = [];

    // Generar tarjetas de productos en el DOM
    function generarProductos() {
        for (let categoria in productos) {
            const contenedor = document.getElementById(`productos-${categoria}`);
            productos[categoria].forEach((prod, index) => {
                const card = document.createElement('div');
                card.classList.add('producto');

                // Imagen del producto
                const img = document.createElement('img');
                img.src = prod.imagen;
                img.alt = prod.nombre;

                // Información del producto
                const info = document.createElement('div');
                info.classList.add('producto-info');

                const nombre = document.createElement('h3');
                nombre.textContent = prod.nombre;

                const precio = document.createElement('p');
                precio.classList.add('price');
                precio.textContent = `$${prod.precio.toFixed(2)}`;
                precio.dataset.precioUsd = prod.precio; // almacenar precio base en USD

                const btn = document.createElement('button');
                btn.textContent = 'Agregar al carrito';
                btn.addEventListener('click', () => agregarAlCarrito(prod));

                // Añadir elementos al contenedor
                info.appendChild(nombre);
                info.appendChild(precio);
                info.appendChild(btn);
                card.appendChild(img);
                card.appendChild(info);
                contenedor.appendChild(card);
            });
        }
    }

    // Agregar producto al carrito
    function agregarAlCarrito(producto) {
        cart.push(producto);
        actualizarCarrito();
        document.getElementById('cartCount').textContent = cart.length;
    }

    // Quitar producto del carrito (por índice)
    function quitarDelCarrito(index) {
        cart.splice(index, 1);
        actualizarCarrito();
        document.getElementById('cartCount').textContent = cart.length;
    }

    // Actualizar visualización del carrito
    function actualizarCarrito() {
        carritoList.innerHTML = '';
        let total = 0;
        cart.forEach((producto, index) => {
            const li = document.createElement('li');
            const nameSpan = document.createElement('span');
            nameSpan.textContent = producto.nombre;
            const priceSpan = document.createElement('span');
            let precioMostrado;
            if (currentCurrency === 'USD') {
                precioMostrado = `$${producto.precio.toFixed(2)}`;
            } else {
                precioMostrado = `₡${(producto.precio * 500).toFixed(0)}`;
            }
            priceSpan.textContent = precioMostrado;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.addEventListener('click', () => quitarDelCarrito(index));

            li.appendChild(nameSpan);
            li.appendChild(priceSpan);
            li.appendChild(removeBtn);
            carritoList.appendChild(li);
            total += producto.precio;
        });
        // Mostrar total
        if (currentCurrency === 'USD') {
            carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
        } else {
            carritoTotal.textContent = `Total: ₡${(total * 500).toFixed(0)}`;
        }
    }

    // Cambiar moneda entre USD y colones
    function toggleMoneda() {
        if (currentCurrency === 'USD') {
            currentCurrency = 'CRC';
            currencyBtn.textContent = 'Mostrar en $';
        } else {
            currentCurrency = 'USD';
            currencyBtn.textContent = 'Mostrar en ₡';
        }
        // Actualizar precios en la lista de productos
        document.querySelectorAll('.price').forEach(elem => {
            const precioUsd = parseFloat(elem.dataset.precioUsd);
            if (currentCurrency === 'USD') {
                elem.textContent = `$${precioUsd.toFixed(2)}`;
            } else {
                elem.textContent = `₡${(precioUsd * 500).toFixed(0)}`;
            }
        });
        // Actualizar carrito con la nueva moneda
        actualizarCarrito();
    }

    // Abrir/cerrar el carrito al hacer click en el icono o el botón de cerrar
    cartIcon.addEventListener('click', () => {
        carritoElem.classList.toggle('open');
    });
    closeCartBtn.addEventListener('click', () => {
        carritoElem.classList.remove('open');
    });

    // Evento del botón de moneda
    currencyBtn.addEventListener('click', toggleMoneda);

    // Animación: efecto "reveal" al hacer scroll
    const reveals = document.querySelectorAll('.reveal');
    function checkReveal() {
        for (let el of reveals) {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                el.classList.add('active');
            }
        }
    }
    window.addEventListener('scroll', checkReveal);

    // Inicialización
    generarProductos();
    checkReveal();
});
