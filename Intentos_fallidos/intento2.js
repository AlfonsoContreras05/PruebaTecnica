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
let result = diagonal1 + diagonal2;
console.log(result);