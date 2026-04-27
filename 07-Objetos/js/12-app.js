//object literal
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

//object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500)
console.log(producto2);

const producto3 = new Producto('Monitor de 60 pulgadas', 4000)
console.log(producto3);