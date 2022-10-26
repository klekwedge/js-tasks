// Вычислить произведение значений в массиве
// Напишите функцию для вычисления произведения значений в массиве.

function sum(arr) {
  return arr
    .filter((item) => typeof item === 'number')
    .reduce((prev, next) => prev * next);
}

console.log(sum([1, 2, 'a', 3])); // 6
console.log(sum([1, 2, 'a', 3, 5])); // 30