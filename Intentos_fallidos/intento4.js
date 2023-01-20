//creo la matriz de 1003x1003
const n = 1003.0;
let matrix = new Array(n);
for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
}

//inicializo las variables que voy a usar para recorrer la matriz
let x = Math.floor(n/2);
let y = x;
let dx = 0;
let dy = -1;
let num = 1;

//recorro la matriz
for (let i = 0.0; i < n*n; i++) {
    matrix[x][y] = num++;
    //cambio de direccion si llego al borde
    if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1-y)) {
        [dx, dy] = [-dy, dx];
    }
    x += dx;
    y += dy;
}
//inicializo las variables para almacenar la suma de la diagonal y la antidiagonal
let diagonalSum = 0;
let antiDiagonalSum = 0;

//sumo los elementos de la diagonal y la antidiagonal
for (let i = 0; i < n; i++) {
    diagonalSum += matrix[i][i];
    antiDiagonalSum += matrix[i][n-1-i];
}

console.log("La suma de la diagonal es: " + diagonalSum);
console.log("La suma de la antidiagonal es: " + antiDiagonalSum);