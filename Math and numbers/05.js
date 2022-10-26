// Найти наибольшее значение в массиве
// Напишите функцию JavaScript, чтобы найти максимальное значение в массиве.

function max(arr) {
  return Math.max(...arr);
}

console.log(max([12, 34, 77, 1])); // 77
console.log(max([-18, -34, 0, -56, -1])); // 0
