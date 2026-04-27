const producto = "Monitor de 20 Pulgadas";

// .repetear te va a permitir repetir una cadena de texto...

const texto = 'EN PROMOCION '.repeat(3)

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = 'estoy aprendiendo JS moderno'

console.log(actividad.split(" "));

const hobbies = 'Gym, Cocinar, Jugar, Ver Peliculas'
console.log(hobbies.split(","));

const tweet = 'aprendiendo JS moderno #jijija'
console.log(tweet.split("#"));