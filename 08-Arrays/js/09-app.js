const carrito = [
    { nombre: 'monitor 27 pulgadas', precio: 400},
    { nombre: 'Television 40 pulgadas', precio: 500},
    { nombre: 'Celular', precio: 600},
    { nombre: '4060 RTX', precio: 700},
    { nombre: 'PC TORRE COMPLETA', precio: 800},
    { nombre: '5070 RTX', precio: 900},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`)
}

console.log('/////////////////////////////////////////////////');
carrito.forEach(function (producto) {

    console.log(`${producto.nombre} - precio: ${producto.precio}`)
})

