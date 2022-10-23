// Сумма квадратов значений массива
// Напишите функцию sumOfSquares(arr), которая
// возвращает сумму квадратов значений массива.

function sumOfSquares(arr) {
  return arr.map((item) => item * item).reduce((prev, next) => prev + next);
}

console.log(sumOfSquares([1, 2, 3, 4, 5])); // 55
