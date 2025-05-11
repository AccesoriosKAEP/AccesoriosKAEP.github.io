/* Reset y básicos */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #fff;
    color: #333;
    scroll-behavior: smooth;
}
a {
    text-decoration: none;
    color: inherit;
}

/* Variables de color pastel */
:root {
    --rosa: #f8cdd8;
    --celeste: #ccf0f7;
    --verde: #dfffc3;
    --lavanda: #e6d0fe;
    --texto: #333;
    --fondo-cards: #fff;
    --fondo-header: #fce4ec;
}

/* Encabezado */
header {
    background: var(--fondo-header);
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.logo h1 {
    font-size: 2em;
    color: var(--texto);
}
.logo .slogan {
    font-style: italic;
    color: #666;
}
.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
}
.currency-toggle button, #closeCart {
    background: var(--lavanda);
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}
.currency-toggle button:hover, #closeCart:hover {
    background: var(--celeste);
}
.contacto {
    font-weight: bold;
    color: var(--texto);
}
.cart-icon {
    font-size: 1.2em;
    cursor: pointer;
    position: relative;
}
.cart-icon span {
    background: red;
    color: #fff;
    border-radius: 50%;
    padding: 2px 6px;
    position: absolute;
    top: -8px;
    right: -10px;
    font-size: 0.8em;
}

/* Sección de productos */
main {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
}
.categoria {
    margin-bottom: 40px;
}
.categoria h2 {
    margin-bottom: 20px;
    color: var(--texto);
    text-align: center;
    font-size: 1.8em;
}
.productos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    gap: 20px;
}
.producto {
    background: var(--fondo-cards);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
}
.producto:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.producto img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}
.producto-info {
    padding: 15px;
    text-align: center;
}
.producto-info h3 {
    margin-bottom: 10px;
    color: var(--texto);
}
.producto-info p {
    margin-bottom: 10px;
    color: #555;
}
.producto-info button {
    background: var(--rosa);
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}
.producto-info button:hover {
    background: var(--verde);
}

/* Carrito de compras */
.carrito {
    position: fixed;
    top: 0;
    right: -350px;
    width: 350px;
    height: 100%;
    background: var(--lavanda);
    box-shadow: -2px 0 5px rgba(0,0,0,0.1);
    padding: 20px;
    transition: right 0.3s;
    z-index: 100;
}
.carrito.open {
    right: 0;
}
.carrito h3 {
    margin-bottom: 15px;
    color: var(--texto);
}
.carrito ul {
    list-style: none;
    margin-bottom: 15px;
}
.carrito li {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.carrito li button {
    background: crimson;
    border: none;
    color: #fff;
    padding: 4px 8px;
    border-radius: 3px;
    cursor: pointer;
    transition: background 0.3s;
}
.carrito li button:hover {
    background: #a30000;
}
#carritoTotal {
    font-weight: bold;
    margin-bottom: 15px;
}
#closeCart {
    display: block;
    width: 100%;
}

/* Pie de página */
footer {
    background: var(--fondo-header);
    text-align: center;
    padding: 15px 0;
    margin-top: 20px;
}
footer p {
    margin-bottom: 10px;
}
footer .redes a {
    margin: 0 10px;
    color: var(--texto);
    font-weight: bold;
    transition: color 0.3s;
}
footer .redes a:hover {
    color: var(--rosa);
}

/* Animación de aparición al hacer scroll */
.reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}
.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        text-align: center;
    }
    .header-right {
        margin-top: 15px;
    }
    .productos {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    .carrito {
        width: 90%;
    }
}
