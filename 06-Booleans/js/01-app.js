const boolean1= true;
const boolean2= false;
const boolean3= "false";

console.log(boolean1);
console.log(boolean2);

console.log(boolean2 === boolean3);

//hacerlo asi no va a crear un boolean como arriba, si no que va a crear un objecto
const boolean4 = new Boolean(true);
console.log(boolean4);