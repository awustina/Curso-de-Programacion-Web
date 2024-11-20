var numero1 = 10;
var numero2 = 25;

var resta = numero2 - numero1;
document.write("<p>La resta es: " + resta + "</p>");

var mult = numero1 * numero2; // Corrige el operador para multiplicación
document.write("<p>La multiplicación es: " + mult + "</p>");

var div = numero2 / numero1;
document.write("<p>La división es: " + div + "</p>");

var resto = numero2 % numero1;
document.write("<p>El resto de la división es: " + resto + "</p>");

var like = 10; 
like = like + 1; // Incremento
like = like - 1; // Decremento

// Operadores lógicos
var esMayor = true;
var tienePermiso = false;
var esMayorYtienePermiso = esMayor && tienePermiso;
document.write("<p>Resultado del AND: " + esMayorYtienePermiso + "</p>");

esMayorYtienePermiso = esMayor || tienePermiso;
document.write("<p>Resultado del OR: " + esMayorYtienePermiso + "</p>");

document.write("<p>La negación de esMayor: " + !esMayor + "</p>");

// Comparación 
var resultado = numero1 > numero2;
document.write("<p>¿numero1 es mayor que numero2?: " + resultado + "</p>");

resultado = numero1 < numero2;
document.write("<p>¿numero1 es menor que numero2?: " + resultado + "</p>");

resultado = numero1 == numero2; // Corrección de variable
document.write("<p>¿numero1 es igual a numero2?: " + resultado + "</p>");

resultado = numero1 != numero2;
document.write("<p>¿numero1 es diferente de numero2?: " + resultado + "</p>");

// Condicionales
if (numero1 < numero2) {
    document.write("<p>" + numero1 + " es menor que " + numero2 + "</p>");
}
