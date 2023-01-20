/*
un arreglo bidimensional llamado "spiral" que contiene una espiral de números.
Luego define dos variables, "diagonal1" y "diagonal2", con valores iniciales de 0. Utiliza un ciclo "for" para iterar sobre las filas del arreglo "spiral".
Dentro del ciclo, se suma el valor de cada fila en la misma posición de la columna en "diagonal1" y se suma el valor de cada fila en la posición opuesta de la columna en "diagonal2".
Finalmente, se suman "diagonal1" y "diagonal2" y se almacena en una variable "resultado" y se imprime en la consola.
*/





let spiral = [    [21, 22, 23, 24, 25],
    [20,  7,  8,  9, 10],
    [19,  6,  1,  2, 11],
    [18,  5,  4,  3, 12],
    [17, 16, 15, 14, 13],
];

let diagonal1 = 0, diagonal2 = 0;

for (let i = 0; i < spiral.length; ++i) {
    diagonal1 += spiral[i][i];
    diagonal2 += spiral[i][spiral.length -1 - i];
}
let resultado = diagonal1 + diagonal2;
console.log(resultado);