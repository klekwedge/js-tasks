// Вернуть единичную матрицу n строк и n столбцов.
// Напишите функцию matrix(n), которая возвращает
// единичную матрицу n строк и n столбцов.

function matrix(n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res += 1;
      } else {
        res += 0;
      }
    }
    res += '\n';
  }

  return res;
}

console.log(matrix(1)); // 1
console.log(matrix(2));
// 10
// 01

console.log(matrix(3));
// 100
// 010
// 001
