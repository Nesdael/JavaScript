
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


const { nombre, informacion: {fabricacion: {pais} } } = producto;

console.log(pais);