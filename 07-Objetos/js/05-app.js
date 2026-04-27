
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1Kg',
        medida: '1m'
    },
    fabricacion: {
        pais: 'china'
    }
        }
    }


console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);