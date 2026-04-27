
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}


//anterior
//const nombre = producto.nombre

//now Destructuring
const { nombre } = producto;

console.log(nombre);

//destructuring con arreglos

const numeros = [10,20,30,40,50]

const [primero] = numeros
console.log(primero);

const [, , tercero] = numeros
console.log(tercero);

const [one, segundo, ...three] = numeros
console.log(three);