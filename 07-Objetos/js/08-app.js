"use strict";

const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpd"
// delete producto.precio

console.log(producto);


console.log(Object.isFrozen(producto));
