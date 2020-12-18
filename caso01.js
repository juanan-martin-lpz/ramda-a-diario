const R = require('ramda');

/*----------------------------------------------------------------------

  CASO DE USO: Validacion de las propiedades de un objeto

  Vamos a validar que el objeto tiene todos sus campos "validos".

  -----------------------------------------------------------------------*/


// Creamos dos objetos para validar. Uno invalido y el otro valido
// Damos por valido que sus campos no sean nulos
let a = {
  nombre: null,
  apellidos: null,
  telefono: null,
  direccion: null
};


let b = {
  nombre: "Nombre",
  apellidos: "Apellidos",
  telefono: "900100100",
  direccion: "Calle Falsa, 123"
};

// Objeto para el formatoTelefono
let c = {
  nombre: "Nombre",
  apellidos: "Apellidos",
  telefono: "9001001000", // 10 digitos
  direccion: "Calle Falsa, 123"
};

// Creamos las condiciones. propEq solo aceptar valores, no funciones por lo que creamos
// funciones que nos digan si el valor de la propiedad es nulo
// En el segundo parametro podriamos poner cualquier valor que quisieramos como valido
const nombreIsNil = R.propEq('nombre', null );
const apellidosIsNil = R.propEq('apellidos', null);
const telefonoIsNil = R.propEq('telefono', null);
const direccionIsNil = R.propEq('direccion', null);

// Obtenemos el complemento de las funciones anteriores para que nos digan que no son nulas
// complement devuelve una funcion booleana devolviendo el contrario de la funcion pasada
const nombreValido = R.complement(nombreIsNil);
const apellidosValido = R.complement(apellidosIsNil);
const telefonoValido = R.complement(telefonoIsNil);
const direccionValida = R.complement(direccionIsNil);

// Con propSatisfies podemos pasarle una condicion mas avanzada.
// Recibe una lambda, el nombre de la propiedad y el objeto.
// En este caso se currifica, dejando el ultomo parametro para que se lo pase el allPass
const formatoTelefono = R.propSatisfies(v => (v.length > 5 && v.length < 10), 'telefono');

//

// Este es el validador.
// allPass recibe un array de predicados que si dan todos True devolvera true, false en cuanto
// una funcion retorne false
const validaObjeto = R.allPass([nombreValido, apellidosValido, telefonoValido, direccionValida, formatoTelefono]);

// Mostramos los resultados por pantalla
validaObjeto(a) ? console.log("El objeto es valido") : console.log("El objeto no es valido");
validaObjeto(b) ? console.log("El objeto es valido") : console.log("El objeto no es valido");
validaObjeto(c) ? console.log("El objeto es valido") : console.log("El objeto no es valido");
