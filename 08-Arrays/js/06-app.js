const carrito = [];

// Definir un producto

const producto= {
    nombre: 'Monitor',
    precio: 200
}

const producto2 = {
    nombre: 'Celular',
    precio: 5000
}

const producto3 ={
    nombre: 'teclado',
    precio: 50
}

let resultado;

//esta forma de agregar a una arreglo, es una forma declarativa
resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado ]


console.table(resultado);

