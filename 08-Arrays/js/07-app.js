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

const producto4 ={
    nombre: 'raton',
    precio: 50
}

const producto5 ={
    nombre: 'camara',
    precio: 50
}
carrito.unshift(producto3)
carrito.unshift(producto4)
carrito.unshift(producto5)
console.table(carrito);

//eliminar ultimo elemento de un arreglo
carrito.pop()
console.table(carrito);


//eliminar del inicio del arreglo
carrito.shift()
console.table(carrito);

//eliminar del medio

carrito.splice(1,1)

console.table(carrito);




const personas= [
    {nombre: 'camilo', edad: 10},
    {nombre: 'fabian', edad: 20}
]

console.log(personas[0])


let numero1 = 2
let numero2 = 3



console.log();