const producto = 'Monitor de 20 Pulgadas ';
const precio = '30 USD'

//estoy concatenando concatenar
console.log(producto.concat(precio));
console.log(producto.concat('En Descuento'));

console.log(producto + 'con un precio de": '+ precio);
console.log("El producto " + producto + "tiene un precio de: " + precio);
console.log("El producto ", producto, "tiene un precio de: " , precio);

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);