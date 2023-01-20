/* e llegado a esta conclusion en base de buscar informacion a una formula que me permita sumar los valores de unas diagonales principales tomando como parametro el tamaño de un cuadrado por decirlo sencillo,
intencionamos la posicion inicial y ademas definimos la ruta que ira dibujando la funcion para que itere sobre ella y rescate los parametros necesarios para luego ser sumados, al final mostrados por consola*/

//Se declara una variable llamada "sum" y se le asigna el valor 1.
let sum = 1;
//Se inicia un ciclo "for" que se ejecutará mientras la variable "i" sea menor o igual a al numero deseado pensando en que en las diagonales son numeros impares adicionamos un numero impar.
//La variable "i" comienza en 3 y se incrementa en 2 en cada iteración del ciclo.
for (let i = 3; i <= 1003; i += 2) {
//Dentro del ciclo "for", se agrega al valor actual de la variable "sum" el resultado de la expresión (4 * i * i - 6 * i + 6).
  sum += 4 * i * i - 6 * i + 6;
}
//Una vez que el ciclo "for" ha terminado, se utiliza la función "console.log()" para imprimir el valor final de la variable "sum" en la consola. 

console.log(sum);
/*En resumen, el código inicializa una variable sum con valor 1 y a través de un ciclo for va sumando de a uno el resultado de la formula investigada para cada iteración.
Al finalizar el ciclo for, se imprime el valor final de sum , la cual suma los numeros que componen las diagonales en la consola.*/