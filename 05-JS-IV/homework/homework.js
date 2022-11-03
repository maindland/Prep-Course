// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:

  const cat = {
    nombre: nombre,   // Prpiedad : Argumento de la propiedad
    edad: edad,
    meow: function (){  // Metodo del objeto.
      return 'Meow!';
    }
  };
  return cat;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  objeto[property] = null;  // Si no existe se crea una propiedad y se le asgina el valor de null.
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:

  objeto[metodo]();  // Forma para invocar el método de una función.
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  var restul = objetoMisterioso.numeroMisterioso * 5; // Tomar una propiedad existente para ser  usada 
  return restul;
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];  // Eliminar la propiedad de un objeto.
  return objeto
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

  const person = {  // Se define un objeto con los parametros de la función.
    nombre: nombre,
    email: email,
    password: password
  }
  return person;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:

  if (usuario['email']){  // Condición que valida si existe un valor asociado a una propiedad.
    return true;
  } else {
    return false;
  }
  
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

  return objeto.hasOwnProperty(propiedad);  // Método que permite validar si existe una propiedad para el objeto. 
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:

  // return password === usuario['password']
if (password === usuario['password']){  // Valida si el valor de la propiedad "password" del objeto "usuario" es igual a una ingresada.
  return true;
  } else {    // Se puede omitir la validación del if, solo com el return devuelve "false" o "True"
    return false;
  }
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

  usuario.password = nuevaPassword;  // Reemplazar el valor de una propiedad existente del objeto.
  return usuario
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

  usuario.amigos.push(nuevoAmigo);  // Agregar valor a un array el cual es propiedad de un objeto.
  return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  for (var user = 0; user < usuarios.length; user++) {  // Al ser un array se recorre mediante un blucle for  
    usuarios[user].esPremium = true; // Con cada iteración se modifica el valor de la propiedad esPremium en cada usuario que contenga el array.
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

  var suma = 0; // Varible contador , la cual llevara la suma de los likes.
  for (var data = 0; data < usuario.posts.length; data++) { // Con este For definimos que recorra dentro del array post.
    suma = suma + usuario.posts[data].likes;  // Por cada iteración va sumar el valor a la varible suma.
  }
  return suma;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {  // Se agina un nuevo valor para el metodo del objeto el cual calcule el descuento con las propueades del mismo objeto.
    return this.precio - ( this.precio * this.porcentajeDeDescuento );
  };
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
