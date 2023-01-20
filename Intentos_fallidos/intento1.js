/*
Este código define una variable llamada "currentNumber" con un valor inicial de 1,
una variable "increment" con un valor inicial de 2, y luego utiliza un ciclo "for" anidado para iterar 500 veces.
Dentro del ciclo interno, se agrega "increment" a "currentNumber" y se suma el resultado a una variable "sum".
Luego se aumenta "increment" en 2. Finalmente, se imprime el valor de "sum" en la consola.
*/
let numero = 1;
let incremento = 2;

for (let i = 1; i <= 501; i++) {
    for (let j = 0; j < 4; j++) {
        numero += incremento;
        sum += numero;
    }
    incremento += 2;
}

console.log(sum);