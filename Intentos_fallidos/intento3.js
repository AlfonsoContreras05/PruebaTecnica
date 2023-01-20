function spiralSum(){
    let size = 501;
    let spiral = new Array(size);
    for (let i = 0; i < size; i++) {
        spiral[i] = new Array(size).fill(0);
    }
    let x = Math.floor(size / 2);
    let y = x;
    let num = 1;
    let dx = 0;
    let dy = -1;
    spiral[x][y] = num;
    num++;
    for (let i = 1; i <= size * size; i++) {
        if (x === 0 && y === size - 1) {
            dx = 1;
            dy = 0;
        } else if (x === size - 1 && y === size - 1) {
            dx = 0;
            dy = -1;
        } else if (x === size - 1 && y === 0) {
            dx = -1;
            dy = 0;
        } else if (x === 0) {
            dx = 1;
            dy = 0;
        } else if (y === 0) {
            dx = 0;
            dy = 1;
        } else if (spiral[x - 1][y] === undefined || spiral[x-1][y] === 0) {
            dx = 0;
            dy = 1;
        } else if (spiral[x][y - 1] === undefined || spiral[x][y-1] === 0) {
            dx = -1;
            dy = 0;
        }
        x += dx;
        y += dy;
        spiral[x][y] = num;
        num++;
        return spiral;
    }
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < size; i++) {
        diagonal1 += spiral[i][i];
        console.log(diagonal1);
        diagonal2 += spiral[i][size - 1 - i];
        console.log(diagonal2);
    }
    console.log(diagonal1);
    console.log(diagonal2);
    return diagonal1 + diagonal2;
    }
    console.log(spiralSum());   


