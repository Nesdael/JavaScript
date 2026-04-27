
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}


//anterior
//const nombre = producto.nombre

//now Destructuring
const { nombre, precio, disponible } = producto;
//const { precio } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);



