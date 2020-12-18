const R = require('ramda');

/*----------------------------------------------------------------------

  CASO DE USO: Ordenacion de una lista de objetos por una de sus propiedades


  -----------------------------------------------------------------------*/


// Creamos algunos objetos para su uso

let a = {
  nombre: "C",
  apellidos: "C",
  telefono: "9",
  direccion: "C"
};

let b = {
  nombre: "B",
  apellidos: "B",
  telefono: "1",
  direccion: "B"
};

let c = {
  nombre: "D",
  apellidos: "D",
  telefono: "6",
  direccion: "D"
};

let d = {
  nombre: "A",
  apellidos: "A",
  telefono: "4",
  direccion: "A"
};

// Una lista con ellos....

let lista = [a, b, c ,d];

// Creamos los comparadores.
// Recibe dos objetos y podemos realizar la comparacion como nos plazca
let porNombre = R.comparator((a,b) => a.nombre < b.nombre );
let porTelefono = R.comparator((a,b) => a.telefono < b.telefono );

// Ordenamos una las listas por los comparadores
// No modifica in situ sino que devuelve otra lista ya ordenada
let ordenadaNombre = R.sort(porNombre, lista);
let ordenadaTelefono = R.sort(porTelefono, lista);

// ascend y descend
// Mas sencillos si se usa una sola propiedad
let porDireccionAsc = R.ascend(R.prop('direccion'));
let porDireccionDesc = R.descend(R.prop('direccion'));

// Nuevas listas.
let ordenadaDireccionAsc = R.sort(porDireccionAsc, lista);
let ordenadaDireccionDesc = R.sort(porDireccionDesc, lista);

// Mostramos los resultados.
console.log(ordenadaNombre);
console.log(ordenadaTelefono);
console.log(ordenadaDireccionAsc);
console.log(ordenadaDireccionDesc);
