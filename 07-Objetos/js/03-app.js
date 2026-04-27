
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';

//Eliminar propiedades del objeto
delete producto.disponible;


console.log(producto);