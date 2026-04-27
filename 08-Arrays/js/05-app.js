const carrito = [];

// Defini un producto

const producto= {
    nombre: 'Monitor',
    precio: 200
}

const producto2 = {
    nombre: 'Celular',
    precio: 5000
}

//esta es una forma de agregar a una arreglo, es una forma imperativa
carrito.push(producto);
carrito.push(producto2)

const producto3 ={
    nombre: 'teclado',
    precio: 50
}

carrito.unshift(producto3)

console.table(carrito);

//imperativa va a modificar el objeto actual, la declarativa no