/*console.log("hola")

var nombre = "Iron man";
consoloe.log(nombre);
var edad = 20;
console.log(edad);

var edad2 = "32";
console.log(edad2);

var dia = prompt ("ingrese un dia de la semana");
var texto = dia + " es un lindo para programar"
console.log(texto)

var perro = "Boxer";
console.log(typeof perro);

var numero = prompt ("ingrese un numero")
console.log(typeof numero);
numero = parseInt (numero);
console.log(typeof numeroparse);
var suma = numeroparse + 10;

numero += 10;

console.log(suma);

var proposicion = true;
var proposicion2 = false;
console.log(typeof proposicion);

// && //esto es la conjuncion y
// || //esto es la conjuncion o
// ! // esto es el no

var condicion= false ;

if (cond) {
  console.log("la proposicion es verdadera");
}
else {
  console.log("la proposicion es falsa");
}

var edad = prompt ("Cuantos años tiene?");
edad = parseInt (edad);
if (edad < 16) {
  console.log("Usted no puede votar");
}
else {
  console.log("Usted puede votar");
};

var num = prompt ("Ingrese un numero");
var num2 = prompt ("Ingrese un numero");
console.log(parseInt(num) + parseInt(num2));


// Funciones
var numero = parseInt(prompt ("Ingrese un numero"));

function sumar10 (num) {
  num += 10;
  console.log(num);
}

sumar10 (20); //parametro

console.log("hola".length);

function contar (palabra){
  console.log(palabra.length);
};
var palabra = prompt ("ingrese una palabra")
contar ("hola");

scope;

"use strict"; //no permite variables globales

var numero1 = parseInt (prompt("ingrese un numero"));
var numero2 = parseInt (prompt("ingrese un numero"));

function  sumarnumeros (num1 , num2){
  var suma = num1 + num2;
  console.log(suma);
}

sumarnumeros(numero1, numero2);

var nombre = prompt ("Ingrese el nombre del usuario");
var edad = prompt ("Ingrese edad del usuario");
console.log( nombre + " tiene " + edad + " años");

for (var i = 0; i < 3; i++) {
  var nombre = prompt ("Ingrese el nombre del usuario");
  var edad = prompt ("Ingrese edad del usuario");
  console.log( nombre + " tiene " + edad + " años");
}

var animales = ["burro","gato","perro"];
console.log(animales);
console.log(animales[4]);

for (var i = 0; i < animales.length; i++) {
  console.log("hola");
  console.log(array[i]);
}

function recorrerarray (arrayarecorrer) {
  for (var i = 0; i < arrayarecorrer.length; i++) {
   arrayarecorrer[i]
  }
}
var animales =["burro","gato", "unicornio"]

recorrerarray (animales);

/*

EJERCICIO N°1
"Dado el siguiente Array, informar por pantalla si se
encontró algun elemento que no sea un string y en que posición está"



var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];

for (var i = 0; i < animales.length; i++) {
  if (typeof animales[i] != "string") {
    console.log("Esto no es una string y esta en la posición " + i)
  }
}

/*

EJERCICIO N°3

Dado el siguiente array, encontrar si tiene el valor "-"
reemplazarlo por "valor vacío".
Al finalizar el programa, mostrar el array
e indicar la cantidad de veces que el valor
fue reemplazado.



var continentes = ['Asia','America','Europa','-','Oceanía','Africa','-','Antártida'];
var paises = ["Argnetina" , "Colombia", "Peru" , "Alemania"];
function reemplazarGuiones (arrayConGuiones) {
var contador = 0
for (var i = 0; i < arrayConGuiones.length; i++) {
  if (continentes[i] == "-") {
  console.log("valor vacio");
  contador ++;
  }
}
}
console.log(continentes);
console.log("Cantidad de vacios es " + contador);

var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];
for (var i = 0; i < animales.length; i++) {
  console.log(animales[i]);
  break;
}

var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];
for (var i = 0; i < animales.length; i++) {
  console.log(animales[i]);
  continue;
}


EJERCICIO N°4
"Crear una funcion que se llame "construirSaludo" la cual reciba un nombre y un día ingresado por pantalla.
Luego crear una función "mostrarMensaje" que reciba el mensaje creado y lo muestre por pantalla y por consola."
(function () {
 function construirSaludo (nombre, dia) {
  var mensaje = "Hola" + nombre + ". Hoy es" + dia;
  return mensaje;
}

function mostrarMensaje (mensaje) {
  console.log(mensaje);
}

var nombreIngresado = prompt ("Por favor ingrese su nombre")
var diaIngrsado = prompt ("Ahora ingrese el dia de hoy");

var mensajeCreado = construirSaludo(nombreIngresado,diaIngrsado);

mostrarMensaje (mensajeCreado);
})()

(function () {
  var nombre = "Carlos";
  var edad = 12;

  while (edad < 18) {
    console.log("Que siga la fiesta");
  }
  console.log("Se acabo la fiesta");
})()

(function () {
  var mayorEdad;

  var nombreAlumno = prompt ("Por favor ingrese el nombre de algun alumno")
  var edad = parseInt(prompt ("Por favor ingrese la edad del alumno"))
  var mayorEdad = edadAlumno
  var ingresarNuevo = confirm ("Quiere ingresar un nuevo alumno?")

  console.log(nombreAlumno,edadAlumno);

  while (ingresarNuevo === true) {
    nombreAlumno = prompt ("Por favor ingrese el nombre del alumno")
    edadAlumno = parseInt(prompt ("Por favor ingrese edad del alumno"))

    if (mayorEdad < edadAlumno) {
      mayorEdad=edadAlumno
    }
    ingresarNuevo = confirm ("QUiere ingresar un nuevo alumno")
  }
  console.log("fin del programa");


  EJERCICIO N°9
  "Realizar una funcion que tome un array como parametro
  y muestre por pantalla la cantidad de elementos tipo number,
  la cantidad de elementos tipo string y la cantidad de elementos tipo boolean.
  Luego llamar a la funcion con 3 arrays distintos."


(function (){
  "use strict";
  var array1 = [123,'azul',true,false,'verde','gris'];
  var array2 = ['azul','gris'];
  var array3 = [];

  function  contarTipos (arrayARecorrer){
    var cantStrings= 0;
    var cantNumeros = 0;
    var cantBooleanos = 0;

    for (var i = 0; i < arrayARecorrer.length; i++) {
      if (typeof arrayARecorrer[i] === "string") {
            cantStrings++;
      }
      else if (typeof arrayARecorrer[i] === "number") {
            cantNumeros++;
          }
      else if (typeof arrayARecorrer[i] === "boolean"){
            cantBooleanos++;
          }
      }
    }
    console.log("La cantidad de booleanos es " + cantBooleanos);
    console.log("La cantidad de numeros es " + cantNumeros);
    console.log("La cantidad de strings es " + cantStrings);
  }
  contarTipos(array1);
  contarTipos(array2);
  contarTipos(array3);

var colores = []
function

*/
/*
EJERCICIO N°7

Dado el siguiente array, insertar el valor "Ford"
exactamente en la mitad del array
Sin reemplazar ninguna posicion del mismo.


(function(){
  var marcas = ['Ferrari','Audi','Nissan','Kia'];
  var marcas2 = [];
  var elemento;

  for (var i = 0; i < 2; i++) {
    elemento = marcas.pop();
    marcas2.push(elemento);
  }
marcas.push("ford");

  for (var i = 0; i < marcas2.length; i++) {
    elemento =  marcas2.pop()
    marcas.push(elemento);
  }
  console.log(marcas);
})
*/
funcion(){
  for (var i = 0; i < apellidos.length; i++) {
    apellidos[i]
    for (var j = 0; j < colores.length; i++) {
      if (apellidos[i] === colores[j]) {
        console.log("es igual");
        break;
      }
    }
  }
}
