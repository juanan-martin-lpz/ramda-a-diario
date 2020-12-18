const R = require('ramda');

/*----------------------------------------------------------------------

  CASO DE USO: Agrupamos y contamos objetos bajo una clave comun

  -----------------------------------------------------------------------*/


// Creamos algunos objetos para su uso

let a = {
  nombre: "C",
  apellidos: "C",
  telefono: "9",
  direccion: "C",
  cp: '1000'
};

let b = {
  nombre: "B",
  apellidos: "B",
  telefono: "1",
  direccion: "B",
  cp: '1001'
};

let c = {
  nombre: "D",
  apellidos: "D",
  telefono: "6",
  direccion: "D",
  cp: '1000'
};

let d = {
  nombre: "A",
  apellidos: "A",
  telefono: "4",
  direccion: "A",
  cp: '1001'
};

// Una lista con ellos....

let lista = [a, b, c ,d];

// Preparamos el predicado para el groupBy
// Devolveremos el valor que usaremos como clave
const byCP = function(persona) {
  return persona.cp;
};

// Agrupamos. Devuelve un objeto con las claves devueltas en el predicado
// como campos cuyo valor es un array con los objetos que cumplna con dicho
// predicado
let resultadosGroupBy = R.groupBy(byCP,lista);

console.log(resultadosGroupBy);

// Tambien podemos contar cuantos elementos nos arroja el predicado
// con la funcion countBy
let resultadosCountBy = R.countBy(byCP, lista);

console.log(resultadosCountBy);
