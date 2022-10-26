// Вычислить сумму значений в массиве
// Напишите функцию для вычисления суммы значений в массиве.

function sum(arr) {
  return arr
    .filter((item) => typeof item === 'number')
    .reduce((prev, next) => prev + next);
}

console.log(sum([1, 2, 'a', 3])); // 6
