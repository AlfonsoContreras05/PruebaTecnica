let sum = 1;
for (let i = 3; i <= 1003; i += 2) {
    sum += 4 * i * i - 6 * i + 6;
}
console.log(sum);