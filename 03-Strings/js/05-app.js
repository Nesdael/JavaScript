const producto = "Monitor de 20 Pulgadas" ;


// .replace para remplazar
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0,7));
console.log(producto.slice(8));
//slice cuando pone un numero mayor que el otro primero, no va hacer nada en cambio substring
console.log(producto.slice(2,1));


// alternativa a slice

console.log(producto.substring(0,10));
//si lo hara, lo modifica y trata de hacer algo 
console.log(producto.substring(2,1));

const usuario = 'Dael'
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));