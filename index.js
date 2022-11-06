
let usuario = (prompt('Hola! Bienvenido a Game Zone! Ingresa tu usuario.'));
let password = parseInt(prompt('Gracias, ahora ingresa tu password.'));
let productoSeleccionado = parseInt(prompt(`Bienvenido ${usuario}! Que deseas comprar el dia de hoy? 1. PS5 | 2. XBOX Series X/S | 3. Nintendo Switch | 4. Videojuegos`));
let seguirComprando = true;
let totalCompra = 0;
let decision;
let totalCompraFinal = 0;
let valorDescuento;
let valorFinal;

// Array Productos
const productosArray = []

class newProduct {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock
    }
}

const ps5 = new newProduct(1, 'PS5', 500, 50);
productosArray.push(ps5);
const xbox = new newProduct(2, 'XBOX', 400, 55);
productosArray.push(xbox);
const nintendo = new newProduct(3, 'Nintendo Switch', 300, 60);
productosArray.push(nintendo);
const videojuego = new newProduct(4, 'Videojuego', 50, 80);
productosArray.push(videojuego);


// Array Carrito

const carrito = []

while (seguirComprando === true) {

    // Metodo de Busqueda

    const producto = productosArray.find(prod => prod.id === productoSeleccionado)


    if (producto) {
        carrito.push(producto);
    }

    totalCompra = totalCompra + producto.price


    alert(`${usuario}, tu total hasta ahora es de: ${totalCompra}.`)
    decision = parseInt(prompt(`${usuario} Quieres seguir comprando? 1. Si | 2. No`))

    if (decision === 1) {
        productoSeleccionado = parseInt(prompt(`Muy bien ${usuario}, escoge el producto que deseas comprar ahora: 1. PS5 | 2. XBOX Series X/S | 3. Nintendo Switch | 4. Videojuegos`))
    } else {
        seguirComprando = false
    }

}




function descuento() {
    if (totalCompra <= 1000) {
        descuento = 15
    } else if (totalCompra > 1000 && totalCompra <= 3000) {
        descuento = 25
    } else {
        descuento = 35
    }

    valorDescuento = totalCompra * (descuento / 100)
    valorFinal = totalCompra - valorDescuento
    return valorFinal

}

descuento()

parseInt(alert(`${usuario}, el total de tu compra es de ${valorFinal}. Gracias por preferirnos!`))

console.log(carrito)
















