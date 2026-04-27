// const nombre = 'hola'
// const precio = 20
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = {
//  llave          valor  
    nombre: 'tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();