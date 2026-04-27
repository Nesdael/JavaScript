
const producto = {
//  llave          valor  
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto,medidas);


//spread operator o rest operator
const resultado2 = {...producto, ...medidas} //mas utilizada

console.log(resultado);
console.log(resultado2);