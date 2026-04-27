const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 400},
    { nombre: 'Television 40 pulgadas', precio: 500},
    { nombre: 'Celular', precio: 600},
    { nombre: '4060 RTX', precio: 700},
    { nombre: 'PC TORRE COMPLETA', precio: 800},
    { nombre: '5070 RTX', precio: 900},
]

const nuevoArreglo = carrito.forEach(function (producto) {

    return `${producto.nombre} - precio: ${producto.precio}`
})

console.log('////////////////////////////////////////////////////');

const nuevoArreglo2 = carrito.map(function (producto) {

    return `${producto.nombre} - precio: ${producto.precio}`
})


// son bastantes similares pero .map va a llenar una variable con un arreglo nuevo y .forEach no

console.log(nuevoArreglo);
console.log(nuevoArreglo2);