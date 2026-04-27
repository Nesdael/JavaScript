"use strict";

const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpd"
// delete producto.precio

console.log(producto);
console.log(Object.isSealed(producto));
//seal te deja permitir cambiar los valores de las llaves, pero no te deja anadir ni eliminar, en cambio freeze, no te deja nada